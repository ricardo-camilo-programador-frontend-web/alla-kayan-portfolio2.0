import { component$ } from '@builder.io/qwik';
import { t } from '../../i18n';
import { createSkills } from '../../models/experience';
import { AdSenseHorizontal } from '../AdSense/AdSenseHorizontal';

interface SkillsSectionProps {
  lang: string;
}

export const SkillsSection = component$<SkillsSectionProps>(({ lang }) => {
  const skills = createSkills(lang, t);

  return (
    <>
      <section class="space-y-8">
        <div class="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800/60 pb-4 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-400 dark:text-zinc-500">
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
          </svg>
          <h3 class="text-xl font-medium text-zinc-900 dark:text-zinc-100 tracking-tight transition-colors">
            {t(lang, 'skills')}
          </h3>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              class="p-5 rounded-2xl bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/50 hover:border-zinc-300 dark:hover:border-zinc-700/80 transition-colors"
            >
              <h4 class="font-medium text-zinc-900 dark:text-zinc-100 mb-2 transition-colors">
                {skill.name}
              </h4>
              <p class="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed transition-colors">
                {skill.details}
              </p>
            </div>
          ))}
        </div>
      </section>
      <AdSenseHorizontal />
    </>
  );
});
