"use client";
import { useLanguage } from '@/context/LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="scroll-mt-24 mb-12">
      <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-6">
        {t('contact_title')}
      </h2>


        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="https://github.com/jhvlima" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 font-medium text-white shadow-md transition-colors hover:bg-gray-700 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            GitHub
            <span className="sr-only"> ({t('opens_new_tab')})</span>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/jhvlima/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#0077b5] px-6 py-3 font-medium text-white shadow-md transition-colors hover:bg-[#005582] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005582]"
          >
            LinkedIn
            <span className="sr-only"> ({t('opens_new_tab')})</span>
          </a>
          
          <a 
            href="http://lattes.cnpq.br/6864773005774963" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 font-medium text-white shadow-md transition-colors hover:bg-blue-900 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
          >
            Currículo Lattes
            <span className="sr-only"> ({t('opens_new_tab')})</span>
          </a>
        </div>
    </section>
  );
}
