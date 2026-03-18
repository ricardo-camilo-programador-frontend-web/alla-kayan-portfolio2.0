import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';
import { education } from '../data/education';

export interface EducationSectionProps {
  isFirstVisit: boolean;
}

export default function EducationSection({ isFirstVisit }: EducationSectionProps) {
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
        <GraduationCap className="w-5 h-5 text-zinc-400 dark:text-zinc-500" aria-hidden="true" />
        <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 tracking-tight transition-colors">{t(lang, 'education')}</h3>
      </header>

      <div className="space-y-8">
        {education.map((edu, idx) => (
          <article key={idx} className="group">
            <h4 className="text-base font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors">{edu.institution}</h4>
            <div className="space-y-1 mt-1.5">
              <p className="text-zinc-600 dark:text-zinc-300 transition-colors">{edu.degree}</p>
              <div className="flex items-center gap-2 text-sm text-zinc-500 transition-colors">
                <time>{edu.period}</time>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 pt-1 transition-colors">{edu.skills}</p>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
