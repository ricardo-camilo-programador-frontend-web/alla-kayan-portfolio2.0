import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';

// Mock the useI18n hook
vi.mock('../hooks/useI18n', () => ({
  useI18n: () => ({
    lang: 'pt',
    t: (_lang: string, key: string) => {
      const translations: Record<string, string> = {
        role: 'Software Engineer',
        building: 'Building at',
        and: 'and',
        bio: 'Passionate about building scalable systems.',
      };
      return translations[key] || key;
    },
  }),
}));

describe('HeroSection', () => {
  it('should render the name "Allan Kayan"', () => {
    render(<HeroSection isFirstVisit={false} />);
    expect(screen.getByRole('heading', { name: /allan kayan/i, level: 1 })).toBeInTheDocument();
  });

  it('should render the role heading', () => {
    render(<HeroSection isFirstVisit={false} />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('should render email link', () => {
    render(<HeroSection isFirstVisit={false} />);
    const emailLink = screen.getByRole('link', { name: /enviar email/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:allankayan@hotmail.com');
  });

  it('should render social links', () => {
    render(<HeroSection isFirstVisit={false} />);
    
    expect(screen.getByRole('link', { name: /ver currículo/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /ver perfil no github/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /ver perfil no linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /ver perfil no x \(twitter\)/i })).toBeInTheDocument();
  });

  it('should render company links', () => {
    render(<HeroSection isFirstVisit={false} />);
    
    expect(screen.getByLabelText(/company @shiddotech/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/company @onnechat/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/company @oliquo/i)).toBeInTheDocument();
  });

  it('should accept isFirstVisit prop', () => {
    const { rerender } = render(<HeroSection isFirstVisit={true} />);
    expect(screen.getByRole('heading', { name: /allan kayan/i })).toBeInTheDocument();
    
    rerender(<HeroSection isFirstVisit={false} />);
    expect(screen.getByRole('heading', { name: /allan kayan/i })).toBeInTheDocument();
  });
});
