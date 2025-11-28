"use client";
import { useLanguage } from '@/context/LanguageContext';
import { miniProjectsData } from '@/data/miniProjects';
import MiniProjectCard from '@/components/MiniProjectCard';

export default function VitrinePage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans min-h-screen flex flex-col">
      {/* Hero da Vitrine */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{t('mini_projects_title')}</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">{t('mini_projects_subtitle')}</p>
      </div>

      {/* Grid de Projetos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {miniProjectsData.map(proj => (
          <MiniProjectCard key={proj.id} project={proj} />
        ))}
      </div>

      <footer className="mt-auto py-12 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} João Henrique Valbusa Lima
      </footer>
    </div>
  );
}
