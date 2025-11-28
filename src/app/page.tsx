"use client";
import { useLanguage } from '@/context/LanguageContext';
import { projectsData } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import EducationCard from '@/components/EducationCard';
import SkillsCard from '@/components/SkillsCard';
import ContactSection from '@/components/ContactSection';

// Componente interno para usar o Hook useLanguage
export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">

      {/* Header / Profile */}
      <header className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-sm mb-10">
        <img
          src="https://github.com/jhvlima.png"
          alt="João Henrique"
          className="w-36 h-36 rounded-full border-4 border-blue-500 mb-6 md:mb-0 md:mr-8"
        />
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{t('profile_name')}</h1>
          {/* dangerouslySetInnerHTML para o <strong> no título */}
          <p className="text-lg text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('profile_title') }} />
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Seção de Educação */}
          <div id="education" className="scroll-mt-24">
            <EducationCard />
          </div>

          {/* Seção de Skills */}
          <div id="skills" className="scroll-mt-24">
            <SkillsCard />
          </div>
        </div>

          {/* Seção de Contato */}
          <div id="contacts" className="scroll-mt-24">
            <ContactSection />
          </div>
          
      </div>

      {/* Footer */}
      <footer className="text-center mt-12 py-8 border-t border-gray-200 text-sm text-gray-400">
        <div className="mb-2">
          <a href="/antigo/v2/index.html" className="hover:text-blue-500 transition-colors inline-flex items-center gap-1">
            ⌛ {t('link_old_version')}
          </a>
        </div>
        <p>© {new Date().getFullYear()} João Henrique Valbusa Lima</p>
      </footer>
    </div>
  );
}
