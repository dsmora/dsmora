import Link from 'next/link';
import { SiteConfig } from '@/types';
import { NavLinks } from './NavLinks';

type HeaderProps = {
  siteConfig: SiteConfig;
};

export function Header({ siteConfig }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-zinc-900 dark:text-white">
          {siteConfig.name}
        </Link>
        
        <NavLinks />
      </nav>
    </header>
  );
}
