import { SiteConfig } from "@/types";

type ContactProps = {
  siteConfig: SiteConfig;
};

export function Contact({ siteConfig }: ContactProps) {
  return (
    <section
      id="contact"
      className="py-24 px-6 border-t border-zinc-100 dark:border-zinc-900"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Trabajemos juntos
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mb-6 max-w-2xl mx-auto">
            Abierto a nuevas oportunidades y proyectos. No dudes en escribirme.
          </p>

          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-3 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded font-semibold text-base hover:opacity-80 transition"
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
