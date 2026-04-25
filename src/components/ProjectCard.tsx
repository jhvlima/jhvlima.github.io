"use client";
import { useLanguage } from '@/context/LanguageContext';
import { Project } from '@/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();

  const linkTitleKey = project.linkTitleKey || 'details_link_title';

  return (
    <div className="border-l-4 border-blue-500 bg-white shadow-sm rounded-r-lg p-6 mb-6 hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6">
      {project.image && (
        <div className="relative w-full h-56 md:h-auto md:w-1/3 shrink-0 bg-gray-50/50 rounded-md">
          <img 
            src={project.image} 
            alt={t(project.titleKey)} 
            className="w-full h-full md:absolute md:inset-0 p-2 object-contain object-center rounded-sm transition-all" 
          />
        </div>
      )}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-800 m-0">{t(project.titleKey)}</h3>

      {project.statusKey && (
        <span className="inline-block bg-orange-500 text-white text-xs px-3 py-1 rounded-full my-2">
          {t(project.statusKey)}
        </span>
      )}

      <p className="text-gray-600 mt-2 font-light leading-relaxed">
        {t(project.descKey)}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag, index) => (
          <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
            {tag.key ? t(tag.key) : tag.text}
          </span>
        ))}
      </div>

      {project.link && (
        <a
          href={project.link}
          target={project.link.startsWith('/') ? "_self" : "_blank"}
          rel={project.link.startsWith('/') ? "" : "noopener noreferrer"}
          className="inline-block mt-4 text-blue-600 hover:text-blue-800 text-sm font-semibold transition-colors"
          title={t(linkTitleKey)}
        >
          {/* Se o link for interno (começa com /), usa uma seta, senão usa o ícone de link externo */}
          {project.link.startsWith('/') ? '👉 ' : '🔗 '}
          {t(linkTitleKey)}
        </a>
      )}
      </div>
    </div>
  );
}