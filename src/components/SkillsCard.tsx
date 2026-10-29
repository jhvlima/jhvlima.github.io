"use client";
import { useLanguage } from '@/context/LanguageContext';
import { skillsData } from '@/data/skills';

export default function SkillsCard() {
  const { t } = useLanguage();
  return (
    <div>
      <h2 id="skills-title" className="notebook-section-title">{t('skills_title')}</h2>
      <dl className="notebook-skills">
        {skillsData.map(category => (
          <div className="notebook-skill-group" key={category.titleKey}>
            <dt>{t(category.titleKey)}</dt>
            <dd>
              <ul>
                {category.items.map(skill => <li key={skill}><span className="notebook-topic notebook-tone-neutral">{skill}</span></li>)}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
