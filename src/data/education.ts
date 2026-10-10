import type { TranslationKey } from './translations';

export type EducationStatus = 'completed' | 'ongoing' | 'planned';
export type EducationLevel = 'undergraduate' | 'master';
export type AcademicItemKind = 'course' | 'research' | 'milestone';

type EducationTranslationKey = Extract<TranslationKey, `education_${string}`>;

export interface AcademicItem {
  id: string;
  kind: AcademicItemKind;
  labelKey: EducationTranslationKey;
  featured?: boolean;
}

export interface AcademicPeriod {
  id: string;
  ordinal: number;
  status: EducationStatus;
  items: readonly AcademicItem[];
}

export interface EducationProgram {
  id: string;
  level: EducationLevel;
  levelKey: EducationTranslationKey;
  titleKey: EducationTranslationKey;
  institutionKey: EducationTranslationKey;
  status: EducationStatus;
  periods: readonly AcademicPeriod[];
}

export interface EducationData {
  programs: readonly EducationProgram[];
}

export const educationData = {
  programs: [
    {
      id: 'computer-science-ufes',
      level: 'undergraduate',
      levelKey: 'education_level_undergraduate',
      titleKey: 'education_course',
      institutionKey: 'education_university',
      status: 'ongoing',
      periods: [
        {
          id: 'computer-science-ufes-01',
          ordinal: 1,
          status: 'completed',
          items: [
            { id: 'programming-1', kind: 'course', labelKey: 'education_subject_programming_1' },
            { id: 'calculus-1', kind: 'course', labelKey: 'education_subject_calculus_1' },
            {
              id: 'theoretical-aspects-computing',
              kind: 'course',
              labelKey: 'education_subject_theoretical_aspects_computing',
            },
            {
              id: 'introduction-computer-science',
              kind: 'course',
              labelKey: 'education_subject_introduction_computer_science',
            },
          ],
        },
        {
          id: 'computer-science-ufes-02',
          ordinal: 2,
          status: 'completed',
          items: [
            { id: 'programming-2', kind: 'course', labelKey: 'education_subject_programming_2' },
            { id: 'calculus-2', kind: 'course', labelKey: 'education_subject_calculus_2' },
            { id: 'linear-algebra', kind: 'course', labelKey: 'education_subject_linear_algebra' },
            { id: 'digital-logic', kind: 'course', labelKey: 'education_subject_digital_logic' },
            {
              id: 'logic-computing-1',
              kind: 'course',
              labelKey: 'education_subject_logic_computing_1',
            },
          ],
        },
        {
          id: 'computer-science-ufes-03',
          ordinal: 3,
          status: 'completed',
          items: [
            { id: 'data-structures', kind: 'course', labelKey: 'education_subject_data_structures' },
            {
              id: 'probability-statistics',
              kind: 'course',
              labelKey: 'education_subject_probability_statistics',
            },
            {
              id: 'computer-architecture',
              kind: 'course',
              labelKey: 'education_subject_computer_architecture',
            },
            { id: 'calculus-4', kind: 'course', labelKey: 'education_subject_calculus_4' },
          ],
        },
        {
          id: 'computer-science-ufes-04',
          ordinal: 4,
          status: 'completed',
          items: [
            {
              id: 'sorting-searching',
              kind: 'course',
              labelKey: 'education_subject_sorting_searching',
            },
            {
              id: 'operating-systems',
              kind: 'course',
              labelKey: 'education_subject_operating_systems',
            },
            {
              id: 'object-oriented-programming',
              kind: 'course',
              labelKey: 'education_subject_object_oriented_programming',
              featured: true,
            },
            {
              id: 'formal-languages-automata',
              kind: 'course',
              labelKey: 'education_subject_formal_languages_automata',
            },
            {
              id: 'graph-theory',
              kind: 'course',
              labelKey: 'education_subject_graph_theory',
              featured: true,
            },
          ],
        },
        {
          id: 'computer-science-ufes-05',
          ordinal: 5,
          status: 'completed',
          items: [
            {
              id: 'numerical-algorithms',
              kind: 'course',
              labelKey: 'education_subject_numerical_algorithms',
            },
            {
              id: 'software-engineering-1',
              kind: 'course',
              labelKey: 'education_subject_software_engineering_1',
            },
            {
              id: 'computer-networks',
              kind: 'course',
              labelKey: 'education_subject_computer_networks',
            },
            {
              id: 'logic-computing-2',
              kind: 'course',
              labelKey: 'education_subject_logic_computing_2',
            },
            {
              id: 'integrated-project-1',
              kind: 'course',
              labelKey: 'education_subject_integrated_project_1',
            },
          ],
        },
        {
          id: 'computer-science-ufes-06',
          ordinal: 6,
          status: 'completed',
          items: [
            {
              id: 'computing-society',
              kind: 'course',
              labelKey: 'education_subject_computing_society',
            },
            {
              id: 'software-engineering-2',
              kind: 'course',
              labelKey: 'education_subject_software_engineering_2',
            },
            {
              id: 'programming-paradigms',
              kind: 'course',
              labelKey: 'education_subject_programming_paradigms',
            },
            {
              id: 'theory-computation',
              kind: 'course',
              labelKey: 'education_subject_theory_computation',
            },
          ],
        },
        {
          id: 'computer-science-ufes-07',
          ordinal: 7,
          status: 'completed',
          items: [
            { id: 'database-1', kind: 'course', labelKey: 'education_subject_database_1' },
            {
              id: 'compilers',
              kind: 'course',
              labelKey: 'education_subject_compilers',
              featured: true,
            },
            {
              id: 'artificial-intelligence',
              kind: 'course',
              labelKey: 'education_subject_artificial_intelligence',
              featured: true,
            },
            {
              id: 'algorithm-design-analysis',
              kind: 'course',
              labelKey: 'education_subject_algorithm_design_analysis',
            },
          ],
        },
        {
          id: 'computer-science-ufes-08',
          ordinal: 8,
          status: 'ongoing',
          items: [
            {
              id: 'scientific-research-methodology',
              kind: 'course',
              labelKey: 'education_subject_scientific_research_methodology',
            },
            {
              id: 'mathematics-for-data-science',
              kind: 'course',
              labelKey: 'education_subject_mathematics_for_data_science',
            },
            {
              id: 'data-science',
              kind: 'course',
              labelKey: 'education_subject_data_science',
            },
            {
              id: 'computer-graphics',
              kind: 'course',
              labelKey: 'education_subject_computer_graphics',
            },
          ],
        },
        {
          id: 'computer-science-ufes-09',
          ordinal: 9,
          status: 'planned',
          items: [
            {
              id: 'final-project-1',
              kind: 'milestone',
              labelKey: 'education_subject_final_project_1',
            },
          ],
        },
        {
          id: 'computer-science-ufes-10',
          ordinal: 10,
          status: 'planned',
          items: [
            {
              id: 'final-project-2',
              kind: 'milestone',
              labelKey: 'education_subject_final_project_2',
            },
          ],
        },
      ],
    },
  ],
} as const satisfies EducationData;
