"use client";

import { useLanguage } from '@/context/LanguageContext';
import { educationData } from '@/data/education';
import { projectsData, type Project } from '@/data/projects';
import EducationPeriods, { statusPresentation } from './EducationPeriods';
import styles from './EducationCard.module.css';

const graduationExperiences = ['ct', 'ic', 'gamelab']
  .map(id => projectsData.find(project => project.id === id))
  .filter((project): project is Project => project !== undefined);

function Chevron() {
  return <svg aria-hidden="true" className={styles.chevron} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="m5 7.5 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function Experience({ project }: { project: Project }) {
  const { t } = useLanguage();
  return (
    <details className={styles.experience}>
      <summary><span>{t(project.titleKey)}</span><Chevron /></summary>
      <div className={styles.experienceBody}>
        <p>{t(project.descKey)}</p>
        <ul aria-label={t('project_technologies_label')} className={styles.tags}>
          {project.tags.map((tag, index) => <li key={tag.key ?? tag.text ?? index}>{tag.key ? t(tag.key) : tag.text}</li>)}
        </ul>
        {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">{t(project.linkTitleKey ?? 'btn_view_more')} <span aria-hidden="true">↗</span><span className="sr-only"> ({t('opens_new_tab')})</span></a>}
      </div>
    </details>
  );
}

export default function EducationCard() {
  const { t, lang } = useLanguage();
  return (
    <div className={styles.trajectory}>
      <header className={styles.heading}>
        <h2 id="education-title">{t('education_title')}</h2>
        <p>{t('education_intro')}</p>
      </header>
      <ol className={styles.timeline} aria-label={t('education_path_label')}>
        <li className={styles.milestone}>
          <span aria-hidden="true" className={styles.dot}>01</span>
          <details className={styles.branchRoot}>
            <summary><span className={styles.label}><span className={styles.status}>{t('education_level_technical')}</span><strong>{t('education_technical_course')}</strong><span>{t('education_technical_institution')}</span></span><Chevron /></summary>
            <p className={styles.note}>{t('education_technical_description')}</p>
          </details>
        </li>
        {educationData.programs.map((program, index) => {
          const current = program.periods.find(period => period.status === 'ongoing');
          const periodLabel = current
            ? lang === 'pt' ? `${current.ordinal}º ${t('education_semester')}`
              : lang === 'ja' ? `${current.ordinal}${t('education_semester')}`
                : `${t('education_semester')} ${current.ordinal}`
            : null;
          return (
            <li key={program.id} className={styles.milestone}>
              <span aria-hidden="true" className={`${styles.dot} ${program.status === 'ongoing' ? styles.currentDot : ''}`}>{String(index + 2).padStart(2, '0')}</span>
              <details className={`education-details education-program ${styles.branchRoot}`}>
                <summary>
                  <span className={styles.label}>
                    <span className={styles.status}>{t(program.levelKey)} · {t(statusPresentation[program.status].labelKey)}</span>
                    <strong>{t(program.titleKey)}</strong>
                    <span>{t(program.institutionKey)}</span>
                  </span>
                  <Chevron />
                </summary>
                <ol className={styles.branches} aria-label={t('education_branches_label')}>
                  <li>
                    <details className={styles.experience}>
                      <summary>
                        <span>{t('education_history_title')}<span className={styles.historyHint}>{periodLabel && <>{periodLabel} · {t('sem_ongoing')} · </>}{program.periods.length} {t('education_periods_label')}</span></span>
                        <Chevron />
                      </summary>
                      <div className={styles.periods}><EducationPeriods periods={program.periods} /></div>
                    </details>
                  </li>
                  {graduationExperiences.map(project => <li key={project.id}><Experience project={project} /></li>)}
                </ol>
              </details>
            </li>
          );
        })}
        <li className={`${styles.milestone} ${styles.future}`}>
          <span aria-hidden="true" className={styles.dot}>···</span>
          <span className={styles.label}><span className={styles.status}>{t('education_next_chapters')}</span><strong>{t('education_continues')}</strong><span>{t('education_continuation_description')}</span></span>
        </li>
      </ol>
    </div>
  );
}
