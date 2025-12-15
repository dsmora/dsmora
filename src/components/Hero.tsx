import { SiteConfig } from "@/types";
import { ScrollButton } from "./ScrollButton";

type HeroProps = {
  siteConfig: SiteConfig;
};

export function Hero({ siteConfig }: HeroProps) {
  const [firstName, secondName, ...lastNames] = siteConfig.name.split(" ");
  const displayName = `${firstName} ${secondName}\n${lastNames.join(" ")}`;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 whitespace-pre-line bg-clip-text text-transparent bg-linear-to-r from-indigo-600 via-sky-500 to-emerald-400">
          {displayName}
        </h1>
        <p className="text-2xl md:text-3xl text-zinc-600 dark:text-zinc-300 mb-4">
          {siteConfig.title}
        </p>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-xl mx-auto">
          {siteConfig.description}
        </p>
        <ScrollButton
          target="contact"
          className="inline-flex items-center gap-3 px-6 py-3 bg-linear-to-r from-indigo-600 to-sky-500 text-white rounded-full font-medium shadow-lg hover:scale-105 transform transition"
        >
          Get in Touch
        </ScrollButton>
      </div>
    </section>
  );
}
