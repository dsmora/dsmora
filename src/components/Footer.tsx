import { SiteConfig } from "@/types";

type FooterProps = {
  siteConfig: SiteConfig;
};

export function Footer({ siteConfig }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-zinc-600 dark:text-zinc-400 text-sm">
          © {currentYear} {siteConfig.name}. All rights reserved.
        </p>

        <div className="flex gap-4">
          {siteConfig.socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-md bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 transition text-sm text-zinc-600 dark:text-zinc-400"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
