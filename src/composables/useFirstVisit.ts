import { useSignal, useTask$, type Signal } from '@builder.io/qwik';
import { VISITED_STORAGE_KEY } from '../constants';

export interface UseFirstVisitReturn {
  isFirstVisit: Signal<boolean>;
  markAsVisited: () => void;
}

export function useFirstVisit(): UseFirstVisitReturn {
  const isFirstVisit = useSignal<boolean>(true);

  useTask$(() => {
    const hasVisited = sessionStorage.getItem(VISITED_STORAGE_KEY);

    if (hasVisited) {
      isFirstVisit.value = false;
    } else {
      sessionStorage.setItem(VISITED_STORAGE_KEY, 'true');
      isFirstVisit.value = true;
    }
  });

  const markAsVisited = () => {
    sessionStorage.setItem(VISITED_STORAGE_KEY, 'true');
    isFirstVisit.value = false;
  };

  return { isFirstVisit, markAsVisited };
}
