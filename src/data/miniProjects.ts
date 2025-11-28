export interface MiniProject {
  id: string;
  title: string;
  descriptionKey: string;
  techStack: string[];
  repoLink?: string;
  liveLink?: string;
  image?: string;
}

export const miniProjectsData: MiniProject[] = [
  {
    id: "chess-bot",
    title: "Bot de Xadrez",
    descriptionKey: "mini_chess_desc",
    techStack: ["Python", "Chess Engine"],
    repoLink: "https://github.com/jhvlima/Projetos/blob/main/botChess", 
  },
  {
    id: "vendas-telegram-bot",
    title: "Bot de Vendas para Telegram",
    descriptionKey: "mini_telegram_bot_desc",
    techStack: ["Python", "Telegram API"],
    repoLink: "https://github.com/jhvlima/Projetos/blob/main/BotVendas"
  },
  {
    id: "terminal-games",
    title: "Jogos de Terminal",
    descriptionKey: "mini_terminal_games_desc",
    techStack: ["C"],
    repoLink: "https://github.com/jhvlima/Projetos/tree/main/AngryBirds_dinamico"
  },
  {
    id: "ufes",
    title: "Projetos UFES",
    descriptionKey: "mini_ufes_desc",
    techStack: ["Academic", "Java", "C", "Python"],
    repoLink: "https://github.com/jhvlima/UFES"
  },
  {
    id: "dogmasLogica",
    title: "Dogmas da Lógica",
    descriptionKey: "mini_logic_desc",
    techStack: ["Prolog", "Logic Programming"],
    repoLink: "https://github.com/jhvlima/Projetos/blob/main/dogmasLogica/"
  }
];