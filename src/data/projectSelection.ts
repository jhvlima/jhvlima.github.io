import type { MiniProject, ProjectVisibility } from './miniProjects';
import type { ProjectFocus } from './projectFocuses';

export interface ProjectSelection {
  focus: ProjectFocus | null;
  visibility: ProjectVisibility | null;
}

export function prioritizeProjects(projects: MiniProject[], selection: ProjectSelection) {
  const matching: MiniProject[] = [];
  const remaining: MiniProject[] = [];

  for (const project of projects) {
    const matchesFocus = selection.focus === null || project.focuses.includes(selection.focus);
    const matchesVisibility = selection.visibility === null || project.visibility === selection.visibility;
    (matchesFocus && matchesVisibility ? matching : remaining).push(project);
  }

  return {
    projects: [...matching, ...remaining],
    matchingIds: new Set(matching.map(project => project.id)),
    matchingCount: matching.length,
  };
}
