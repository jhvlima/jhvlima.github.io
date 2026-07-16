"use client";

import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";
import type { MouseEvent } from "react";

export default function Navbar() {
  const { t } = useLanguage();

  const closeMobileMenu = (event: MouseEvent<HTMLAnchorElement>) => {
    const details = event.currentTarget.closest("details");
    const summary = details?.querySelector("summary");

    details?.removeAttribute("open");

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => summary?.focus({ preventScroll: true }));
    });
  };
  const mobileLinkClassName = "block rounded px-3 py-2 hover:bg-gray-50 hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600";

  return (
    <nav
      aria-label={t('nav_label')}
      className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 shadow-sm backdrop-blur-md"
    >
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo / Nome */}
        <Link href="/" className="rounded text-xl font-bold text-gray-800 transition-colors hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
          João Lima
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {/* Links de Navegação */}
          <ul className="flex items-center gap-6 text-sm font-medium text-gray-700">
            <li>
              {/* A barra '/' antes do # garante que funcione de qualquer página */}
              <Link href="/#projects" className="rounded transition-colors hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                {t('projects_title')}
              </Link>
            </li>
            <li>
              <Link href="/vitrine/" className="rounded transition-colors hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                {t('nav_vitrine')}
              </Link>
            </li>
            <li>
              <Link href="/#education" className="rounded transition-colors hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                {t('education_title')}
              </Link>
            </li>
            <li>
              <Link href="/#skills" className="rounded transition-colors hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                {t('nav_skills')}
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="rounded transition-colors hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                {t('contact_title')}
              </Link>
            </li>
          </ul>

          <div className="shrink-0">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Menu compacto em telas menores. */}
        <details className="group lg:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 [&::-webkit-details-marker]:hidden">
            {t('nav_menu')}
            <span aria-hidden="true" className="transition-transform group-open:rotate-180">⌄</span>
          </summary>

          <div className="absolute inset-x-6 top-full mt-2 rounded-lg border border-gray-200 bg-white p-4 shadow-lg">
            <ul className="flex flex-col text-sm font-medium text-gray-700">
              <li>
                <Link
                  href="/#projects"
                  onClick={closeMobileMenu}
                  className={mobileLinkClassName}
                >
                  {t('projects_title')}
                </Link>
              </li>
              <li>
                <Link
                  href="/vitrine/"
                  onClick={closeMobileMenu}
                  className={mobileLinkClassName}
                >
                  {t('nav_vitrine')}
                </Link>
              </li>
              <li>
                <Link
                  href="/#education"
                  onClick={closeMobileMenu}
                  className={mobileLinkClassName}
                >
                  {t('education_title')}
                </Link>
              </li>
              <li>
                <Link
                  href="/#skills"
                  onClick={closeMobileMenu}
                  className={mobileLinkClassName}
                >
                  {t('nav_skills')}
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  onClick={closeMobileMenu}
                  className={mobileLinkClassName}
                >
                  {t('contact_title')}
                </Link>
              </li>
            </ul>

            <div className="mt-3 border-t border-gray-200 pt-3">
              <LanguageSwitcher />
            </div>
          </div>
        </details>
      </div>
    </nav>
  );
}
