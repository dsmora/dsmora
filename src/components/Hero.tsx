import { SiteConfig } from '@/types';
import { ScrollButton } from './ScrollButton';

type HeroProps = {
  siteConfig: SiteConfig;
};

export function Hero({ siteConfig }: HeroProps) {
  const [firstName, secondName, ...lastNames] = siteConfig.name.split(' ');
  const displayName = `${firstName} ${secondName}\n${lastNames.join(' ')}`;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white mb-6 whitespace-pre-line">
          {displayName}
        </h1>
        <p className="text-2xl md:text-3xl text-zinc-600 dark:text-zinc-400 mb-4">
          {siteConfig.title}
        </p>
        <p className="text-lg text-zinc-500 dark:text-zinc-500 mb-8 max-w-xl mx-auto">
          {siteConfig.description}
        </p>
        <ScrollButton
          target="contact"
          className="px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
        >
          Get in Touch
        </ScrollButton>
      </div>
    </section>
  );
}
