"use client";
import { useLanguage } from "@/context/LanguageContext";
import type { Language } from "@/data/translations";

const languageOptions: { code: Language; label: string; shortLabel: string }[] = [
  { code: 'pt', label: 'Português', shortLabel: '🇧🇷 PT' },
  { code: 'en', label: 'English', shortLabel: '🇬🇧 EN' },
  { code: 'ja', label: '日本語', shortLabel: '🇯🇵 JA' },
];

const groupLabels: Record<Language, string> = {
  pt: 'Selecionar idioma',
  en: 'Select language',
  ja: '言語を選択',
};

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex gap-2" role="group" aria-label={groupLabels[lang]}>
      {languageOptions.map(({ code, label, shortLabel }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-label={label}
          aria-pressed={lang === code}
          className={`rounded border px-3 py-2 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${lang === code ? 'bg-blue-100 border-blue-500 text-blue-700' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}
        >
          {shortLabel}
        </button>
      ))}
    </div>
  );
}
