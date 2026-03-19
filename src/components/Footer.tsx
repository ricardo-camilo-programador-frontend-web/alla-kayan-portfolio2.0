import { motion } from 'motion/react';
import { useI18n } from '../hooks/useI18n';

export interface FooterProps {
  isFirstVisit: boolean;
}

export default function Footer({ isFirstVisit }: FooterProps) {
  const { lang, t } = useI18n();

  return (
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
            rel="noopener noreferrer author"
            className="hover:text-zinc-800 dark:hover:text-zinc-400 transition-colors underline decoration-zinc-300 dark:decoration-zinc-800 underline-offset-2"
            aria-label="Perfil do desenvolvedor Ricardo Camilo no GitHub"
          >
            Ricardo Camilo
          </a>
        </p>
      </div>
      <p className="text-zinc-400 font-serif italic text-lg transition-colors">
        {t(lang, 'blessed')}
      </p>
    </motion.footer>
  );
}
