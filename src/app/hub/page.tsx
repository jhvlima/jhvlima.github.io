"use client";
import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { miniProjectsData, type ProjectVisibility } from '@/data/miniProjects';
import { projectFocuses, projectFocusOrder, type ProjectFocus } from '@/data/projectFocuses';
import { prioritizeProjects } from '@/data/projectSelection';
import MiniProjectCard from '@/components/MiniProjectCard';
import ContactSection from '@/components/ContactSection';

function SelectionMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="m3 8 3 3 7-7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const visibilityOptions = ['public', 'private'] as const;

export default function HubPage() {
  const { t } = useLanguage();
  const [selectedFocus, setSelectedFocus] = useState<ProjectFocus | null>(null);
  const [selectedVisibility, setSelectedVisibility] = useState<ProjectVisibility | null>(null);
  const hasActiveFilters = selectedFocus !== null || selectedVisibility !== null;
  const selection = prioritizeProjects(miniProjectsData, { focus: selectedFocus, visibility: selectedVisibility });

  useEffect(() => {
    // Aguarda o App Router concluir a hidratação dos metadados estáticos.
    let titleFrame = 0;
    const metadataFrame = window.requestAnimationFrame(() => {
      titleFrame = window.requestAnimationFrame(() => {
        document.title = `${t('mini_projects_title')} | João Henrique Lima`;
      });
    });
    return () => {
      window.cancelAnimationFrame(metadataFrame);
      window.cancelAnimationFrame(titleFrame);
    };
  }, [t]);

  return (
    <div className="notebook-site">
      <div className="notebook-layout">
        <header className="notebook-intro">
          <h1>{t('mini_projects_title')}</h1>
          <p>{t('mini_projects_subtitle')}</p>
        </header>

        <aside className="notebook-sidebar" aria-label={t('showcase_filters_label')}>
          <section>
            <h2 id="notebook-focus-heading">{t('showcase_prioritize_label')}</h2>
            <div role="group" aria-labelledby="notebook-focus-heading" className="notebook-filters">
              <button type="button" aria-pressed={selectedFocus === null} onClick={() => setSelectedFocus(null)} className={`notebook-filter notebook-filter-neutral ${selectedFocus === null ? 'is-selected' : ''}`}>
                <span className="notebook-filter-label">{selectedFocus === null && <SelectionMark />}{t('showcase_focus_all')}</span>
                <span className="notebook-count">({miniProjectsData.length})</span>
              </button>
              {projectFocusOrder.map(focus => {
                const presentation = projectFocuses[focus];
                const isSelected = selectedFocus === focus;
                const count = miniProjectsData.filter(project => project.focuses.includes(focus)).length;
                return (
                  <button key={focus} type="button" aria-pressed={isSelected} onClick={() => setSelectedFocus(focus)} className={`notebook-filter ${isSelected ? presentation.selectedClassName : presentation.badgeClassName}`}>
                    <span className="notebook-filter-label">{isSelected && <SelectionMark />}{t(presentation.labelKey)}</span>
                    <span className="notebook-count">({count})</span>
                  </button>
                );
              })}
            </div>
          </section>

          <section className="notebook-visibility">
            <h2 id="notebook-visibility-heading">{t('project_visibility_label')}</h2>
            <div role="group" aria-labelledby="notebook-visibility-heading" className="notebook-filters">
              <button type="button" aria-pressed={selectedVisibility === null} onClick={() => setSelectedVisibility(null)} className={`notebook-filter notebook-filter-neutral ${selectedVisibility === null ? 'is-selected' : ''}`}>
                <span className="notebook-filter-label">{selectedVisibility === null && <SelectionMark />}{t('project_visibility_all')}</span>
                <span className="notebook-count">({miniProjectsData.length})</span>
              </button>
              {visibilityOptions.map(visibility => (
                <button key={visibility} type="button" aria-pressed={selectedVisibility === visibility} onClick={() => setSelectedVisibility(visibility)} className={`notebook-filter notebook-filter-neutral ${selectedVisibility === visibility ? 'is-selected' : ''}`}>
                  <span className="notebook-filter-label">{selectedVisibility === visibility && <SelectionMark />}{t(visibility === 'public' ? 'project_visibility_public' : 'project_visibility_private')}</span>
                  <span className="notebook-count">({miniProjectsData.filter(project => project.visibility === visibility).length})</span>
                </button>
              ))}
            </div>
          </section>

          {hasActiveFilters && <button type="button" onClick={() => { setSelectedFocus(null); setSelectedVisibility(null); }} className="notebook-reset">{t('showcase_reset')}</button>}
          <p role="status" aria-atomic="true" className="sr-only">
            {hasActiveFilters ? `${t('showcase_prioritized_count')}: ${selection.matchingCount}. ` : `${t('showcase_default_order')}. `}
            {`${t('showcase_visible_count')}: ${miniProjectsData.length}.`}
            {hasActiveFilters && selection.matchingCount === 0 && ` ${t('showcase_no_matches')}`}
          </p>
        </aside>

        <div className="notebook-hub-content">
          <div className="notebook-records">
            {selection.projects.map((project, index) => (
              <MiniProjectCard key={project.id} project={project} featured={index === 0} emphasis={hasActiveFilters ? (selection.matchingIds.has(project.id) ? 'highlighted' : 'secondary') : 'normal'} selectedFocus={selectedFocus} />
            ))}
          </div>
          <ContactSection />
        </div>

        <footer className="notebook-footer">© {new Date().getFullYear()} João Henrique Valbusa Lima</footer>
      </div>
    </div>
  );
}
