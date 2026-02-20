"use client";

import { useState } from "react";
import type { Experience as ExperienceType } from "@/types";
import { ExperienceItem } from "./ExperienceItem";

type ExperienceProps = {
  experiences: ReadonlyArray<ExperienceType>;
};

export function Experience({ experiences }: ExperienceProps) {
  const top3 = experiences.slice(0, 3);
  const rest = experiences.slice(3);

  const [showAll, setShowAll] = useState(false);
  const [openIds, setOpenIds] = useState<Set<string>>(() => {
    // Open the top 3 highlighted ones, or just the very first
    const highlighted = top3
      .filter((exp) => exp.highlighted)
      .map((exp) => exp.id);
    return new Set(
      highlighted.length ? highlighted : top3.slice(0, 1).map((e) => e.id),
    );
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

  const visible = showAll ? experiences : top3;

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
          Experiencia
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-10">
          Mi trayectoria profesional construyendo productos y liderando equipos.
        </p>

        <div>
          {visible.map((exp) => (
            <ExperienceItem
              key={exp.id}
              experience={exp}
              isOpen={openIds.has(exp.id)}
              onToggle={() => toggleItem(exp.id)}
            />
          ))}
        </div>

        {rest.length > 0 && (
          <button
            onClick={() => setShowAll((v) => !v)}
            className="mt-6 text-xs text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors underline underline-offset-2"
          >
            {showAll ? "Ver menos" : `Ver ${rest.length} más`}
          </button>
        )}
      </div>
    </section>
  );
}
