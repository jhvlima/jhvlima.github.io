import type { TranslationKey } from './translations';
import type { ProjectFocus } from './projectFocuses';
import type { ProjectApproach } from './projectApproaches';

export type ProjectVisibility = 'public' | 'private';

export interface ProjectScreenshot {
  src: string;
  altKey: TranslationKey;
  width: number;
  height: number;
  captionKey?: TranslationKey;
}

interface MiniProjectContent {
  id: string;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  focuses: ProjectFocus[];
  approach?: ProjectApproach;
  techStack: string[];
  status?: 'in-development';
  screenshots?: ProjectScreenshot[];
}

export type MiniProject = MiniProjectContent & (
  | { visibility: 'public'; repoLink?: string; repoLinkLabel?: 'GitHub' | 'Colab' }
  | { visibility: 'private' | 'unspecified'; repoLink?: never; repoLinkLabel?: never }
);

export const miniProjectsData: MiniProject[] = [
  {
    id: "chess-bot",
    titleKey: "mini_chess_title",
    descriptionKey: "mini_chess_desc",
    focuses: ["ai", "web"],
    approach: "model-training",
    visibility: "public",
    techStack: ["Python", "Machine Learning", "Flask", "UCI"],
    repoLink: "https://github.com/jhvlima/botChess",
    screenshots: [{ src: "/images/projects/botchess-interface.png", altKey: "mini_chess_screenshot_alt", width: 986, height: 873 }],
  },
  {
    id: "ufes-rental-prediction",
    titleKey: "mini_rental_title",
    descriptionKey: "mini_rental_desc",
    focuses: ["ai"],
    approach: "model-training",
    visibility: "private",
    techStack: ["Python", "pandas", "scikit-learn", "XGBoost"],
    screenshots: [{ src: "/images/projects/aluguel-modelos.png", altKey: "mini_rental_image_alt", captionKey: "mini_rental_image_caption", width: 1280, height: 960 }],
  },
  {
    id: "ct-booking",
    titleKey: "mini_ct_booking_title",
    descriptionKey: "mini_ct_booking_desc",
    focuses: ["ai", "automation", "web"],
    approach: "model-integration",
    visibility: "private",
    techStack: ["n8n", "WhatsApp API", "React", "TypeScript", "Supabase"],
  },
  {
    id: "kamiagents",
    titleKey: "mini_kamiagents_title",
    descriptionKey: "mini_kamiagents_desc",
    focuses: ["ai", "web", "automation"],
    approach: "agent-monitoring",
    visibility: "private",
    techStack: ["React", "TypeScript", "Supabase", "n8n", "WhatsApp API"],
    screenshots: [{ src: "/images/projects/kamiagents-demo.png", altKey: "mini_kamiagents_image_alt", captionKey: "mini_kamiagents_image_caption", width: 1440, height: 900 }],
  },
  {
    id: "n8n-workflows",
    titleKey: "mini_n8n_workflows_title",
    descriptionKey: "mini_n8n_workflows_desc",
    focuses: ["ai", "automation"],
    approach: "model-integration",
    visibility: "public",
    techStack: ["n8n", "GitHub API", "OpenAI API", "Documentation as Code"],
    repoLink: "https://github.com/jhvlima/n8n-workflows",
  },
  {
    id: "ct-tasks",
    titleKey: "mini_ct_tasks_title",
    descriptionKey: "mini_ct_tasks_desc",
    focuses: ["ai", "automation"],
    approach: "model-integration",
    visibility: "private",
    techStack: ["n8n", "ClickUp", "Google Drive", "APIs REST"],
  },
  {
    id: "ct-finance",
    titleKey: "mini_ct_finance_title",
    descriptionKey: "mini_ct_finance_desc",
    focuses: ["ai", "automation"],
    approach: "model-integration",
    visibility: "private",
    techStack: ["n8n", "Asaas API", "Azure OpenAI", "PostgreSQL"],
  },
  {
    id: "ct-documents",
    titleKey: "mini_ct_documents_title",
    descriptionKey: "mini_ct_documents_desc",
    focuses: ["ai", "automation"],
    approach: "model-integration",
    visibility: "private",
    techStack: ["n8n", "OpenAI API", "Google Drive", "DOCX"],
  },
  {
    id: "ufes-table-tennis",
    titleKey: "mini_table_tennis_title",
    descriptionKey: "mini_table_tennis_desc",
    focuses: ["ai"],
    approach: "numerical-optimization",
    visibility: "private",
    status: "in-development",
    techStack: ["Python", "NumPy", "SciPy", "Differential Evolution"],
    screenshots: [{ src: "/images/projects/tenis-mesa-simulacao.png", altKey: "mini_table_tennis_image_alt", captionKey: "mini_table_tennis_image_caption", width: 1040, height: 650 }],
  },
  {
    id: "vendas-telegram-bot",
    titleKey: "mini_telegram_bot_title",
    descriptionKey: "mini_telegram_bot_desc",
    focuses: ["automation"],
    visibility: "public",
    techStack: ["Python", "Telegram API"],
    repoLink: "https://github.com/jhvlima/botVendas"
  },
  {
    id: "terminal-games",
    titleKey: "mini_terminal_games_title",
    descriptionKey: "mini_terminal_games_desc",
    focuses: [],
    visibility: "unspecified",
    techStack: ["C"],
  },
  {
    id: "ufes",
    titleKey: "mini_ufes_title",
    descriptionKey: "mini_ufes_desc",
    focuses: [],
    visibility: "public",
    techStack: ["Academic", "Java", "C", "Python"],
    repoLink: "https://github.com/jhvlima/UFES"
  },
  {
    id: "dogmasLogica",
    titleKey: "mini_logic_title",
    descriptionKey: "mini_logic_desc",
    focuses: ["web"],
    visibility: "public",
    techStack: ["Prolog", "Logic Programming"],
    repoLink: "https://github.com/jhvlima/dogmasLogica",
    screenshots: [{ src: "/images/projects/dogmas-interface.png", altKey: "mini_logic_image_alt", width: 1280, height: 720 }],
  }
];
