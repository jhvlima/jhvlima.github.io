"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import type { Project } from '@/data/projects';
import ArrowIcon from './ui/ArrowIcon';

const tones: Record<string, string> = {
  ic: 'notebook-tone-ai',
  ct: 'notebook-tone-automation',
  gamelab: 'notebook-tone-skills',
  botchess: 'notebook-tone-ai',
  'ct-booking': 'notebook-tone-automation',
  mini_projects: 'notebook-tone-web',
};

export default function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();
  const internal = project.link?.startsWith('/') ?? false;
  const titleId = `feature-${project.id}-title`;
  const label = t(project.linkTitleKey ?? 'btn_view_more');

  return (
    <article aria-labelledby={titleId} className="notebook-record notebook-feature-record">
      <div className="notebook-record-heading">
        <h3 id={titleId}>{t(project.titleKey)}</h3>
        {project.statusKey && <span className="notebook-status">{t(project.statusKey)}</span>}
        {project.image && (project.id === 'botchess' ? (
          <a href={project.image} target="_blank" rel="noopener noreferrer" className="notebook-project-media notebook-project-chess" aria-label={`${t('project_screenshot_open')}: ${t('mini_chess_screenshot_alt')} (${t('opens_new_tab')})`}>
            <Image src={project.image} alt={t('mini_chess_screenshot_alt')} fill loading="lazy" sizes="(max-width: 599px) 180px, 240px" className="notebook-project-image" />
          </a>
        ) : (
          <div className={`notebook-project-media ${project.id === 'ic' ? 'notebook-project-paper' : ''}`}>
            <Image src={project.image} alt="" fill loading="lazy" sizes="(max-width: 599px) calc(100vw - 60px), 240px" className="notebook-project-image" />
          </div>
        ))}
      </div>
      <div className="notebook-record-body">
        <p className="notebook-description">{t(project.descKey)}</p>
        <ul className="notebook-topics" aria-label={t('project_technologies_label')}>
          {project.tags.map((tag,index) => <li key={tag.key ?? tag.text ?? index}><span className={`notebook-topic ${tones[project.id] ?? 'notebook-tone-neutral'}`}>{tag.key ? t(tag.key) : tag.text}</span></li>)}
        </ul>
        {project.link && (internal
          ? <Link href={project.link} className="notebook-text-link notebook-project-link">{label}<ArrowIcon /></Link>
          : <a href={project.link} target="_blank" rel="noopener noreferrer" className="notebook-text-link notebook-project-link">{label}<ArrowIcon external /><span className="sr-only"> ({t('opens_new_tab')})</span></a>
        )}
      </div>
    </article>
  );
}
