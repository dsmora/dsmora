import { Header, Hero, Skills, Experience, Contact, Footer } from '@/components';
import { getExperiences, getSiteConfig, getSkills } from '@/lib/notion';

export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  const [siteConfig, skills, experiences] = await Promise.all([
    getSiteConfig(),
    getSkills(),
    getExperiences(),
  ]);

  return (
    <>
      <Header siteConfig={siteConfig} />
      <main>
        <Hero siteConfig={siteConfig} />
        <Skills skills={skills} />
        <Experience experiences={experiences} />
        <Contact siteConfig={siteConfig} />
      </main>
      <Footer siteConfig={siteConfig} />
    </>
  );
}
