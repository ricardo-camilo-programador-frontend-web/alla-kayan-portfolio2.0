import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ExperienceSection from './ExperienceSection';

// Mock the useI18n hook
vi.mock('../hooks/useI18n', () => ({
  useI18n: () => ({
    lang: 'pt',
    t: (_lang: string, key: string) => {
      const translations: Record<string, string> = {
        experience: 'Experiência',
      };
      return translations[key] || key;
    },
  }),
}));

describe('ExperienceSection', () => {
  it('should render the experience section', () => {
    render(<ExperienceSection isFirstVisit={false} />);
    expect(screen.getByRole('heading', { name: /experiência/i })).toBeInTheDocument();
  });

  it('should render Briefcase icon', () => {
    render(<ExperienceSection isFirstVisit={false} />);
    const section = screen.getByRole('heading', { name: /experiência/i }).closest('section');
    expect(section).toBeInTheDocument();
  });

  it('should render company names', () => {
    render(<ExperienceSection isFirstVisit={false} />);
    // Company names should be h4 elements
    const companyHeadings = document.querySelectorAll('h4');
    expect(companyHeadings.length).toBeGreaterThan(0);
  });

  it('should render timeline dots', () => {
    render(<ExperienceSection isFirstVisit={false} />);
    const dots = document.querySelectorAll('.rounded-full.bg-zinc-300');
    expect(dots.length).toBeGreaterThan(0);
  });

  it('should accept isFirstVisit prop', () => {
    const { rerender } = render(<ExperienceSection isFirstVisit={true} />);
    expect(screen.getByRole('heading', { name: /experiência/i })).toBeInTheDocument();
    
    rerender(<ExperienceSection isFirstVisit={false} />);
    expect(screen.getByRole('heading', { name: /experiência/i })).toBeInTheDocument();
  });
});
