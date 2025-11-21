"use client";
import { useLanguage } from '@/context/LanguageContext';
import { projectsData } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import EducationCard from '@/components/EducationCard';
import SkillsCard from '@/components/SkillsCard';
import LanguageSwitcher from '@/components/LanguageSwitcher';

// Componente interno para usar o Hook useLanguage
export default function Home() {
  const { t, setLang, lang } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">

      {/* Barra Superior com Switcher */}
      <div className="text-right mb-8 flex justify-end">
        <LanguageSwitcher />
      </div>

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

      {/* Projects Section */}
      <main className="space-y-12">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-6">
          {t('projects_title')}
        </h2>

        <div>
          {projectsData.map(proj => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Coluna da Esquerda: Formação */}
          <div>
            <EducationCard />
          </div>

          {/* Coluna da Direita: Skills */}
          <div>
            <SkillsCard />
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="text-center mt-12 py-6 border-t border-gray-200">
        <div className="space-x-4 mb-4">
          <a href="https://github.com/jhvlima" target="_blank" className="text-blue-500 hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/jhvlima/" target="_blank" className="text-blue-500 hover:underline">LinkedIn</a>
          <a href="http://lattes.cnpq.br/6864773005774963" target="_blank" className="text-blue-500 hover:underline">Lattes</a>
        </div>
        <p className="text-sm text-gray-400">
          <a href="/antigo/v2/index.html" className="hover:text-blue-500 transition-colors">
            ⌛ {t('link_old_version')}
          </a>
        </p>
      </footer>
    </div>
  );
}