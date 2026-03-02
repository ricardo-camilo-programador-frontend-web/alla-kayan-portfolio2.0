import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Mail, Briefcase, GraduationCap, Code2, Globe, Sun, Moon, FileText } from 'lucide-react';
import { languages, t } from './i18n';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const AdSenseHorizontal = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <div className="w-full flex justify-center my-8 overflow-hidden min-h-[90px] bg-zinc-100 dark:bg-zinc-900/50 rounded-lg">
      <ins className="adsbygoogle"
           style={{ display: 'block', width: '100%', height: '90px' }}
           data-ad-client="ca-pub-6735039970151788"
           data-ad-format="horizontal"
           data-full-width-responsive="true"></ins>
    </div>
  );
};

const AdSenseVertical = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <div className="hidden xl:block w-[160px] h-[600px] sticky top-24 bg-zinc-100 dark:bg-zinc-900/50 rounded-lg overflow-hidden">
      <ins className="adsbygoogle"
           style={{ display: 'inline-block', width: '160px', height: '600px' }}
           data-ad-client="ca-pub-6735039970151788"></ins>
    </div>
  );
};

export default function App() {
  const [lang, setLang] = useState('pt');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    // Check session storage for first visit
    const hasVisited = sessionStorage.getItem('has_visited');
    if (hasVisited) {
      setIsFirstVisit(false);
    } else {
      sessionStorage.setItem('has_visited', 'true');
    }

    // Language init
    const savedLang = localStorage.getItem('app_lang');
    if (savedLang) {
      setLang(savedLang);
    } else {
      const browserLang = navigator.language.split('-')[0];
      if (languages.some(l => l.code === browserLang)) {
        setLang(browserLang);
      }
    }

    // Theme init
    if (document.documentElement.classList.contains('dark')) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setLang(newLang);
    localStorage.setItem('app_lang', newLang);
  };

  const toggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  const experiences = [
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

  const education = [
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

  const skills = [
    {
      name: 'Ruby on Rails',
      details: t(lang, 'skillsDetails1'),
    },
    {
      name: 'Flutter',
      details: t(lang, 'skillsDetails2'),
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#0a0a0a] text-zinc-600 dark:text-zinc-300 font-sans transition-colors duration-300">
      {/* Top Controls */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-3">
        {/* Theme Toggle */}
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        {/* Language Selector */}
        <div className="flex items-center gap-2 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 px-3 py-1.5 rounded-full transition-colors">
          <Globe className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
          <select 
            value={lang} 
            onChange={handleLangChange}
            className="bg-transparent text-sm text-zinc-700 dark:text-zinc-300 outline-none cursor-pointer appearance-none pr-2"
          >
            {languages.map(l => (
              <option key={l.code} value={l.code} className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">{l.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-center max-w-[1400px] mx-auto relative">
        {/* Left Vertical Ad */}
        <aside className="hidden xl:flex flex-col pt-24 px-4 w-[200px] items-end">
          <AdSenseVertical />
        </aside>

        <main className="w-full max-w-3xl px-6 py-16 md:py-24 space-y-24">
          
          {/* Hero Section */}
          <motion.section 
            initial={isFirstVisit ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight transition-colors">
              Allan Kayan
            </h1>
            <h2 className="text-xl text-zinc-500 dark:text-zinc-400 font-medium tracking-tight transition-colors">
              {t(lang, 'role')}
            </h2>
          </div>
          
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-2xl transition-colors">
            {t(lang, 'building')}{' '}
            <a href="#" className="text-zinc-900 dark:text-zinc-100 hover:text-black dark:hover:text-white hover:underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 transition-all">@shiddotech</a>,{' '}
            <a href="#" className="text-zinc-900 dark:text-zinc-100 hover:text-black dark:hover:text-white hover:underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 transition-all">@onnechat</a> {t(lang, 'and')}{' '}
            <a href="#" className="text-zinc-900 dark:text-zinc-100 hover:text-black dark:hover:text-white hover:underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 transition-all">@oliquo</a>.
            <br className="hidden sm:block" />
            {t(lang, 'bio')}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="mailto:allankayan@hotmail.com" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 dark:bg-zinc-100 text-sm font-medium text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white transition-colors">
              <Mail className="w-4 h-4" />
              allankayan@hotmail.com
            </a>
            <div className="flex items-center gap-2 px-2">
              <a href="https://allankayan.cv/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all" aria-label="Curriculo">
                <FileText className="w-4 h-4" />
              </a>
              <a href="https://github.com/allankayan" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/allankayan/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://x.com/kayan_allan" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all" aria-label="X / Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.section>

        <AdSenseHorizontal />

        {/* Experience Section */}
        <motion.section 
          initial={isFirstVisit ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800/60 pb-4 transition-colors">
            <Briefcase className="w-5 h-5 text-zinc-400 dark:text-zinc-500" />
            <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 tracking-tight transition-colors">{t(lang, 'experience')}</h3>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative">
                <div className="mb-5">
                  <h4 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 transition-colors">{exp.company}</h4>
                </div>
                
                <div className="space-y-8 pl-5 border-l border-zinc-200 dark:border-zinc-800/60 ml-2 transition-colors">
                  {exp.roles ? (
                    exp.roles.map((role, roleIdx) => (
                      <div key={roleIdx} className="relative">
                        <div className="absolute -left-[25px] top-2 w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700 ring-4 ring-zinc-50 dark:ring-[#0a0a0a] transition-colors" />
                        <div className="space-y-1.5">
                          <h5 className="font-medium text-zinc-800 dark:text-zinc-200 transition-colors">{role.title}</h5>
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-zinc-500 transition-colors">
                            <span>{role.type}</span>
                            <span>&middot;</span>
                            <span>{role.period}</span>
                            <span>&middot;</span>
                            <span>{role.duration}</span>
                          </div>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400 pt-1.5 transition-colors">{role.skills}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="relative">
                      <div className="absolute -left-[25px] top-2 w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700 ring-4 ring-zinc-50 dark:ring-[#0a0a0a] transition-colors" />
                      <div className="space-y-1.5">
                        <h5 className="font-medium text-zinc-800 dark:text-zinc-200 transition-colors">{exp.role}</h5>
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-zinc-500 transition-colors">
                          <span>{exp.type}</span>
                          <span>&middot;</span>
                          <span>{exp.period}</span>
                          <span>&middot;</span>
                          <span>{exp.duration}</span>
                        </div>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 pt-1.5 transition-colors">{exp.skills}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <AdSenseHorizontal />

        {/* Education Section */}
        <motion.section 
          initial={isFirstVisit ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800/60 pb-4 transition-colors">
            <GraduationCap className="w-5 h-5 text-zinc-400 dark:text-zinc-500" />
            <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 tracking-tight transition-colors">{t(lang, 'education')}</h3>
          </div>

          <div className="space-y-8">
            {education.map((edu, idx) => (
              <div key={idx} className="group">
                <h4 className="text-base font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors">{edu.institution}</h4>
                <div className="space-y-1 mt-1.5">
                  <p className="text-zinc-600 dark:text-zinc-300 transition-colors">{edu.degree}</p>
                  <div className="flex items-center gap-2 text-sm text-zinc-500 transition-colors">
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 pt-1 transition-colors">{edu.skills}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <AdSenseHorizontal />

        {/* Skills Section */}
        <motion.section 
          initial={isFirstVisit ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800/60 pb-4 transition-colors">
            <Code2 className="w-5 h-5 text-zinc-400 dark:text-zinc-500" />
            <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 tracking-tight transition-colors">{t(lang, 'skills')}</h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((skill, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/50 hover:border-zinc-300 dark:hover:border-zinc-700/80 transition-colors">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100 mb-2 transition-colors">{skill.name}</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed transition-colors">{skill.details}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <AdSenseHorizontal />

        {/* Footer */}
        <motion.footer 
          initial={isFirstVisit ? { opacity: 0 } : { opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-12 pb-8 border-t border-zinc-200 dark:border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors"
        >
          <div className="flex flex-col gap-2">
            <p className="text-zinc-500 text-sm transition-colors">
              © {new Date().getFullYear()} Allan Kayan. {t(lang, 'rights')}
            </p>
            <p className="text-zinc-500 dark:text-zinc-600 text-xs transition-colors">
              {t(lang, 'developedBy')}{' '}
              <a 
                href="https://github.com/ricardo-camilo-programador-frontend-web" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-zinc-800 dark:hover:text-zinc-400 transition-colors underline decoration-zinc-300 dark:decoration-zinc-800 underline-offset-2"
              >
                Ricardo Camilo
              </a>
            </p>
          </div>
          <p className="text-zinc-400 font-serif italic text-lg transition-colors">
            {t(lang, 'blessed')}
          </p>
        </motion.footer>

        </main>

        {/* Right Vertical Ad */}
        <aside className="hidden xl:flex flex-col pt-24 px-4 w-[200px] items-start">
          <AdSenseVertical />
        </aside>
      </div>
    </div>
  );
}
