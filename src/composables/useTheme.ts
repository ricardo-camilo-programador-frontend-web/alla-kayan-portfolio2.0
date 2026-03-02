import { useSignal, useTask$, type Signal } from '@builder.io/qwik';
import { THEME_STORAGE_KEY } from '../constants';

export interface UseThemeReturn {
  theme: Signal<'light' | 'dark'>;
  toggleTheme: () => void;
  isDark: Signal<boolean>;
}

export function useTheme(): UseThemeReturn {
  const theme = useSignal<'light' | 'dark'>('dark');
  const isDark = useSignal(true);

  useTask$(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (stored === 'light' || (!stored && !prefersDark)) {
      theme.value = 'light';
      document.documentElement.classList.remove('dark');
      isDark.value = false;
    } else {
      theme.value = 'dark';
      document.documentElement.classList.add('dark');
      isDark.value = true;
    }
  });

  const toggleTheme = () => {
    if (theme.value === 'dark') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem(THEME_STORAGE_KEY, 'light');
      theme.value = 'light';
      isDark.value = false;
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem(THEME_STORAGE_KEY, 'dark');
      theme.value = 'dark';
      isDark.value = true;
    }
  };

  return { theme, toggleTheme, isDark };
}
