export interface SkillCategory {
  titleKey: string; // Chave para tradução (Ex: "Linguagens")
  items: string[];
}

export const skillsData: SkillCategory[] = [
  {
    titleKey: "skills_languages_title",
    items: ["C/C++", "Java", "Shell Script", "Swift UI", "Luau", "TypeScript"]
  },
  {
    titleKey: "skills_frameworks_title",
    items: ["React.js", "Next.js", "Tailwind CSS"]
  },
  {
    titleKey: "skills_tools_title",
    items: ["Git", "VS Code", "Nano", "Blender", "Roblox Studio", "Linux"]
  }
];