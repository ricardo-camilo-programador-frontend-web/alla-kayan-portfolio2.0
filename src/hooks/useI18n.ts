import { useState, useEffect, useCallback } from 'react';
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
  const [lang, setLang] = useState<string>('pt');
  const [isInitialized, setIsInitialized] = useState(false);

  // Inicializar idioma salvo ou detectar idioma do navegador
  useEffect(() => {
    const savedLang = localStorage.getItem('app_lang');
    if (savedLang) {
      setLang(savedLang);
    } else {
      const browserLang = navigator.language.split('-')[0];
      if (languages.some(l => l.code === browserLang)) {
        setLang(browserLang);
      }
    }
    setIsInitialized(true);
  }, []);

  // Função de tradução otimizada
  const t = useCallback((key: string, ...args: string[]): string => {
    const dict = translations[lang] || translations['pt'];
    let text = dict[key] || translations['pt'][key] || key;

    args.forEach((arg, i) => {
      text = text.replace(`{${i}}`, arg);
    });

    return text;
  }, [lang]);

  // Handler para mudança de idioma com persistência
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
