import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Mail, FileText } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';

export interface HeroSectionProps {
  isFirstVisit: boolean;
}

export default function HeroSection({ isFirstVisit }: HeroSectionProps) {
  const { lang, t } = useI18n();

  return (
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
        <a href="#" className="text-zinc-900 dark:text-zinc-100 hover:text-black dark:hover:text-white hover:underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 transition-all" aria-label="Company @shiddotech">@shiddotech</a>,{' '}
        <a href="#" className="text-zinc-900 dark:text-zinc-100 hover:text-black dark:hover:text-white hover:underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 transition-all" aria-label="Company @onnechat">@onnechat</a> {t(lang, 'and')}{' '}
        <a href="#" className="text-zinc-900 dark:text-zinc-100 hover:text-black dark:hover:text-white hover:underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 transition-all" aria-label="Company @oliquo">@oliquo</a>.
        <br className="hidden sm:block" />
        {t(lang, 'bio')}
      </p>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <a href="mailto:allankayan@hotmail.com" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 dark:bg-zinc-100 text-sm font-medium text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white transition-colors" aria-label="Enviar email para allankayan@hotmail.com">
          <Mail className="w-4 h-4" aria-hidden="true" />
          allankayan@hotmail.com
        </a>
        <div className="flex items-center gap-2 px-2">
          <a href="https://allankayan.cv/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all" aria-label="Ver currículo">
            <FileText className="w-4 h-4" aria-hidden="true" />
          </a>
          <a href="https://github.com/allankayan" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all" aria-label="Ver perfil no GitHub">
            <Github className="w-4 h-4" aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/allankayan/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all" aria-label="Ver perfil no LinkedIn">
            <Linkedin className="w-4 h-4" aria-hidden="true" />
          </a>
          <a href="https://x.com/kayan_allan" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all" aria-label="Ver perfil no X (Twitter)">
            <Twitter className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
