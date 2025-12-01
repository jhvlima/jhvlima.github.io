"use client";
import { useLanguage } from '@/context/LanguageContext';
import { educationData } from '@/data/education';

export default function EducationCard() {
  const { t } = useLanguage();
  // Agora só desestruturamos o que sobrou no arquivo de dados (sem highlights direto)
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

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border-t-4 border-green-500 h-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">{t('education_title')}</h2>
      
      <h3 className="text-lg font-semibold text-green-700 mb-2">{t('education_course')}</h3>
      <p className="text-gray-600 mb-4 font-medium">{t('education_university')}</p>

      <div className="mb-6">
        <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-2">
          {t('education_highlights_title')}
        </p>
        <div className="flex flex-wrap gap-2">
          {highlights.map((item: string, idx: number) => (
            <span key={idx} className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded border border-green-100 cursor-default">
              {item}
            </span>
          ))}
        </div>
      </div>

      <details className="group bg-gray-50 rounded-lg border border-gray-200">
        <summary className="cursor-pointer p-4 font-medium text-gray-700 flex justify-between items-center hover:bg-gray-100 rounded-lg transition-colors list-none select-none">
          <span>🎓 {t('education_details_summary')}</span>
          <span className="transform group-open:rotate-180 transition-transform">▼</span>
        </summary>
        
        <div className="p-4 border-t border-gray-200 text-sm space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
          {semesters.map((sem) => (
            <div key={sem.number} className="relative pl-4 border-l-2 border-gray-300 hover:border-green-400 transition-colors">
              <h4 className="font-bold text-gray-800 mb-1 flex items-center gap-2">
                {sem.number}º {t(education_semester')} 
                <span className={`text-xs font-normal px-2 py-0.5 rounded-full border ${
                  sem.statusKey === 'sem_completed' ? 'bg-green-100 text-green-800 border-green-200' :
                  sem.statusKey === 'sem_ongoing' ? 'bg-blue-100 text-blue-800 border-blue-200' :
                  'bg-gray-100 text-gray-600 border-gray-200'
                }`}>
                  {getStatusIcon(sem.statusKey)} {t(sem.statusKey)}
                </span>
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {t(sem.subjectsKey)}
              </p>
            </div>
          ))}
        </div>
      </details>
    </div>
  );
}