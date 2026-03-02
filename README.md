<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Allan Kayan Portfolio - Qwik

Portfólio desenvolvido com **Qwik 1.x** - O framework focado em performance instantânea e resumability.

## Features

- 🚀 **Qwik 1.x** - Resumability, lazy loading automático, zero hydration
- 🌐 **i18n** - 20 idiomas suportados
- 🎨 **Tema** - Dark/Light mode com persistência
- 📱 **PWA** - Service Worker, manifest, offline support
- 📊 **Analytics** - counter.dev integrado
- 📢 **AdSense** - Anúncios horizontais e verticais
- ⚡ **Performance** - Score 95+ no Lighthouse
- ♿ **Acessível** - ARIA labels, navegação por teclado

## Tech Stack

- **Framework:** Qwik 1.x + Qwik City
- **Estilização:** Tailwind CSS v4
- **TypeScript:** Tipagem completa
- **Build:** Vite
- **PWA:** Service Worker nativo

## Run Locally

**Prerequisites:** Node.js >= 20.0.0

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set the `GEMINI_API_KEY` in `.env.local` (if needed):
   ```bash
   GEMINI_API_KEY=your_api_key
   ```

3. Run the app:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build:
   ```bash
   npm run preview
   ```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | TypeScript type checking |

## Project Structure

```
src/
├── components/
│   ├── AdSense/
│   │   ├── AdSenseHorizontal.tsx
│   │   └── AdSenseVertical.tsx
│   ├── Controls/
│   │   ├── ThemeToggle.tsx
│   │   └── LanguageSelector.tsx
│   ├── Layout/
│   │   └── MainLayout.tsx
│   ├── Sections/
│   │   ├── HeroSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── SkillsSection.tsx
│   │   └── Footer.tsx
│   ├── Social/
│   │   └── SocialLinks.tsx
│   └── router-head/
│       └── router-head.tsx
├── composables/
│   ├── useTheme.ts
│   ├── useLanguage.ts
│   └── useFirstVisit.ts
├── constants/
│   └── index.ts
├── models/
│   └── experience.ts
├── routes/
│   ├── index.tsx
│   └── layout.tsx
├── types/
│   └── index.ts
├── global.css
├── i18n.ts
├── root.tsx
├── entry.dev.tsx
├── entry.ssr.tsx
├── entry.preview.tsx
└── service-worker.ts
```

## Supported Languages

English, 中文, हिन्दी, Español, Français, العربية, বাংলা, Русский, Português, اردو, Bahasa Indonesia, Deutsch, 日本語, मराठी, తెలుగు, Türkçe, தமிழ், Tiếng Việt, 한국어, Italiano

## Performance

| Metric | Score |
|--------|-------|
| Lighthouse Performance | ~95 |
| Initial JavaScript | < 1KB |
| Hydration | Zero |
| TTI | < 1s |

## License

MIT © Allan Kayan
