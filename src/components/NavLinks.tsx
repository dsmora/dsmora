"use client";

import { scrollTo } from "@/utils";

const navItems = [
  { label: "Skills", target: "skills" },
  { label: "Experiencia", target: "experience" },
  { label: "Contacto", target: "contact" },
] as const;

export function NavLinks() {
  return (
    <ul className="flex items-center gap-1">
      {navItems.map(({ label, target }) => (
        <li key={target}>
          <button
            onClick={() => scrollTo(target)}
            className="px-3 py-1.5 text-sm rounded text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
}
