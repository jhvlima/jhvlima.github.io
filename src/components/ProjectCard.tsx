"use client";
import { useLanguage } from '@/context/LanguageContext';
import { Project } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();

  const linkTitleKey = project.linkTitleKey ?? 'btn_view_more';
  const isInternalLink = project.link?.startsWith('/') ?? false;
  const linkClassName = "mt-4 inline-block rounded text-sm font-semibold text-blue-700 transition-colors hover:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600";

  return (
    <article className="mb-6 flex flex-col gap-6 rounded-r-lg border-l-4 border-blue-500 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:flex-row">
      {project.image && (
        <div className="relative w-full h-56 md:h-auto md:w-1/3 shrink-0 bg-gray-50/50 rounded-md">
          <Image
            src={project.image}
            alt=""
            fill
            loading="lazy"
            sizes="(max-width: 767px) calc(100vw - 72px), 280px"
            className="rounded-sm object-contain object-center p-2 transition-all"
          />
        </div>
      )}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-800 m-0">{t(project.titleKey)}</h3>

      {project.statusKey && (
        <span className="my-2 inline-block rounded-full bg-orange-700 px-3 py-1 text-xs font-medium text-white">
          {t(project.statusKey)}
        </span>
      )}

      <p className="text-gray-600 mt-2 font-light leading-relaxed">
        {t(project.descKey)}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label={t('project_technologies_label')}>
        {project.tags.map((tag, index) => (
          <li key={tag.key ?? tag.text ?? index} className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
            {tag.key ? t(tag.key) : tag.text}
          </li>
        ))}
      </ul>

      {project.link && isInternalLink && (
        <Link
          href={project.link}
          className={linkClassName}
          title={t(linkTitleKey)}
        >
          👉 {t(linkTitleKey)}
        </Link>
      )}

      {project.link && !isInternalLink && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
          title={t(linkTitleKey)}
        >
          🔗 {t(linkTitleKey)}
          <span className="sr-only"> ({t('opens_new_tab')})</span>
        </a>
      )}
      </div>
    </article>
  );
}
