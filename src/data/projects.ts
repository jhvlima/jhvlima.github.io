// src/data/projects.ts
export interface Project {
  id: string;
  titleKey: string;
  descKey: string;
  tags: { text?: string; key?: string }[]; // Pode ser texto fixo ou chave de tradução
  statusKey?: string;
  link?: string;
}

export const projectsData: Project[] = [
  {
    id: "ic",
    titleKey: "project1_title",
    descKey: "project1_desc",
    tags: [
      { key: "tag_nlp" }, 
      { text: "Shell Script" }, 
      { text: "Makefile" }, 
      { text: "API" }
    ],
    link: "https://www.inicepg.univap.br/cd/INIC_2024/anais/arquivos/RE_1100_1072_01.pdf"
  },
  {
    id: "ct",
    titleKey: "project2_title",
    descKey: "project2_desc",
    statusKey: "status_ongoing",
    tags: [
      { text: "React.js" }, 
      { text: "Nest.js" }, 
      { key: "tag_softeng" }
    ]
  },
  {
    id: "gamelab",
    titleKey: "project3_title",
    descKey: "project3_desc",
    statusKey: "status_ongoing",
    tags: [
      { text: "Roblox Studio" }, 
      { text: "Luau" }, 
      { text: "Blender" }, 
      { key: "tag_gamedev" }
    ]
  }
];