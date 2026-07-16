"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from 'react';
import {
  translations,
  type Language,
  type TranslationKey,
} from '@/data/translations';

const DEFAULT_LANGUAGE: Language = 'pt';
const LANGUAGE_STORAGE_KEY = 'language';
const LANGUAGE_CHANGE_EVENT = 'languagechange';
const DOCUMENT_LANG: Record<Language, string> = {
  pt: 'pt-BR',
  en: 'en',
  ja: 'ja',
};

let fallbackLanguage: Language = DEFAULT_LANGUAGE;

function isLanguage(value: string | null): value is Language {
  return value === 'pt' || value === 'en' || value === 'ja';
}

function getLanguageSnapshot(): Language {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;

  try {
    const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (isLanguage(savedLanguage)) {
      fallbackLanguage = savedLanguage;
      return savedLanguage;
    }

    fallbackLanguage = DEFAULT_LANGUAGE;
    return DEFAULT_LANGUAGE;
  } catch {
    return fallbackLanguage;
  }
}

function getServerLanguageSnapshot(): Language {
  return DEFAULT_LANGUAGE;
}

function subscribeToLanguage(onStoreChange: () => void) {
  if (typeof window === 'undefined') return () => undefined;

  const handleStorage = (event: StorageEvent) => {
    if (event.key === LANGUAGE_STORAGE_KEY || event.key === null) {
      onStoreChange();
    }
  };

  window.addEventListener('storage', handleStorage);
  window.addEventListener(LANGUAGE_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener('storage', handleStorage);
    window.removeEventListener(LANGUAGE_CHANGE_EVENT, onStoreChange);
  };
}

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(
    subscribeToLanguage,
    getLanguageSnapshot,
    getServerLanguageSnapshot,
  );

  useEffect(() => {
    document.documentElement.lang = DOCUMENT_LANG[lang];
  }, [lang]);

  const setLang = useCallback((newLang: Language) => {
    fallbackLanguage = newLang;

    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, newLang);
    } catch {
      // O idioma continua disponível na sessão mesmo sem acesso ao localStorage.
    }

    document.documentElement.lang = DOCUMENT_LANG[newLang];
    window.dispatchEvent(new Event(LANGUAGE_CHANGE_EVENT));
  }, []);

  const t = useCallback(
    (key: TranslationKey) => translations[lang][key],
    [lang],
  );

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
