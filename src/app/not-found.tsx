"use client";

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import ArrowIcon from '@/components/ui/ArrowIcon';

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <div className="notebook-site notebook-not-found">
      <header className="notebook-intro">
        <h1>{t('not_found_title')}</h1>
        <p>{t('not_found_description')}</p>
      </header>
      <div className="notebook-actions">
        <Link href="/" className="notebook-action">{t('not_found_home')}<ArrowIcon /></Link>
        <Link href="/hub/" className="notebook-action">{t('nav_vitrine')}<ArrowIcon /></Link>
      </div>
    </div>
  );
}
