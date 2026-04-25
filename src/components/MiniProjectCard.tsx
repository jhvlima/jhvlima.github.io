"use client";
import { useLanguage } from '@/context/LanguageContext';
import { MiniProject } from '@/data/miniProjects';
import Tag from '@/components/ui/Tag'; // <--- Importando componente reutilizável

export default function MiniProjectCard({ project }: { project: MiniProject }) {
  const { t } = useLanguage();

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col h-fit break-inside-avoid mb-6">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-gray-800 text-lg">{project.title}</h3>
        
        {/* Ícones de Links (Poderiam ser outro componente IconLink, mas ok deixar aqui por enquanto) */}
        <div className="flex gap-2">
          {project.repoLink && (
            <a href={project.repoLink} target="_blank" className="text-gray-400 hover:text-gray-800" title="GitHub">
              GitHub ↗
            </a>
          )}
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-4">{t(project.descriptionKey)}</p>

      <div className="flex flex-wrap gap-2">
        {project.techStack.map(tech => (
          // USANDO O COMPONENTE TAG AQUI
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
    </div>
  );
}
