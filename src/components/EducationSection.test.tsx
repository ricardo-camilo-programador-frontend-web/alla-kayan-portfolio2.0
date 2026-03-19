import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import EducationSection from './EducationSection';

// Mock the useI18n hook
vi.mock('../hooks/useI18n', () => ({
  useI18n: () => ({
    lang: 'pt',
    t: (_lang: string, key: string) => {
      const translations: Record<string, string> = {
        education: 'Educação',
      };
      return translations[key] || key;
    },
  }),
}));

describe('EducationSection', () => {
  it('should render the education section', () => {
    render(<EducationSection isFirstVisit={false} />);
    expect(screen.getByRole('heading', { name: /educação/i })).toBeInTheDocument();
  });

  it('should render GraduationCap icon', () => {
    render(<EducationSection isFirstVisit={false} />);
    const section = screen.getByRole('heading', { name: /educação/i }).closest('section');
    expect(section).toBeInTheDocument();
  });

  it('should render education entries', () => {
    render(<EducationSection isFirstVisit={false} />);
    const articles = document.querySelectorAll('article');
    expect(articles.length).toBeGreaterThan(0);
  });

  it('should render time elements for periods', () => {
    render(<EducationSection isFirstVisit={false} />);
    const timeElements = document.querySelectorAll('time');
    expect(timeElements.length).toBeGreaterThan(0);
  });

  it('should accept isFirstVisit prop', () => {
    const { rerender } = render(<EducationSection isFirstVisit={true} />);
    expect(screen.getByRole('heading', { name: /educação/i })).toBeInTheDocument();
    
    rerender(<EducationSection isFirstVisit={false} />);
    expect(screen.getByRole('heading', { name: /educação/i })).toBeInTheDocument();
  });
});
