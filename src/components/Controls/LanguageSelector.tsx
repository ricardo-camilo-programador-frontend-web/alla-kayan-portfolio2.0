import { component$ } from '@builder.io/qwik';
import { useLanguage } from '../../composables/useLanguage';
import { languages } from '../../i18n';

export const LanguageSelector = component$(() => {
  const { lang, setLang } = useLanguage();

  return (
    <div class="flex items-center gap-2 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 px-3 py-1.5 rounded-full transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-500 dark:text-zinc-400">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" x2="22" y1="12" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      <select
        value={lang.value}
        onChange$={(e) => setLang((e.target as HTMLSelectElement).value)}
        class="bg-transparent text-sm text-zinc-700 dark:text-zinc-300 outline-none cursor-pointer appearance-none pr-2"
      >
        {languages.map((l) => (
          <option key={l.code} value={l.code} class="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
            {l.name}
          </option>
        ))}
      </select>
    </div>
  );
});
