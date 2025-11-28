'use client';

import { scrollTo } from '@/utils';

const navItems = [
  { label: 'Skills', target: 'skills' },
  { label: 'Experience', target: 'experience' },
  { label: 'Contact', target: 'contact' },
] as const;

export function NavLinks() {
  return (
    <ul className="flex items-center gap-8">
      {navItems.map(({ label, target }) => (
        <li key={target}>
          <button
            onClick={() => scrollTo(target)}
            className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
}
