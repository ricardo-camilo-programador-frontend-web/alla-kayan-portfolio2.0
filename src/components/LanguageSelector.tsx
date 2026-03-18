import React from 'react';
import { Globe } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';

export default function LanguageSelector() {
  const { lang, setLang, languages } = useI18n();

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value);
  };

  return (
    <div className="flex items-center gap-2 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 px-3 py-1.5 rounded-full transition-colors">
      <Globe className="w-4 h-4 text-zinc-500 dark:text-zinc-400" aria-hidden="true" />
      <select
        value={lang}
        onChange={handleLangChange}
        className="bg-transparent text-sm text-zinc-700 dark:text-zinc-300 outline-none cursor-pointer appearance-none pr-2"
        aria-label="Selecionar idioma do site"
      >
        {languages.map((l) => (
          <option key={l.code} value={l.code} className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
            {l.name}
          </option>
        ))}
      </select>
    </div>
  );
}
