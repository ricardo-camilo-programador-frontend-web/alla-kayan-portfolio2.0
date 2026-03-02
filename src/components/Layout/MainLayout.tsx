import { component$, Slot } from '@builder.io/qwik';
import { ThemeToggle } from '../Controls/ThemeToggle';
import { LanguageSelector } from '../Controls/LanguageSelector';
import { SocialLinks } from '../Social/SocialLinks';
import { AdSenseVertical } from '../AdSense/AdSenseVertical';

export const MainLayout = component$(() => {
  return (
    <div class="min-h-screen bg-zinc-50 dark:bg-[#0a0a0a] text-zinc-600 dark:text-zinc-300 font-sans transition-colors duration-300">
      <div class="fixed top-4 right-4 z-50 flex items-center gap-3">
        <ThemeToggle />
        <LanguageSelector />
      </div>

      <div class="flex justify-center max-w-[1400px] mx-auto relative">
        <aside class="hidden xl:flex flex-col pt-24 px-4 w-[200px] items-end">
          <AdSenseVertical />
        </aside>

        <main class="w-full max-w-3xl px-6 py-16 md:py-24 space-y-24">
          <Slot />
        </main>

        <aside class="hidden xl:flex flex-col pt-24 px-4 w-[200px] items-start">
          <AdSenseVertical />
        </aside>
      </div>
    </div>
  );
});
