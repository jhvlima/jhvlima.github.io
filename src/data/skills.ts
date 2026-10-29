import type { TranslationKey } from './translations';

export interface SkillCategory {
  titleKey: TranslationKey; // Chave para tradução (Ex: "Linguagens")
  items: string[];
}

export const skillsData: SkillCategory[] = [
  {
    titleKey: "skills_languages_title",
    items: ["Python", "TypeScript", "SQL", "C/C++", "Java", "Shell Script", "Luau"]
  },
  {
    titleKey: "skills_frameworks_title",
    items: ["React.js", "Next.js", "Tailwind CSS", "SwiftUI"]
  },
  {
    titleKey: "skills_data_ai_title",
    items: ["pandas", "scikit-learn", "XGBoost"]
  },
  {
    titleKey: "skills_integrations_title",
    items: ["APIs REST", "Supabase", "PostgreSQL"]
  },
  {
    titleKey: "skills_tools_title",
    items: ["Git", "VS Code", "n8n", "Blender", "Roblox Studio", "Linux"]
  },
  {
    titleKey: "skills_ai_development_title",
    items: ["Antigravity", "Claude", "Codex"]
  }
];
