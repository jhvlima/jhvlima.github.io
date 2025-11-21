"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex gap-2">
      <button 
        onClick={() => setLang('pt')} 
        className={`px-3 py-2 rounded border transition text-sm font-medium ${lang === 'pt' ? 'bg-blue-100 border-blue-500 text-blue-700' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}
      >
        🇧🇷 PT
      </button>
      <button 
        onClick={() => setLang('en')} 
        className={`px-3 py-2 rounded border transition text-sm font-medium ${lang === 'en' ? 'bg-blue-100 border-blue-500 text-blue-700' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}
      >
        🇬🇧 EN
      </button>
      <button 
        onClick={() => setLang('ja')} 
        className={`px-3 py-2 rounded border transition text-sm font-medium ${lang === 'ja' ? 'bg-blue-100 border-blue-500 text-blue-700' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}
      >
        🇯🇵 JA
      </button>
    </div>
  );
}