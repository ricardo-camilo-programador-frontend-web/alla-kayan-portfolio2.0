import { component$ } from '@builder.io/qwik';
import { t } from '../../i18n';

interface FooterProps {
  lang: string;
}

export const Footer = component$<FooterProps>(({ lang }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="pt-12 pb-8 border-t border-zinc-200 dark:border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors">
      <div class="flex flex-col gap-2">
        <p class="text-zinc-500 text-sm transition-colors">
          © {currentYear} Allan Kayan. {t(lang, 'rights')}
        </p>
        <p class="text-zinc-500 dark:text-zinc-600 text-xs transition-colors">
          {t(lang, 'developedBy')}{' '}
          <a
            href="https://github.com/ricardo-camilo-programador-frontend-web"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-zinc-800 dark:hover:text-zinc-400 transition-colors underline decoration-zinc-300 dark:decoration-zinc-800 underline-offset-2"
          >
            Ricardo Camilo
          </a>
        </p>
      </div>
      <p class="text-zinc-400 font-serif italic text-lg transition-colors">
        {t(lang, 'blessed')}
      </p>
    </footer>
  );
});
