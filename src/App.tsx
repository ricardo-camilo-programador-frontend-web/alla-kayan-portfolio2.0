import { lazy, Suspense, useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { useI18n } from './hooks/useI18n';
import HeroSection from './components/HeroSection';
import LanguageSelector from './components/LanguageSelector';

const ExperienceSection = lazy(() => import('./components/ExperienceSection'));
const EducationSection = lazy(() => import('./components/EducationSection'));
const SkillsSection = lazy(() => import('./components/SkillsSection'));
const Footer = lazy(() => import('./components/Footer'));

const languages = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文 (Mandarin)' },
  { code: 'hi', name: 'हिन्दी (Hindi)' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'ar', name: 'العربية (Arabic)' },
  { code: 'bn', name: 'বাংলা (Bengali)' },
  { code: 'ru', name: 'Русский (Russian)' },
  { code: 'pt', name: 'Português' },
  { code: 'ur', name: 'اردو (Urdu)' },
  { code: 'id', name: 'Bahasa Indonesia' },
  { code: 'de', name: 'Deutsch' },
  { code: 'ja', name: '日本語 (Japanese)' },
  { code: 'mr', name: 'मराठी (Marathi)' },
  { code: 'te', name: 'తెలుగు (Telugu)' },
  { code: 'tr', name: 'Türkçe' },
  { code: 'ta', name: 'தமிழ் (Tamil)' },
  { code: 'vi', name: 'Tiếng Việt' },
  { code: 'ko', name: '한국어 (Korean)' },
  { code: 'it', name: 'Italiano' },
];

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'dark' ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="w-4 h-4" aria-hidden="true" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="w-4 h-4" aria-hidden="true" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

function AppContent() {
  const { lang, t } = useI18n();
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (hasVisited) {
      setIsFirstVisit(false);
    } else {
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const structuredData = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Allan Kayan',
    jobTitle: 'Software Engineer',
    email: 'allankayan@hotmail.com',
    url: 'https://allankayan.cv/',
    sameAs: [
      'https://github.com/allankayan',
      'https://www.linkedin.com/in/allankayan/',
      'https://x.com/kayan_allan',
    ],
    knowsAbout: [
      'Backend Development',
      'Software Engineering',
      'Node.js',
      'TypeScript',
      'Python',
    ],
  }), []);

  const currentYear = new Date().getFullYear();
  const baseUrl = 'https://allankayan.cv';

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>Allan Kayan - Software Engineer</title>
        <meta name="description" content="Allan Kayan - Software Engineer especializado em backend. Construindo soluções incríveis na @shiddotech, @onnechat e @oliquo." />
        <meta name="keywords" content="Allan Kayan, Software Engineer, Backend Developer, Node.js, TypeScript, Python, Brasil" />
        <meta name="author" content="Allan Kayan" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:title" content="Allan Kayan - Software Engineer" />
        <meta property="og:description" content="Software Engineer especializado em backend. Construindo soluções incríveis." />
        <meta property="og:locale" content={lang} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@kayan_allan" />
        <meta name="twitter:title" content="Allan Kayan - Software Engineer" />
        <meta name="twitter:description" content="Software Engineer especializado em backend." />
        
        <link rel="canonical" href={baseUrl} />
        <link rel="alternate" hrefLang="x-default" href={baseUrl} />
        {languages.map((l) => (
          <link key={l.code} rel="alternate" hrefLang={l.code} href={`${baseUrl}/?lang=${l.code}`} />
        ))}
        
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-zinc-50 dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
        <header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-50/80 dark:bg-[#0a0a0a]/80 border-b border-zinc-200 dark:border-zinc-800/60 transition-colors">
          <nav className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="text-lg font-medium text-zinc-900 dark:text-zinc-100 hover:text-black dark:hover:text-white transition-colors" aria-label="Ir para o início">
              Allan Kayan
            </a>
            <div className="flex items-center gap-3">
              <LanguageSelector />
              <ThemeToggle />
            </div>
          </nav>
        </header>

        <main className="max-w-3xl mx-auto px-6 py-12 space-y-16">
          <HeroSection isFirstVisit={isFirstVisit} />

          <Suspense fallback={<div className="h-32 animate-pulse bg-zinc-200 dark:bg-zinc-800 rounded-lg" />}>
            <ExperienceSection isFirstVisit={isFirstVisit} />
          </Suspense>

          <Suspense fallback={<div className="h-32 animate-pulse bg-zinc-200 dark:bg-zinc-800 rounded-lg" />}>
            <EducationSection isFirstVisit={isFirstVisit} />
          </Suspense>

          <Suspense fallback={<div className="h-32 animate-pulse bg-zinc-200 dark:bg-zinc-800 rounded-lg" />}>
            <SkillsSection isFirstVisit={isFirstVisit} />
          </Suspense>
        </main>

        <footer className="max-w-3xl mx-auto px-6">
          <Suspense fallback={<div className="h-16 animate-pulse bg-zinc-200 dark:bg-zinc-800 rounded-lg" />}>
            <Footer isFirstVisit={isFirstVisit} />
          </Suspense>
        </footer>

        <div className="text-center py-4 text-xs text-zinc-400 dark:text-zinc-600">
          © {currentYear} Allan Kayan. {t('rights')}
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
