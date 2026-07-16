"use client";
import { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { miniProjectsData } from '@/data/miniProjects';
import MiniProjectCard from '@/components/MiniProjectCard';

export default function VitrinePage() {
  const { t } = useLanguage();

  useEffect(() => {
    // Aguarda o App Router concluir a hidratação dos metadados estáticos.
    let titleFrame = 0;
    const metadataFrame = window.requestAnimationFrame(() => {
      titleFrame = window.requestAnimationFrame(() => {
        document.title = `${t('mini_projects_title')} | João Henrique Lima`;
      });
    });

    return () => {
      window.cancelAnimationFrame(metadataFrame);
      window.cancelAnimationFrame(titleFrame);
    };
  }, [t]);

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans min-h-screen flex flex-col">
      {/* Hero da Vitrine */}
      <header className="mb-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{t('mini_projects_title')}</h1>
        <p className="mx-auto max-w-2xl text-gray-700">{t('mini_projects_subtitle')}</p>
      </header>

      {/* Grid de Projetos */}
      <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {miniProjectsData.map(proj => (
          <MiniProjectCard key={proj.id} project={proj} />
        ))}
      </div>

      <footer className="mt-auto py-12 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} João Henrique Valbusa Lima
      </footer>
    </div>
  );
}
