"use client";

import type { Experience } from "@/types";

function formatDate(dateStr: string) {
  const [year, month] = dateStr.split("-");
  if (!year) return dateStr;
  if (!month) return year;
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString("es-ES", { month: "short", year: "numeric" });
}

type ExperienceItemProps = {
  experience: Experience;
  isOpen: boolean;
  onToggle: () => void;
};

export function ExperienceItem({
  experience,
  isOpen,
  onToggle,
}: ExperienceItemProps) {
  return (
    <article className="border-l-2 border-zinc-200 dark:border-zinc-800 pl-5 pb-7 last:pb-0 relative">
      {/* Timeline dot */}
      <div className="absolute -left-[5px] top-[5px] w-2.5 h-2.5 rounded-full bg-zinc-900 dark:bg-white ring-2 ring-white dark:ring-black" />

      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full text-left group"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {experience.role}
            </h3>
            <span className="text-zinc-300 dark:text-zinc-600 text-xs">·</span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              {experience.company}
            </span>
          </div>
          <span className="text-xs text-zinc-400 dark:text-zinc-500 whitespace-nowrap">
            {formatDate(experience.startDate)} —{" "}
            {experience.endDate ? formatDate(experience.endDate) : "Presente"}
          </span>
        </div>
      </button>

      {isOpen && (
        <div className="mt-3 space-y-2">
          {experience.description && (
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
              {experience.description}
            </p>
          )}
          {experience.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </article>
  );
}
