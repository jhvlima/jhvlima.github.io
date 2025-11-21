"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language } from '@/data/translations';

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('pt');
  const [isLoaded, setIsLoaded] = useState(false);

  // Carrega do LocalStorage ao iniciar (efeito do script.js antigo)
  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved && ['pt', 'en', 'ja'].includes(saved)) {
      setLangState(saved);
    }
    setIsLoaded(true);
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('language', newLang);
    document.documentElement.lang = newLang;
  };

  const t = (key: string) => {
    return translations[lang][key] || key;
  };

  // Evita "hydration mismatch" (piscar texto errado antes de carregar)
  if (!isLoaded) return <div className="p-10 text-center">Loading...</div>;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}