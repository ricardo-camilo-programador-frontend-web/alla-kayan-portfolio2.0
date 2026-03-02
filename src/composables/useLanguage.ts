import { useSignal, useTask$, type Signal } from '@builder.io/qwik';
import { languages, type Language } from '../i18n';
import { LANG_STORAGE_KEY } from '../constants';

export interface UseLanguageReturn {
  lang: Signal<string>;
  setLang: (code: string) => void;
  currentLanguage: Signal<Language | undefined>;
}

export function useLanguage(): UseLanguageReturn {
  const lang = useSignal<string>('pt');
  const currentLanguage = useSignal<Language | undefined>(undefined);

  useTask$(() => {
    const savedLang = localStorage.getItem(LANG_STORAGE_KEY);

    if (savedLang) {
      lang.value = savedLang;
    } else {
      const browserLang = navigator.language.split('-')[0];
      const matched = languages.find(l => l.code === browserLang);
      if (matched) {
        lang.value = browserLang;
      }
    }

    currentLanguage.value = languages.find(l => l.code === lang.value);
  });

  const setLang = (code: string) => {
    lang.value = code;
    localStorage.setItem(LANG_STORAGE_KEY, code);
    currentLanguage.value = languages.find(l => l.code === code);
  };

  return { lang, setLang, currentLanguage };
}
