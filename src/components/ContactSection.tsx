"use client";
import { useLanguage } from '@/context/LanguageContext';
import ArrowIcon from './ui/ArrowIcon';

const contacts = [
  {href:'https://github.com/jhvlima',label:'GitHub'},
  {href:'https://www.linkedin.com/in/jhvlima/',label:'LinkedIn'},
  {href:'http://lattes.cnpq.br/6864773005774963',label:'Currículo Lattes'},
];

export default function ContactSection() {
  const { t } = useLanguage();
  return (
    <section id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title" className="notebook-section-title">{t('contact_title')}</h2>
      <ul className="notebook-actions notebook-contacts">
        {contacts.map(contact => (
          <li key={contact.href}>
            <a href={contact.href} target="_blank" rel="noopener noreferrer" className="notebook-action">
              {contact.label}<ArrowIcon external /><span className="sr-only"> ({t('opens_new_tab')})</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
