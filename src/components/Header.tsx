import Link from "next/link";
import { SiteConfig } from "@/types";
import { NavLinks } from "./NavLinks";

type HeaderProps = {
  siteConfig: SiteConfig;
};

export function Header({ siteConfig }: HeaderProps) {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <nav className="max-w-6xl mx-auto bg-white/50 dark:bg-zinc-950/50 glass-card border border-zinc-100/10 dark:border-zinc-800/30 rounded-full h-14 flex items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white"
        >
          {siteConfig.name}
        </Link>

        <NavLinks />
      </nav>
    </header>
  );
}
