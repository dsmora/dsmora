import { SiteConfig } from "@/types";

type ContactProps = {
  siteConfig: SiteConfig;
};

export function Contact({ siteConfig }: ContactProps) {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card rounded-xl p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-3 px-6 py-3 bg-linear-to-r from-indigo-600 to-sky-500 text-white rounded-full font-semibold text-lg shadow-md hover:scale-105 transition"
          >
            {siteConfig.email}
          </a>

          <div className="flex justify-center gap-6 mt-8">
            {siteConfig.socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                aria-label={link.name}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
