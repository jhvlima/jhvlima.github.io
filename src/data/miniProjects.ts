import type { TranslationKey } from './translations';

export interface MiniProject {
  id: string;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  techStack: string[];
  repoLink?: string;
  repoLinkLabel?: "GitHub" | "Colab";
}

export const miniProjectsData: MiniProject[] = [
  {
    id: "chess-bot",
    titleKey: "mini_chess_title",
    descriptionKey: "mini_chess_desc",
    techStack: ["Python", "Machine Learning", "Flask", "UCI"],
    repoLink: "https://github.com/jhvlima/botChess",
  },
  {
    id: "n8n-workflows",
    titleKey: "mini_n8n_workflows_title",
    descriptionKey: "mini_n8n_workflows_desc",
    techStack: ["n8n", "GitHub API", "OpenAI API", "Documentation as Code"],
    repoLink: "https://github.com/jhvlima/n8n-workflows",
  },
  {
    id: "vendas-telegram-bot",
    titleKey: "mini_telegram_bot_title",
    descriptionKey: "mini_telegram_bot_desc",
    techStack: ["Python", "Telegram API"],
    repoLink: "https://github.com/jhvlima/botVendas"
  },
  {
    id: "terminal-games",
    titleKey: "mini_terminal_games_title",
    descriptionKey: "mini_terminal_games_desc",
    techStack: ["C"],
  },
  {
    id: "ufes",
    titleKey: "mini_ufes_title",
    descriptionKey: "mini_ufes_desc",
    techStack: ["Academic", "Java", "C", "Python"],
    repoLink: "https://github.com/jhvlima/UFES"
  },
  {
    id: "dogmasLogica",
    titleKey: "mini_logic_title",
    descriptionKey: "mini_logic_desc",
    techStack: ["Prolog", "Logic Programming"],
    repoLink: "https://github.com/jhvlima/dogmasLogica"
  }
];
