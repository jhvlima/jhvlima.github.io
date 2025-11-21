"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language } from '@/data/translations';

// 1. Definimos um tipo para as chaves de tradução baseado no inglês (que é completo)
type TranslationKey = keyof typeof translations['en'];

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('pt');
  const [isLoaded, setIsLoaded] = useState(false);

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

  // 2. Atualizamos a função 't' para lidar com a tipagem
  const t = (key: string) => {
    // Aqui fazemos um Type Assertion (as any) para dizer ao TS:
    // "Eu sei que estou acessando dinamicamente, se não achar, retorna a chave."
    // Essa é a forma segura de corrigir o erro de build rápido.
    const currentTranslations = translations[lang] as any;
    return currentTranslations[key] || key;
  };

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