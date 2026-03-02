import { component$ } from '@builder.io/qwik';
import { t } from '../../i18n';
import { createExperiences } from '../../models/experience';
import { AdSenseHorizontal } from '../AdSense/AdSenseHorizontal';

interface ExperienceSectionProps {
  lang: string;
}

export const ExperienceSection = component$<ExperienceSectionProps>(({ lang }) => {
  const experiences = createExperiences(lang, t);

  return (
    <>
      <section class="space-y-8">
        <div class="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800/60 pb-4 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-400 dark:text-zinc-500">
            <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
          <h3 class="text-xl font-medium text-zinc-900 dark:text-zinc-100 tracking-tight transition-colors">
            {t(lang, 'experience')}
          </h3>
        </div>

        <div class="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} class="relative">
              <div class="mb-5">
                <h4 class="text-lg font-medium text-zinc-900 dark:text-zinc-100 transition-colors">
                  {exp.company}
                </h4>
              </div>

              <div class="space-y-8 pl-5 border-l border-zinc-200 dark:border-zinc-800/60 ml-2 transition-colors">
                {exp.roles ? (
                  exp.roles.map((role, roleIdx) => (
                    <div key={roleIdx} class="relative">
                      <div class="absolute -left-[25px] top-2 w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700 ring-4 ring-zinc-50 dark:ring-[#0a0a0a] transition-colors" />
                      <div class="space-y-1.5">
                        <h5 class="font-medium text-zinc-800 dark:text-zinc-200 transition-colors">
                          {role.title}
                        </h5>
                        <div class="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-zinc-500 transition-colors">
                          <span>{role.type}</span>
                          <span>&middot;</span>
                          <span>{role.period}</span>
                          <span>&middot;</span>
                          <span>{role.duration}</span>
                        </div>
                        <p class="text-sm text-zinc-500 dark:text-zinc-400 pt-1.5 transition-colors">
                          {role.skills}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div class="relative">
                    <div class="absolute -left-[25px] top-2 w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700 ring-4 ring-zinc-50 dark:ring-[#0a0a0a] transition-colors" />
                    <div class="space-y-1.5">
                      <h5 class="font-medium text-zinc-800 dark:text-zinc-200 transition-colors">
                        {exp.role}
                      </h5>
                      <div class="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-zinc-500 transition-colors">
                        <span>{exp.type}</span>
                        <span>&middot;</span>
                        <span>{exp.period}</span>
                        <span>&middot;</span>
                        <span>{exp.duration}</span>
                      </div>
                      <p class="text-sm text-zinc-500 dark:text-zinc-400 pt-1.5 transition-colors">
                        {exp.skills}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <AdSenseHorizontal />
    </>
  );
});
