import type { TranslationKey } from './translations';

interface FocusPresentation {
  labelKey: TranslationKey;
  badgeClassName: string;
  selectedClassName: string;
  highlightClassName: string;
}

export const projectFocuses = {
  ai: {
    labelKey: 'project_focus_ai',
    badgeClassName: 'notebook-tone-ai',
    selectedClassName: 'notebook-tone-ai is-selected',
    highlightClassName: 'notebook-tone-ai',
  },
  web: {
    labelKey: 'project_focus_web',
    badgeClassName: 'notebook-tone-web',
    selectedClassName: 'notebook-tone-web is-selected',
    highlightClassName: 'notebook-tone-web',
  },
  automation: {
    labelKey: 'project_focus_automation',
    badgeClassName: 'notebook-tone-automation',
    selectedClassName: 'notebook-tone-automation is-selected',
    highlightClassName: 'notebook-tone-automation',
  },
  'skills-prompts': {
    labelKey: 'project_focus_skills_prompts',
    badgeClassName: 'notebook-tone-skills',
    selectedClassName: 'notebook-tone-skills is-selected',
    highlightClassName: 'notebook-tone-skills',
  },
} satisfies Record<string, FocusPresentation>;

export type ProjectFocus = keyof typeof projectFocuses;

export const projectFocusOrder = Object.keys(projectFocuses) as ProjectFocus[];
