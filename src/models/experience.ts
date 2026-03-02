import { Experience, Education, Skill } from '../types';

export function createExperiences(lang: string, t: (lang: string, key: string, ...args: string[]) => string): Experience[] {
  return [
    {
      company: 'Shiddo Technology',
      role: t(lang, 'role'),
      type: t(lang, 'fullTime'),
      period: `out 2024 - ${t(lang, 'present')}`,
      duration: t(lang, 'duration', '1', t(lang, 'year'), '5', t(lang, 'months')),
      skills: `React.js, Next.js ${t(lang, 'skillsCount', '5')}`,
    },
    {
      company: 'Labi9',
      roles: [
        {
          title: 'Backend Developer',
          type: t(lang, 'partTime'),
          period: 'dez 2023 - mai 2025',
          duration: t(lang, 'duration', '1', t(lang, 'year'), '6', t(lang, 'months')),
          skills: `Laravel, PHP ${t(lang, 'skillsCount', '15')}`,
        },
        {
          title: 'Mobile Developer',
          type: t(lang, 'partTime'),
          period: 'jul 2023 - dez 2023',
          duration: `6 ${t(lang, 'months')}`,
          skills: `Dart, Kotlin ${t(lang, 'skillsCount', '5')}`,
        }
      ]
    },
    {
      company: 'SIALOG Software Solutions',
      roles: [
        {
          title: 'Full Stack Developer',
          type: t(lang, 'fullTime'),
          period: 'mai 2022 - out 2024',
          duration: t(lang, 'duration', '2', t(lang, 'years'), '6', t(lang, 'months')),
          skills: `Ruby, Redis ${t(lang, 'skillsCount', '10')}`,
        },
        {
          title: 'Developer Internship',
          type: t(lang, 'internship'),
          period: 'mai 2021 - mai 2022',
          duration: t(lang, 'duration', '1', t(lang, 'year'), '1', t(lang, 'month')),
          skills: `Ruby, PostgreSQL ${t(lang, 'skillsCount', '6')}`,
        }
      ]
    }
  ];
}

export function createEducation(lang: string, t: (lang: string, key: string, ...args: string[]) => string): Education[] {
  return [
    {
      institution: 'Faculdade de Tecnologia de Jahu',
      degree: 'Tecnológico, Sistemas para Internet',
      period: '2020 – 2022',
      skills: `MySQL, Git ${t(lang, 'skillsCount', '5')}`,
    },
    {
      institution: 'Etec Comendador João Rays',
      degree: 'Curso Técnico, Informática para Internet',
      period: '2017 – 2019',
      skills: `MySQL, Git ${t(lang, 'skillsCount', '3')}`,
    }
  ];
}

export function createSkills(lang: string, t: (lang: string, key: string, ...args: string[]) => string): Skill[] {
  return [
    {
      name: 'Ruby on Rails',
      details: t(lang, 'skillsDetails1'),
    },
    {
      name: 'Flutter',
      details: t(lang, 'skillsDetails2'),
    }
  ];
}
