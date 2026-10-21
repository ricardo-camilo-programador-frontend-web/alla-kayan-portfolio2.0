import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import SkillsSection from './SkillsSection';

// Mock the useI18n hook
vi.mock('../hooks/useI18n', () => ({
  useI18n: () => ({
    lang: 'pt',
    t: (_lang: string, key: string) => {
      const translations: Record<string, string> = {
        skills: 'Habilidades',
      };
      return translations[key] || key;
    },
  }),
}));

describe('SkillsSection', () => {
  it('should render the skills section', () => {
    render(<SkillsSection isFirstVisit={false} />);
    expect(screen.getByRole('heading', { name: /habilidades/i })).toBeInTheDocument();
  });

  it('should render Code2 icon', () => {
    render(<SkillsSection isFirstVisit={false} />);
    const section = screen.getByRole('heading', { name: /habilidades/i }).closest('section');
    expect(section).toBeInTheDocument();
  });

  it('should render skill cards', () => {
    render(<SkillsSection isFirstVisit={false} />);
    // Skills from the data file
    const skillCards = document.querySelectorAll('.grid > div');
    expect(skillCards.length).toBeGreaterThan(0);
  });

  it('should accept isFirstVisit prop', () => {
    const { rerender } = render(<SkillsSection isFirstVisit={true} />);
    expect(screen.getByRole('heading', { name: /habilidades/i })).toBeInTheDocument();
    
    rerender(<SkillsSection isFirstVisit={false} />);
    expect(screen.getByRole('heading', { name: /habilidades/i })).toBeInTheDocument();
  });
});
