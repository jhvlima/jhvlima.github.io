"use client";
import { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { projectsData } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import EducationCard from '@/components/EducationCard';
import SkillsCard from '@/components/SkillsCard';
import ContactSection from '@/components/ContactSection';
import Image from 'next/image';

// Componente interno para usar o Hook useLanguage
export default function Home() {
  const { t } = useLanguage();

  useEffect(() => {
    // Aguarda o App Router concluir a hidratação dos metadados estáticos.
    let titleFrame = 0;
    const metadataFrame = window.requestAnimationFrame(() => {
      titleFrame = window.requestAnimationFrame(() => {
        document.title = t('page_title');
      });
    });

    return () => {
      window.cancelAnimationFrame(metadataFrame);
      window.cancelAnimationFrame(titleFrame);
    };
  }, [t]);

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">

      {/* Header / Profile */}
      <header className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-sm mb-10">
        <Image
          src="/images/profile.png"
          alt={t('profile_image_alt')}
          width={144}
          height={144}
          priority
          sizes="144px"
          className="w-36 h-36 rounded-full border-4 border-blue-500 mb-6 md:mb-0 md:mr-8"
        />
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{t('profile_name')}</h1>
          <p className="mb-4 text-lg text-gray-700">
            {t('profile_title_before')}
            <strong>{t('profile_title_highlight')}</strong>
            {t('profile_title_after')}
          </p>
          <p className="text-gray-500 font-light">{t('profile_bio')}</p>
        </div>
      </header>

      <div className="space-y-12">

        {/* Seção de Projetos */}
        <section id="projects" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-6">
            {t('projects_title')}
          </h2>
          <div>
            {projectsData.map(proj => (
              <ProjectCard key={proj.id} project={proj} />
            ))}
          </div>
        </section>

        <div className="flex flex-col gap-8">
          {/* Seção de Educação */}
          <section id="education" aria-labelledby="education-title" className="scroll-mt-24">
            <EducationCard />
          </section>

          {/* Seção de Skills */}
          <section id="skills" className="scroll-mt-24">
            <SkillsCard />
          </section>
        </div>

          {/* Seção de Contato */}
          <ContactSection />
          
      </div>

      {/* Footer */}
      <footer className="mt-12 border-t border-gray-200 py-8 text-center text-sm text-gray-600">
        <div className="mb-2">
          <a
            href="/antigo/v2/index.html"
            className="inline-flex items-center gap-1 rounded transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            ⌛ {t('link_old_version')}
          </a>
        </div>
        <p>© {new Date().getFullYear()} João Henrique Valbusa Lima</p>
      </footer>
    </div>
  );
}
