import { lazy, Suspense, useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { useI18n } from './hooks/useI18n';
import { languages } from './i18n';
import HeroSection from './components/HeroSection';
import LanguageSelector from './components/LanguageSelector';

const ExperienceSection = lazy(() => import('./components/ExperienceSection'));
const EducationSection = lazy(() => import('./components/EducationSection'));
const SkillsSection = lazy(() => import('./components/SkillsSection'));
const Footer = lazy(() => import('./components/Footer'));

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useI18n();

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={theme === 'dark' ? t('theme.light') : t('theme.dark')}
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
  const [isFirstVisit] = useState(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (!hasVisited) {
      sessionStorage.setItem('hasVisited', 'true');
      return true;
    }
    return false;
  });

  const structuredData = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Allan Kayan',
    givenName: 'Allan',
    familyName: 'Kayan',
    jobTitle: 'Software Engineer',
    description: t('meta.description'),
    email: 'allankayan@hotmail.com',
    url: 'https://allankayan.cv/',
    image: 'https://allankayan.cv/og-image.png',
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
      'Software Architecture',
      'API Development',
      'Database Design',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Universidade Federal',
    },
    workLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'BR',
      },
    },
  }), [t]);

  const currentYear = new Date().getFullYear();
  const baseUrl = 'https://allankayan.cv';

  const localeMap: Record<string, string> = {
    en: 'en_US',
    pt: 'pt_BR',
    es: 'es_ES',
    fr: 'fr_FR',
    de: 'de_DE',
    it: 'it_IT',
    zh: 'zh_CN',
    ja: 'ja_JP',
    ko: 'ko_KR',
    ar: 'ar_SA',
    ru: 'ru_RU',
    hi: 'hi_IN',
    bn: 'bn_BD',
    ur: 'ur_PK',
    id: 'id_ID',
    mr: 'mr_IN',
    te: 'te_IN',
    ta: 'ta_IN',
    tr: 'tr_TR',
    vi: 'vi_VN',
  };

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>Allan Kayan - Software Engineer</title>
        <meta name="description" content={t('meta.description')} />
        <meta name="keywords" content={t('meta.keywords')} />
        <meta name="author" content="Allan Kayan" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="theme-color" content="#18181b" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#fafafa" media="(prefers-color-scheme: light)" />
        <meta name="msapplication-TileColor" content="#18181b" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:title" content="Allan Kayan - Software Engineer" />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:locale" content={localeMap[lang] || 'en_US'} />
        <meta property="og:site_name" content="Allan Kayan Portfolio" />
        <meta property="og:image" content={`${baseUrl}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Allan Kayan - Software Engineer" />
        <meta property="profile:first_name" content="Allan" />
        <meta property="profile:last_name" content="Kayan" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kayan_allan" />
        <meta name="twitter:creator" content="@kayan_allan" />
        <meta name="twitter:title" content="Allan Kayan - Software Engineer" />
        <meta name="twitter:description" content={t('meta.description')} />
        <meta name="twitter:image" content={`${baseUrl}/og-image.png`} />
        <meta name="twitter:image:alt" content="Allan Kayan - Software Engineer" />
        
        {/* Canonical and Alternate Languages */}
        <link rel="canonical" href={baseUrl} />
        <link rel="alternate" hrefLang="x-default" href={baseUrl} />
        {languages.map((l) => (
          <link key={l.code} rel="alternate" hrefLang={l.code} href={`${baseUrl}/?lang=${l.code}`} />
        ))}
        
        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-zinc-50 dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
        <header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-50/80 dark:bg-[#0a0a0a]/80 border-b border-zinc-200 dark:border-zinc-800/60 transition-colors">
          <nav className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="text-lg font-medium text-zinc-900 dark:text-zinc-100 hover:text-black dark:hover:text-white transition-colors" aria-label={t('nav.home')}>
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
