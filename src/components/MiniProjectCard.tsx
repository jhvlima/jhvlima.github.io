"use client";
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import type { MiniProject } from '@/data/miniProjects';
import { projectFocuses, type ProjectFocus } from '@/data/projectFocuses';
import { projectApproaches } from '@/data/projectApproaches';

interface MiniProjectCardProps {
  project: MiniProject;
  emphasis?: 'normal' | 'highlighted' | 'secondary';
  selectedFocus?: ProjectFocus | null;
  featured?: boolean;
}

export default function MiniProjectCard({ project, emphasis = 'normal', selectedFocus = null, featured = false }: MiniProjectCardProps) {
  const { t } = useLanguage();
  const titleId = `mini-project-${project.id}-title`;
  const linkTextId = `mini-project-${project.id}-link`;
  const newTabId = `mini-project-${project.id}-new-tab`;
  const approach = project.approach ? projectApproaches[project.approach] : null;
  const emphasisClass = emphasis === 'secondary'
    ? 'showcase-project-secondary'
    : emphasis === 'highlighted'
      ? `is-highlighted ${selectedFocus ? projectFocuses[selectedFocus].highlightClassName : 'notebook-tone-neutral'}`
      : '';

  return (
    <article aria-labelledby={titleId} className={`showcase-project notebook-record ${featured ? 'notebook-record-featured' : ''} ${emphasisClass}`}>
      <div className="notebook-record-heading">
        <h2 id={titleId}>{t(project.titleKey)}</h2>
        {project.visibility === 'public' && project.repoLink && (
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer" aria-labelledby={`${titleId} ${linkTextId} ${newTabId}`} className="notebook-code-link">
            <span id={linkTextId}>{project.repoLinkLabel ?? 'GitHub'}</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4 12 12 4M4 4h8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span id={newTabId} className="sr-only"> ({t('opens_new_tab')})</span>
          </a>
        )}
        {(project.visibility === 'private' || project.status === 'in-development') && (
          <div className="notebook-record-status">
            {project.visibility === 'private' && <span className="notebook-status">{t('project_private_code_label')}</span>}
            {project.status === 'in-development' && <span className="notebook-status notebook-status-development">{t('project_status_in_development')}</span>}
          </div>
        )}
      </div>

      <div className="notebook-record-body">
        <p className="notebook-description">{t(project.descriptionKey)}</p>
        {(project.focuses.length > 0 || approach) && (
          <ul className="notebook-topics" aria-label={t('project_focus_label')}>
            {approach && <li><span className={`notebook-topic ${approach.badgeClassName}`}>{t(approach.labelKey)}</span></li>}
            {project.focuses.filter(focus => focus !== 'ai' || !approach).map(focus => (
              <li key={focus}><span className={`notebook-topic ${projectFocuses[focus].badgeClassName}`}>{t(projectFocuses[focus].labelKey)}</span></li>
            ))}
          </ul>
        )}
        <ul className="notebook-technologies" aria-label={t('project_technologies_label')}>
          {project.techStack.map(tech => <li key={tech}>{tech}</li>)}
        </ul>

        {project.screenshots && project.screenshots.length > 0 && (
          <ul className={`notebook-screenshots ${project.id === 'chess-bot' ? 'notebook-screenshots-compact' : ''}`} aria-label={t('project_screenshots_label')}>
            {project.screenshots.map(screenshot => (
              <li key={screenshot.src}>
                <figure>
                  <a href={screenshot.src} target="_blank" rel="noopener noreferrer" aria-label={`${t('project_screenshot_open')}: ${t(screenshot.altKey)} (${t('opens_new_tab')})`}>
                    <Image src={screenshot.src} alt={t(screenshot.altKey)} width={screenshot.width} height={screenshot.height} sizes="(min-width: 1200px) 640px, (min-width: 900px) 50vw, 90vw" />
                  </a>
                  {screenshot.captionKey && <figcaption>{t(screenshot.captionKey)}</figcaption>}
                </figure>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
