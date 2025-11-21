export interface Semester {
  number: number;
  statusKey: string;   // Mudou de 'status' para 'statusKey'
  subjectsKey: string; // Mudou de array [] para uma única chave de tradução
}

export const educationData = {
  // 'university' e 'course' foram removidos daqui pois agora
  // o componente busca direto do translations.ts (education_university)
  
  // Destaques podem ficar aqui se forem nomes universais (como siglas),
  // ou você pode criar chaves de tradução para eles também.
  highlights: 'education_highlights_list',
  
  semesters: [
    {
      number: 1,
      statusKey: 'sem_completed',
      subjectsKey: 'sem1_subjects'
    },
    {
      number: 2,
      statusKey: 'sem_completed',
      subjectsKey: 'sem2_subjects'
    },
    {
      number: 3,
      statusKey: 'sem_completed',
      subjectsKey: 'sem3_subjects'
    },
    {
      number: 4,
      statusKey: 'sem_completed',
      subjectsKey: 'sem4_subjects'
    },
    {
      number: 5,
      statusKey: 'sem_completed',
      subjectsKey: 'sem5_subjects'
    },
    {
      number: 6,
      statusKey: 'sem_ongoing',
      subjectsKey: 'sem6_subjects'
    },
    {
      number: 7,
      statusKey: 'sem_pending',
      subjectsKey: 'sem7_subjects'
    },
    {
      number: 8,
      statusKey: 'sem_pending',
      subjectsKey: 'sem8_subjects'
    },
    {
      number: 9,
      statusKey: 'sem_pending',
      subjectsKey: 'sem9_subjects'
    },
    {
      number: 10,
      statusKey: 'sem_pending',
      subjectsKey: 'sem10_subjects'
    },
  ] as Semester[]
};