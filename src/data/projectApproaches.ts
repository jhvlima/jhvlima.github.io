import type { TranslationKey } from './translations';

interface ApproachPresentation {
  labelKey: TranslationKey;
  badgeClassName: string;
}

export const projectApproaches = {
  'model-training': {
    labelKey: 'project_approach_model_training',
    badgeClassName: 'notebook-tone-ai',
  },
  'model-integration': {
    labelKey: 'project_approach_model_integration',
    badgeClassName: 'notebook-tone-ai',
  },
  'agent-monitoring': {
    labelKey: 'project_approach_agent_monitoring',
    badgeClassName: 'notebook-tone-neutral',
  },
  'numerical-optimization': {
    labelKey: 'project_approach_numerical_optimization',
    badgeClassName: 'notebook-tone-neutral',
  },
} satisfies Record<string, ApproachPresentation>;

export type ProjectApproach = keyof typeof projectApproaches;
