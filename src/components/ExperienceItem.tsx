"use client";

import type { Experience } from "@/types";

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
    <article className="glass-card rounded-lg p-4 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-3 h-3 rounded-full bg-linear-to-r from-indigo-500 to-sky-400" />
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              {experience.startDate} — {experience.endDate || "Present"}
            </span>
          </div>

          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
            {experience.role}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-3">
            {experience.company}
          </p>

          <div className="text-zinc-600 dark:text-zinc-400 mb-3">
            {experience.description}
          </div>

          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="shrink-0">
          <button
            onClick={onToggle}
            className="p-2 rounded-md bg-zinc-100 dark:bg-zinc-800 hover:scale-105 transition"
            aria-expanded={isOpen}
            aria-label="Toggle details"
          >
            <svg
              className={`w-4 h-4 transform transition-transform ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 8l5 5 5-5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 border-t border-zinc-100 dark:border-zinc-800 pt-4">
          <div className="text-zinc-600 dark:text-zinc-400">
            {experience.longDescription || experience.description}
          </div>
        </div>
      )}
    </article>
  );
}
