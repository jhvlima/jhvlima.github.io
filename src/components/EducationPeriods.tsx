"use client";

import { useLanguage } from '@/context/LanguageContext';
import type { AcademicPeriod, EducationStatus } from '@/data/education';
import type { TranslationKey } from '@/data/translations';

export const statusPresentation = {
  completed: {labelKey:'sem_completed',badgeClass:'notebook-tone-skills'},
  ongoing: {labelKey:'sem_ongoing',badgeClass:'notebook-tone-web'},
  planned: {labelKey:'sem_pending',badgeClass:'notebook-tone-neutral'},
} as const satisfies Record<EducationStatus,{labelKey:TranslationKey;badgeClass:string}>;

export default function EducationPeriods({ periods }: { periods: readonly AcademicPeriod[] }) {
  const { t, lang } = useLanguage();
  const formatTitle = (number:number) => {
    const term=t('education_semester');
    if(lang==='en') {
      const suffix=number===1?'st':number===2?'nd':number===3?'rd':'th';
      return `${number}${suffix} ${term}`;
    }
    return lang==='ja'?`${number}${term}`:`${number}º ${term}`;
  };
  const formatCount = (count:number) => {
    const label=t(count===1?'education_subject_singular':'education_subject_plural');
    return lang==='ja'?`${count}${label}`:`${count} ${label}`;
  };

  return (
    <div>
      <p className="notebook-period-hint">{t('education_period_hint')}</p>
      <ol className="notebook-period-list">
        {periods.map(period => {
          const status=statusPresentation[period.status];
          const title=formatTitle(period.ordinal);
          const current=period.status==='ongoing';
          return (
            <li key={period.id}>
              <details className="education-details education-period notebook-period" open={current}>
                <summary className="education-summary" aria-current={current?'step':undefined}>
                  <span className="notebook-period-title">
                    <strong>{title}</strong>
                    <span className={`notebook-topic ${status.badgeClass}`}>{t(status.labelKey)}</span>
                  </span>
                  <span className="notebook-period-count">
                    <span>{formatCount(period.items.length)}</span>
                    <span aria-hidden="true" className="education-chevron">
                      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="m5 7.5 5 5 5-5" /></svg>
                    </span>
                  </span>
                </summary>
                <ul aria-label={`${title}: ${formatCount(period.items.length)}`} className="notebook-subjects">
                  {period.items.map(item => <li key={item.id}>{t(item.labelKey)}</li>)}
                </ul>
              </details>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
