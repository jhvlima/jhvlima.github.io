"use client";
import { useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { projectsData } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import EducationCard from '@/components/EducationCard';
import SkillsCard from '@/components/SkillsCard';
import ContactSection from '@/components/ContactSection';
import ArrowIcon from '@/components/ui/ArrowIcon';
import './home.css';

export default function Home() {
  const { t } = useLanguage();

  useEffect(() => {
    let titleFrame = 0;
    const metadataFrame = window.requestAnimationFrame(() => {
      titleFrame = window.requestAnimationFrame(() => { document.title = t('page_title'); });
    });
    return () => {
      window.cancelAnimationFrame(metadataFrame);
      window.cancelAnimationFrame(titleFrame);
    };
  }, [t]);

  return (
    <div className="notebook-site notebook-home">
      <div className="notebook-layout">
        <header className="notebook-intro notebook-profile">
          <h1>{t('profile_name')}</h1>
          <p className="notebook-profile-course">
            {t('profile_title_before')}<strong>{t('profile_title_highlight')}</strong>{t('profile_title_after')}
          </p>
          <p className="notebook-profile-bio">{t('profile_bio')}</p>
          <Link href="/hub/" className="notebook-text-link notebook-profile-link">{t('home_showcase_cta')}<ArrowIcon /></Link>
        </header>

        <aside className="notebook-sidebar notebook-home-index">
          <h2 id="notebook-home-index-heading">{t('home_index_label')}</h2>
          <nav aria-labelledby="notebook-home-index-heading">
            <ul>
              <li><a href="#projects">{t('projects_title')}</a></li>
              <li><a href="#education">{t('education_title')}</a></li>
              <li><a href="#skills">{t('nav_skills')}</a></li>
              <li><a href="#contact">{t('contact_title')}</a></li>
            </ul>
          </nav>
        </aside>

        <div className="notebook-home-content">
          <section id="projects" aria-labelledby="projects-title">
            <h2 id="projects-title" className="notebook-section-title">{t('projects_title')}</h2>
            <div className="notebook-feature-projects">
              {projectsData.map(project => <ProjectCard key={project.id} project={project} />)}
            </div>
          </section>
          <section id="education" aria-labelledby="education-title"><EducationCard /></section>
          <section id="skills" aria-labelledby="skills-title"><SkillsCard /></section>
          <ContactSection />
        </div>

        <footer className="notebook-footer notebook-home-footer">
          <a href="/antigo/v2/index.html" className="notebook-text-link">{t('link_old_version')}<ArrowIcon /></a>
          <p>© {new Date().getFullYear()} João Henrique Valbusa Lima</p>
        </footer>
      </div>
    </div>
  );
}
