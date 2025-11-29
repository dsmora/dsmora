import { SiteConfig } from '@/types';

type ContactProps = {
  siteConfig: SiteConfig;
};

export function Contact({ siteConfig }: ContactProps) {
  return (
    <section id="contact" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
          Let&apos;s Work Together
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-xl mx-auto">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-block px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-medium text-lg hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
        >
          {siteConfig.email}
        </a>

        <div className="flex justify-center gap-6 mt-12">
          {siteConfig.socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
              aria-label={link.name}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
