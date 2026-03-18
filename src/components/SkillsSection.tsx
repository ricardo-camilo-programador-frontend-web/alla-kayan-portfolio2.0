import { motion } from 'motion/react';
import { Code2 } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';
import { skills } from '../data/skills';

export interface SkillsSectionProps {
  isFirstVisit: boolean;
}

export default function SkillsSection({ isFirstVisit }: SkillsSectionProps) {
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
        <Code2 className="w-5 h-5 text-zinc-400 dark:text-zinc-500" aria-hidden="true" />
        <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 tracking-tight transition-colors">{t(lang, 'skills')}</h3>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((skill, idx) => (
          <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/50 hover:border-zinc-300 dark:hover:border-zinc-700/80 transition-colors">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100 mb-2 transition-colors">{skill.name}</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed transition-colors">{skill.details}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
