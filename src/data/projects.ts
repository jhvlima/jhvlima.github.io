// src/data/projects.ts
export interface Project {
  id: string;
  titleKey: string;
  descKey: string;
  tags: { text?: string; key?: string }[]; // Pode ser texto fixo ou chave de tradução
  statusKey?: string;
  link?: string;
  linkTitleKey?: string;
  image?: string;
}

export const projectsData: Project[] = [
  {
    id: "ic",
    titleKey: "project1_title",
    descKey: "project1_desc",
    image: "/images/projects/ic_paper.png",
    tags: [
      { key: "tag_nlp" },
      { text: "Shell Script" },
      { text: "Makefile" },
      { text: "API" }
    ],
    link: "https://www.inicepg.univap.br/cd/INIC_2024/anais/arquivos/RE_1100_1072_01.pdf",
    linkTitleKey: "project1_link_title"
  },
  {
    id: "ct",
    titleKey: "project2_title",
    descKey: "project2_desc",
    image: "/images/projects/project_fullstack.png",
    statusKey: "status_ongoing",
    tags: [
      { text: "React.js" },
      { text: "Nest.js" },
      { text: "n8n" },
      { key: "tag_softeng" }
    ],
    link: "https://www.ctjunior.com.br/",
    linkTitleKey: "project2_link_title"
  },
  {
    id: "gamelab",
    titleKey: "project3_title",
    descKey: "project3_desc",
    image: "/images/projects/roblox.webp",
    tags: [
      { text: "Roblox Studio" },
      { text: "Luau" },
      { text: "Blender" },
      { key: "tag_gamedev" }
    ],
    link: "https://www.roblox.com/pt/games/123797405972371/I-LOVE-EATING-TRASH",
    linkTitleKey: "project3_link_title"
  },
  {
    id: "mini_projects",
    titleKey: "project4_title",
    descKey: "project4_desc",
    image: "/images/projects/project_terminal.png",
    tags: [
      { text: "Git" },
      { text: "Linux" },
      { text: "GitHub" },
    ],
    link: "/vitrine",
    linkTitleKey: "project4_link_title"
  }
];
