'use client';

import type { Experience } from '@/types';

type ExperienceItemProps = {
  experience: Experience;
  isOpen: boolean;
  onToggle: () => void;
};

export function ExperienceItem({ experience, isOpen, onToggle }: ExperienceItemProps) {
  return (
    <article className="relative pl-8 border-l-2 border-zinc-200 dark:border-zinc-800">
      <div className="absolute -left-2 top-0 w-4 h-4 bg-zinc-900 dark:bg-white rounded-full" />
      
      <button
        onClick={onToggle}
        className="w-full text-left focus:outline-none group"
        aria-expanded={isOpen}
      >
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-zinc-500 dark:text-zinc-500">
              {experience.startDate} - {experience.endDate || 'Present'}
            </span>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
              {experience.role}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">{experience.company}</p>
          </div>
          <div className="relative w-6 h-6 flex items-center justify-center">
            <span
              className={`absolute w-4 h-0.5 bg-zinc-500 transition-transform duration-300 ${isOpen ? 'rotate-90 opacity-0' : ''}`}
            />
            <span
              className={`absolute h-4 w-0.5 bg-zinc-500 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
            />
          </div>
        </div>
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity,margin] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">{experience.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
