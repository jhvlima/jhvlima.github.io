"use client";

import { useLanguage } from '@/context/LanguageContext';
import {
  educationData,
  type EducationStatus,
} from '@/data/education';
import type { TranslationKey } from '@/data/translations';

const statusPresentation = {
  completed: {
    labelKey: 'sem_completed',
    markerClass: 'border-green-600 bg-green-500 text-white',
    badgeClass: 'border-green-200 bg-green-50 text-green-800',
  },
  ongoing: {
    labelKey: 'sem_ongoing',
    markerClass: 'border-blue-600 bg-blue-500 text-white shadow-[0_0_0_5px_rgba(59,130,246,0.12)]',
    badgeClass: 'border-blue-200 bg-blue-50 text-blue-800',
  },
  planned: {
    labelKey: 'sem_pending',
    markerClass: 'border-gray-300 bg-white text-gray-600',
    badgeClass: 'border-gray-200 bg-gray-50 text-gray-700',
  },
} as const satisfies Record<
  EducationStatus,
  {
    labelKey: TranslationKey;
    markerClass: string;
    badgeClass: string;
  }
>;

export default function EducationCard() {
  const { t, lang } = useLanguage();

  const formatPeriodTitle = (number: number) => {
    const term = t('education_semester');

    if (lang === 'en') {
      const suffix = number === 1 ? 'st' : number === 2 ? 'nd' : number === 3 ? 'rd' : 'th';
      return `${number}${suffix} ${term}`;
    }

    if (lang === 'ja') return `${number}${term}`;

    return `${number}º ${term}`;
  };

  const formatPeriodCount = (count: number) => {
    if (lang === 'ja') return `${count}${t('education_periods_label')}`;
    return `${count} ${t('education_periods_label')}`;
  };

  const formatSubjectCount = (count: number) => {
    const label = count === 1
      ? t('education_subject_singular')
      : t('education_subject_plural');

    if (lang === 'ja') return `${count}${label}`;
    return `${count} ${label}`;
  };

  return (
    <div>
      <header className="mb-2">
        <h2 id="education-title" className="mb-2 text-2xl font-bold text-gray-800">
          {t('education_title')}
        </h2>
        <p className="max-w-2xl leading-relaxed text-gray-600">
          {t('education_intro')}
        </p>
      </header>

      <div className="education-flow-canvas py-8">
        <ol
          aria-label={t('education_path_label')}
          className="relative space-y-14"
        >
          {educationData.programs.map((program) => {
            const programStatus = statusPresentation[program.status];
            const featuredItems = program.periods.flatMap((period) =>
              period.items.filter((item) => 'featured' in item && item.featured),
            );

            return (
              <li key={program.id}>
                <details
                  className="education-details education-program group relative"
                  open={program.status === 'ongoing'}
                >
                  <summary className="education-summary relative z-10 ml-12 min-h-11 cursor-pointer list-none rounded-2xl border border-green-200 bg-white p-4 shadow-sm transition-[border-color,box-shadow] hover:border-green-400 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-700 motion-reduce:transition-none md:ml-16 md:p-5 [&::-webkit-details-marker]:hidden">
                    <span
                      aria-hidden="true"
                      className="absolute -left-12 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border-2 border-green-600 bg-green-500 text-white shadow-[0_0_0_6px_rgba(244,244,249,0.96)] md:-left-16 md:h-12 md:w-12"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-4 w-4 md:h-6 md:w-6"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m3 9 9-5 9 5-9 5-9-5Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.2V16c2.8 2.1 7.2 2.1 10 0v-4.8M21 9v6" />
                      </svg>
                    </span>

                    <span className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <span className="min-w-0">
                        <span className="mb-1 block text-xs font-bold uppercase tracking-[0.18em] text-green-700">
                          {t(program.levelKey)}
                        </span>
                        <span className="block text-lg font-bold text-gray-900 md:text-xl">
                          {t(program.titleKey)}
                        </span>
                        <span className="mt-1 block text-sm font-medium leading-relaxed text-gray-600 md:text-base">
                          {t(program.institutionKey)}
                        </span>
                      </span>

                      <span className="flex shrink-0 flex-wrap items-center gap-2">
                        <span className={`rounded-full border px-2.5 py-1 text-xs font-bold ${programStatus.badgeClass}`}>
                          {t(programStatus.labelKey)}
                        </span>
                        <span className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-semibold text-gray-700">
                          {formatPeriodCount(program.periods.length)}
                        </span>
                        <span
                          aria-hidden="true"
                          className="education-chevron ml-1 flex h-9 w-9 items-center justify-center rounded-full bg-green-50 text-green-800 transition-transform duration-300 motion-reduce:transition-none"
                        >
                          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m5 7.5 5 5 5-5" />
                          </svg>
                        </span>
                      </span>
                    </span>

                    <span className="mt-4 block border-t border-gray-100 pt-3 text-sm font-semibold text-green-800">
                      {t('education_details_summary')}
                    </span>
                  </summary>

                  <div className="ml-12 pt-5 md:ml-16">
                    {featuredItems.length > 0 && (
                      <div className="mb-6 rounded-xl border border-green-100 bg-green-50/70 p-4">
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-green-800">
                          {t('education_highlights_title')}
                        </p>
                        <ul className="flex flex-wrap gap-2">
                          {featuredItems.map((item) => (
                            <li
                              key={`${program.id}-${item.id}`}
                              className="rounded-full border border-green-200 bg-white px-3 py-1.5 text-sm font-semibold text-gray-700 shadow-sm"
                            >
                              {t(item.labelKey)}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <p className="mb-4 text-sm text-gray-600">
                      {t('education_period_hint')}
                    </p>

                    <ol className="space-y-4">
                      {program.periods.map((period) => {
                        const status = statusPresentation[period.status];
                        const title = formatPeriodTitle(period.ordinal);
                        const isCurrent = period.status === 'ongoing';

                        return (
                          <li key={period.id}>
                            <details
                              className="education-details education-period group relative"
                              open={isCurrent}
                            >
                              <summary
                                aria-current={isCurrent ? 'step' : undefined}
                                className="education-summary relative min-h-11 cursor-pointer list-none rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm transition-[border-color,box-shadow] hover:border-green-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-700 motion-reduce:transition-none [&::-webkit-details-marker]:hidden"
                              >
                                <span
                                  aria-hidden="true"
                                  className={`absolute -left-[42px] top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full border-2 text-[9px] font-bold shadow-[0_0_0_5px_rgba(244,244,249,0.96)] md:-left-[52px] md:h-6 md:w-6 md:text-[10px] ${status.markerClass}`}
                                >
                                  {period.ordinal}
                                </span>

                                <span className="flex flex-wrap items-center justify-between gap-3">
                                  <span className="flex flex-wrap items-center gap-2">
                                    <span className="font-bold text-gray-900">{title}</span>
                                    <span className={`rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${status.badgeClass}`}>
                                      {t(status.labelKey)}
                                    </span>
                                  </span>

                                  <span className="flex items-center gap-2 text-sm font-medium text-gray-600">
                                    <span>{formatSubjectCount(period.items.length)}</span>
                                    <span
                                      aria-hidden="true"
                                      className="education-chevron flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-transform duration-300 motion-reduce:transition-none"
                                    >
                                      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m5 7.5 5 5 5-5" />
                                      </svg>
                                    </span>
                                  </span>
                                </span>
                              </summary>

                              <div className="pt-2">
                                <ul
                                  aria-label={`${title}: ${formatSubjectCount(period.items.length)}`}
                                  className="grid gap-2 sm:grid-cols-2"
                                >
                                  {period.items.map((item) => (
                                    <li
                                      key={item.id}
                                      className="flex items-start gap-2 rounded-lg border border-gray-100 bg-white/80 px-3 py-2.5 text-sm leading-relaxed text-gray-700"
                                    >
                                      <span
                                        aria-hidden="true"
                                        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                                          item.kind === 'milestone' ? 'bg-blue-500' : 'bg-green-500'
                                        }`}
                                      />
                                      <span>{t(item.labelKey)}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </details>
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                </details>
              </li>
            );
          })}
        </ol>

        <div aria-hidden="true" className="education-continuation mt-5 flex flex-col items-center gap-2">
          <span />
          <span />
          <span />
        </div>
        <p className="ml-12 mt-3 text-xs font-bold uppercase tracking-[0.16em] text-gray-500 md:ml-16">
          {t('education_continues')}
        </p>
      </div>
    </div>
  );
}
