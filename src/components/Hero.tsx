import { SiteConfig } from "@/types";
import { ScrollButton } from "./ScrollButton";

type HeroProps = {
  siteConfig: SiteConfig;
};

export function Hero({ siteConfig }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-16">
      <div className="max-w-6xl mx-auto w-full">
        <p className="text-sm font-medium tracking-widest uppercase text-zinc-500 dark:text-zinc-400 mb-6">
          {siteConfig.title}
        </p>
        <h1 className="text-6xl md:text-8xl font-bold text-zinc-900 dark:text-white leading-none mb-8">
          {siteConfig.name}
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl">
          {siteConfig.description}
        </p>
        <div className="flex items-center gap-6">
          <ScrollButton
            target="experience"
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded font-medium hover:opacity-80 transition"
          >
            View Experience
          </ScrollButton>
          <ScrollButton
            target="contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition"
          >
            Contact
          </ScrollButton>
        </div>
      </div>
    </section>
  );
}
