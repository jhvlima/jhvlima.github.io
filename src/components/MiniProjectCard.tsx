"use client";
import { useLanguage } from '@/context/LanguageContext';
import { MiniProject } from '@/data/miniProjects';
import Tag from '@/components/ui/Tag'; // <--- Importando componente reutilizável

export default function MiniProjectCard({ project }: { project: MiniProject }) {
  const { t } = useLanguage();
  const title = t(project.titleKey);
  const titleId = `mini-project-${project.id}-title`;
  const linkTextId = `mini-project-${project.id}-link`;
  const newTabId = `mini-project-${project.id}-new-tab`;

  return (
    <article className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h2 id={titleId} className="font-bold text-gray-800 text-lg">{title}</h2>
        
        <div className="flex shrink-0 gap-2">
          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-labelledby={`${titleId} ${linkTextId} ${newTabId}`}
              className="rounded text-sm text-gray-700 underline-offset-4 hover:text-gray-900 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <span id={linkTextId}>{project.repoLinkLabel ?? 'GitHub'}</span>{' '}
              <span aria-hidden="true">↗</span>
              <span id={newTabId} className="sr-only"> ({t('opens_new_tab')})</span>
            </a>
          )}
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-4">{t(project.descriptionKey)}</p>

      <ul className="mt-auto flex flex-wrap gap-2" aria-label={t('project_technologies_label')}>
        {project.techStack.map(tech => (
          <li key={tech}>
            <Tag>{tech}</Tag>
          </li>
        ))}
      </ul>
    </article>
  );
}
