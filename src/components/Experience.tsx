'use client';

import { useState } from 'react';
import type { Experience as ExperienceType } from '@/types';
import { ExperienceItem } from './ExperienceItem';

type ExperienceProps = {
  experiences: ReadonlyArray<ExperienceType>;
};

export function Experience({ experiences }: ExperienceProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(() => {
    const highlighted = experiences.filter((exp) => exp.highlighted).map((exp) => exp.id);
    return new Set(highlighted);
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
          Experience
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl">
          My professional journey building products and leading teams.
        </p>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <ExperienceItem
              key={exp.id}
              experience={exp}
              isOpen={openIds.has(exp.id)}
              onToggle={() => toggleItem(exp.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
