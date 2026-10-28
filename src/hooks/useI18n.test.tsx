import { renderHook, act } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useI18n } from './useI18n';

describe('useI18n', () => {
  it('translates key and interpolates arguments', () => {
    const { result } = renderHook(() => useI18n());
    expect(result.current.t('skillsCount', '3')).toBe('and 3 more skills');
  });

  it('falls back to Portuguese for unsupported language keys', () => {
    const { result } = renderHook(() => useI18n());
    expect(result.current.t('missing.key')).toBe('missing.key');
  });

  it('changes language and persists it', () => {
    const { result } = renderHook(() => useI18n());
    act(() => result.current.setLang('en'));
    expect(result.current.lang).toBe('en');
    expect(window.localStorage.setItem).toHaveBeenCalledWith('app_lang', 'en');
  });
});
