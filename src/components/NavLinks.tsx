"use client";

import { scrollTo } from "@/utils";

const navItems = [
  { label: "Skills", target: "skills" },
  { label: "Experience", target: "experience" },
  { label: "Contact", target: "contact" },
] as const;

export function NavLinks() {
  return (
    <ul className="flex items-center gap-4">
      {navItems.map(({ label, target }) => (
        <li key={target}>
          <button
            onClick={() => scrollTo(target)}
            className="px-3 py-1 text-sm rounded-full bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-700 dark:text-zinc-300"
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
}
