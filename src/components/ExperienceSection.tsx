import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';
import { experiences } from '../data/experiences';

export interface ExperienceSectionProps {
  isFirstVisit: boolean;
}

export default function ExperienceSection({ isFirstVisit }: ExperienceSectionProps) {
  const { lang, t } = useI18n();

  return (
    <motion.section
      initial={isFirstVisit ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <header className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800/60 pb-4 transition-colors">
        <Briefcase className="w-5 h-5 text-zinc-400 dark:text-zinc-500" aria-hidden="true" />
        <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 tracking-tight transition-colors">{t(lang, 'experience')}</h3>
      </header>

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
  );
}
