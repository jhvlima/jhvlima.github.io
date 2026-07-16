import type { TranslationKey } from './translations';

export interface SkillCategory {
  titleKey: TranslationKey; // Chave para tradução (Ex: "Linguagens")
  items: string[];
}

export const skillsData: SkillCategory[] = [
  {
    titleKey: "skills_languages_title",
    items: ["C/C++", "Python", "Java", "Shell Script", "SwiftUI", "Luau", "TypeScript"]
  },
  {
    titleKey: "skills_frameworks_title",
    items: ["React.js", "Next.js", "Tailwind CSS"]
  },
  {
    titleKey: "skills_tools_title",
    items: ["Git", "VS Code", "n8n", "Blender", "Roblox Studio", "Linux"]
  }
];
