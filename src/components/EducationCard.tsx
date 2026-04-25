"use client";
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { educationData } from '@/data/education';

export default function EducationCard() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t, lang } = useLanguage();
  const { semesters } = educationData;

  // Gera a lista de destaques a partir da tradução (formato atual: "A, B, C")
  const highlights = t('education_highlights_list')
    .split(',')
    .map((s: string) => s.trim())
    .filter(Boolean);

  // Função auxiliar simples para escolher o ícone baseado no status
  const getStatusIcon = (statusKey: string) => {
    if (statusKey === 'sem_completed') return '✅';
    if (statusKey === 'sem_ongoing') return '⏳';
    return '📅';
  };

  // Função Inteligente para formatar o título do semestre
  const formatSemesterTitle = (num: number) => {
    const term = t('education_semester'); // "Período", "Semester" ou "学期"

    if (lang === 'en') {
      // Lógica para 1st, 2nd, 3rd, 4th...
      const suffix = (num === 1) ? 'st' : (num === 2) ? 'nd' : (num === 3) ? 'rd' : 'th';
      return `${num}${suffix} ${term}`;
    }
    
    if (lang === 'ja') {
      // Japonês: 1学期 (Número + Kanji direto)
      return `${num}${term}`;
    }

    // Padrão (Português): 1º Período
    return `${num}º ${term}`;
  };

 return (
    <div className="bg-white rounded-lg shadow-sm p-6 border-t-4 border-green-500 h-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('education_title')}</h2>
      
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left group flex items-center justify-between bg-white hover:bg-green-50 p-4 -mx-4 rounded-lg transition-colors border border-transparent hover:border-green-100 mb-4"
      >
        <div>
          <h3 className="text-lg font-bold text-green-700 mb-1 group-hover:text-green-800 transition-colors">{t('education_course')}</h3>
          <p className="text-gray-600 font-medium">{t('education_university')}</p>
        </div>
        <div className={`w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-green-200 text-gray-500 group-hover:text-green-700 transition-all duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
          ▼
        </div>
      </button>

      {/* Destaques */}
      <div className="mb-6">
        <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-3">
          {t('education_highlights_title')}
        </p>
        <div className="flex flex-wrap gap-2">
          {highlights.map((item, idx) => (
            <span key={idx} className="bg-white text-gray-700 text-sm font-semibold px-4 py-1.5 rounded-full border border-gray-200 shadow-sm hover:border-green-400 hover:text-green-600 hover:shadow transition-all cursor-default">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Timeline Vertical - Oculta/Exibe baseada no estado */}
      {isExpanded && (
        <div className="mt-8 bg-gray-50/50 p-4 rounded-lg border border-gray-100 animate-in fade-in slide-in-from-top-4 duration-300">
        <h4 className="text-gray-700 font-bold mb-6 flex items-center gap-2">
          🎓 {t('education_details_summary')}
        </h4>
        <div className="max-h-96 overflow-y-auto custom-scrollbar pr-4 py-2">
          <div className="relative border-l-2 border-gray-200 ml-4 space-y-8">
            {semesters.map((sem) => {
              const isCompleted = sem.statusKey === 'sem_completed';
              const isOngoing = sem.statusKey === 'sem_ongoing';
              
              return (
                <div key={sem.number} className="relative ml-8 group">
                  {/* Timeline Dot */}
                  <span className={`absolute flex items-center justify-center w-7 h-7 rounded-full -left-[47px] ring-4 ring-white transition-transform group-hover:scale-110 ${
                    isCompleted ? 'bg-green-500' : isOngoing ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]' : 'bg-gray-300'
                  }`}>
                    <span className="text-xs">{getStatusIcon(sem.statusKey)}</span>
                  </span>
                  
                  {/* Content */}
                  <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-gray-800 mb-2 flex flex-wrap items-center gap-2">
                      {formatSemesterTitle(sem.number)}
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border uppercase tracking-wider ${
                        isCompleted ? 'bg-green-100 text-green-800 border-green-200' :
                        isOngoing ? 'bg-blue-100 text-blue-800 border-blue-200' :
                        'bg-gray-100 text-gray-600 border-gray-200'
                      }`}>
                        {t(sem.statusKey)}
                      </span>
                    </h4>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t(sem.subjectsKey)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </div>
      )}
    </div>
  );
}