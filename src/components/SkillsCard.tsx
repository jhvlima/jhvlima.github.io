"use client";
import { useLanguage } from '@/context/LanguageContext';
import { skillsData } from '@/data/skills';

export default function SkillsCard() {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border-t-4 border-purple-500 h-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('skills_title')}</h2>

      <div className="space-y-6">
        {skillsData.map((category, idx) => (
          <div key={idx}>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
              {t(category.titleKey)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-purple-50 hover:text-purple-700 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}