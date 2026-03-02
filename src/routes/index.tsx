import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { useLanguage } from '~/composables/useLanguage';
import { useFirstVisit } from '~/composables/useFirstVisit';
import { t } from '~/i18n';
import { HeroSection } from '~/components/Sections/HeroSection';
import { ExperienceSection } from '~/components/Sections/ExperienceSection';
import { EducationSection } from '~/components/Sections/EducationSection';
import { SkillsSection } from '~/components/Sections/SkillsSection';
import { Footer } from '~/components/Sections/Footer';
import { SocialLinks } from '~/components/Social/SocialLinks';
import { AdSenseHorizontal } from '~/components/AdSense/AdSenseHorizontal';

export default component$(() => {
  const { lang } = useLanguage();
  const { isFirstVisit } = useFirstVisit();

  return (
    <>
      <HeroSection lang={lang.value} isFirstVisit={isFirstVisit.value} />

      <AdSenseHorizontal />

      <ExperienceSection lang={lang.value} />

      <EducationSection lang={lang.value} />

      <SkillsSection lang={lang.value} />

      <Footer lang={lang.value} />

      <div class="flex flex-wrap items-center gap-4 pt-2">
        <SocialLinks />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Allan Kayan | Software Engineer',
  meta: [
    {
      name: 'description',
      content: 'Portfólio de Allan Kayan, Software Engineer focado em backend. Experiência com Ruby on Rails, Flutter, PHP, Laravel, React.js e Next.js.',
    },
    {
      name: 'keywords',
      content: 'Allan Kayan, Software Engineer, Backend Developer, Ruby on Rails, Flutter, PHP, Laravel, React.js, Next.js, Desenvolvedor Backend',
    },
    {
      name: 'author',
      content: 'Allan Kayan',
    },
    {
      property: 'og:title',
      content: 'Allan Kayan | Software Engineer',
    },
    {
      property: 'og:description',
      content: 'Portfólio de Allan Kayan, Software Engineer focado em backend.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ],
};
