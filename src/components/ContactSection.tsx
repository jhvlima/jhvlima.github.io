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
            className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors font-medium shadow-md hover:shadow-lg"
          >
            GitHub
          </a>
          
          <a 
            href="https://www.linkedin.com/in/jhvlima/" 
            target="_blank" 
            className="flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-full hover:bg-[#005582] transition-colors font-medium shadow-md hover:shadow-lg"
          >
            LinkedIn
          </a>
          
          <a 
            href="http://lattes.cnpq.br/6864773005774963" 
            target="_blank" 
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-800 transition-colors font-medium shadow-md hover:shadow-lg"
          >
            Currículo Lattes
          </a>
        </div>
    </section>
  );
}