import { component$ } from '@builder.io/qwik';
import { t } from '../../i18n';
import { COMPANY_LINKS } from '../../constants';

interface HeroSectionProps {
  lang: string;
  isFirstVisit: boolean;
}

export const HeroSection = component$<HeroSectionProps>(({ lang, isFirstVisit }) => {
  return (
    <section
      class="space-y-8"
      style={{
        opacity: isFirstVisit ? '0' : '1',
        transform: isFirstVisit ? 'translateY(20px)' : 'translateY(0)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      }}
      onLoad$={() => {
        if (isFirstVisit) {
          setTimeout(() => {
            const el = document.querySelector('section.space-y-8');
            if (el) {
              (el as HTMLElement).style.opacity = '1';
              (el as HTMLElement).style.transform = 'translateY(0)';
            }
          }, 50);
        }
      }}
    >
      <div class="space-y-3">
        <h1 class="text-4xl md:text-5xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight transition-colors">
          Allan Kayan
        </h1>
        <h2 class="text-xl text-zinc-500 dark:text-zinc-400 font-medium tracking-tight transition-colors">
          {t(lang, 'role')}
        </h2>
      </div>

      <p class="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-2xl transition-colors">
        {t(lang, 'building')}{' '}
        <a href={COMPANY_LINKS.shiddotech} class="text-zinc-900 dark:text-zinc-100 hover:text-black dark:hover:text-white hover:underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 transition-all">
          @shiddotech
        </a>,{' '}
        <a href={COMPANY_LINKS.onnechat} class="text-zinc-900 dark:text-zinc-100 hover:text-black dark:hover:text-white hover:underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 transition-all">
          @onnechat
        </a>{' '}
        {t(lang, 'and')}{' '}
        <a href={COMPANY_LINKS.oliquo} class="text-zinc-900 dark:text-zinc-100 hover:text-black dark:hover:text-white hover:underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 transition-all">
          @oliquo
        </a>.
        <br class="hidden sm:block" />
        {t(lang, 'bio')}
      </p>

      <div class="flex flex-wrap items-center gap-4 pt-2">
        <a
          href="mailto:allankayan@hotmail.com"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 dark:bg-zinc-100 text-sm font-medium text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          allankayan@hotmail.com
        </a>
      </div>
    </section>
  );
});
