import { useState, useCallback } from 'react';
import { translations, languages } from '../i18n';

export interface Language {
  code: string;
  name: string;
}

export interface I18nContextType {
  lang: string;
  setLang: (lang: string) => void;
  t: (key: string, ...args: string[]) => string;
  languages: Language[];
}

export function useI18n(): I18nContextType {
  const [lang, setLang] = useState<string>(() => {
    if (typeof window === 'undefined') return 'pt';
    const savedLang = localStorage.getItem('app_lang');
    if (savedLang) return savedLang;
    const browserLang = navigator.language.split('-')[0];
    if (languages.some(l => l.code === browserLang)) return browserLang;
    return 'pt';
  });

  const t = useCallback((key: string, ...args: string[]): string => {
    const dict = translations[lang] || translations['pt'];
    let text = dict[key] || translations['pt'][key] || key;

    args.forEach((arg, i) => {
      text = text.replace(`{${i}}`, arg);
    });

    return text;
  }, [lang]);

  const handleLangChange = useCallback((newLang: string) => {
    setLang(newLang);
    localStorage.setItem('app_lang', newLang);
  }, []);

  return {
    lang,
    setLang: handleLangChange,
    t,
    languages,
  };
}
