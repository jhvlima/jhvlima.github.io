"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { MouseEvent } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import type { TranslationKey } from '@/data/translations';
import LanguageSwitcher from './LanguageSwitcher';

export default function NotebookNavBar() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const currentHref = pathname === '/' ? '/' : pathname === '/hub' || pathname === '/hub/' ? '/hub/' : null;
  const links: { href: string; label: TranslationKey }[] = [
    { href: '/', label: 'nav_about' },
    { href: '/hub/', label: 'nav_vitrine' },
    { href: '/#education', label: 'education_title' },
    { href: '/#skills', label: 'nav_skills' },
    { href: currentHref === '/hub/' ? '/hub/#contact' : '/#contact', label: 'contact_title' },
  ];

  const closeMenu = (event: MouseEvent<HTMLAnchorElement>) => {
    const details = event.currentTarget.closest('details');
    const summary = details?.querySelector('summary');
    details?.removeAttribute('open');
    window.requestAnimationFrame(() => summary?.focus({ preventScroll: true }));
  };

  return (
    <nav className="notebook-navigation" aria-label={t('nav_label')}>
      <div className="notebook-navigation-inner">
        <Link href="/" className="notebook-identity">
          <Image src="/images/profile.png" width={56} height={56} alt={t('profile_image_alt')} className="notebook-avatar" />
          <span>
            <span className="notebook-author">{t('profile_name')}</span>
            <span className="notebook-occupation">{t('notebook_occupation')}</span>
          </span>
        </Link>

        <div className="notebook-desktop-navigation">
          <ul className="notebook-navigation-links">
            {links.map(link => (
              <li key={link.href}><Link href={link.href} aria-current={link.href === currentHref ? 'page' : undefined}>{t(link.label)}</Link></li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>

        <details className="notebook-mobile-menu">
          <summary>
            {t('nav_menu')}
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </summary>
          <div className="notebook-mobile-panel">
            <ul className="notebook-navigation-links">
              {links.map(link => (
                <li key={link.href}><Link href={link.href} onClick={closeMenu} aria-current={link.href === currentHref ? 'page' : undefined}>{t(link.label)}</Link></li>
              ))}
            </ul>
            <LanguageSwitcher />
          </div>
        </details>
      </div>
    </nav>
  );
}
