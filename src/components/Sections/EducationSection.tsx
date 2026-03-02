import { component$ } from '@builder.io/qwik';
import { t } from '../../i18n';
import { createEducation } from '../../models/experience';
import { AdSenseHorizontal } from '../AdSense/AdSenseHorizontal';

interface EducationSectionProps {
  lang: string;
}

export const EducationSection = component$<EducationSectionProps>(({ lang }) => {
  const education = createEducation(lang, t);

  return (
    <>
      <section class="space-y-8">
        <div class="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800/60 pb-4 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-400 dark:text-zinc-500">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
          <h3 class="text-xl font-medium text-zinc-900 dark:text-zinc-100 tracking-tight transition-colors">
            {t(lang, 'education')}
          </h3>
        </div>

        <div class="space-y-8">
          {education.map((edu, idx) => (
            <div key={idx} class="group">
              <h4 class="text-base font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors">
                {edu.institution}
              </h4>
              <div class="space-y-1 mt-1.5">
                <p class="text-zinc-600 dark:text-zinc-300 transition-colors">
                  {edu.degree}
                </p>
                <div class="flex items-center gap-2 text-sm text-zinc-500 transition-colors">
                  <span>{edu.period}</span>
                </div>
                <p class="text-sm text-zinc-500 dark:text-zinc-400 pt-1 transition-colors">
                  {edu.skills}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <AdSenseHorizontal />
    </>
  );
});
