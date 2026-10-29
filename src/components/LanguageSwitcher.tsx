"use client";
import { useLanguage } from '@/context/LanguageContext';
import type { Language } from '@/data/translations';

const options: {code: Language; label: string}[] = [
  {code:'pt',label:'Português'},
  {code:'en',label:'English'},
  {code:'ja',label:'日本語'},
];
const groupLabels: Record<Language,string> = {
  pt:'Selecionar idioma',en:'Select language',ja:'言語を選択',
};

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="notebook-languages" role="group" aria-label={groupLabels[lang]}>
      {options.map(({code,label}) => (
        <button key={code} type="button" onClick={() => setLang(code)} aria-label={label} aria-pressed={lang === code}>{code.toUpperCase()}</button>
      ))}
    </div>
  );
}
