import Link from "next/link";
import { SiteConfig } from "@/types";
import { NavLinks } from "./NavLinks";

type HeaderProps = {
  siteConfig: SiteConfig;
};

export function Header({ siteConfig }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-zinc-100 dark:border-zinc-900">
      <nav className="max-w-6xl mx-auto h-14 flex items-center justify-between px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-white"
        >
          {siteConfig.name}
        </Link>

        <NavLinks />
      </nav>
    </header>
  );
}
