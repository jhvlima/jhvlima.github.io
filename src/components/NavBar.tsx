"use client";

import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-4xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Logo / Nome */}
        <Link href="/" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
          João Lima
        </Link>

{/* Links de Navegação */}
        <ul className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <li>
            {/* A barra '/' antes do # garante que funcione de qualquer página */}
            <Link href="/#projects" className="hover:text-blue-600 transition-colors">
              {t('projects_title')}
            </Link>
          </li>
          <li>
            <Link href="/#education" className="hover:text-blue-600 transition-colors">
              {t('education_title')}
            </Link>
          </li>
          <li>
            <Link href="/#skills" className="hover:text-blue-600 transition-colors">
              {t('skills_title')}
            </Link>
          </li>
          <li>
            {/* Corrigido de #contacts para #contact (singular) */}
            <Link href="/#contact" className="hover:text-blue-600 transition-colors">
              {t('contact_title')}
            </Link>
          </li>
        </ul>

        {/* Switcher de Idioma */}
        <div className="shrink-0">
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}