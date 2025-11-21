"use client";
import { useLanguage } from '@/context/LanguageContext';
import { Project } from '@/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();

  return (
    <div className="border-l-4 border-blue-500 bg-white shadow-sm rounded-r-lg p-6 mb-6 hover:shadow-md transition-shadow">
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
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-600 hover:text-blue-800 text-sm font-semibold transition-colors"
        >
          🔗 {t('details_link_title')}
        </a>
      )}
    </div>
  );
}