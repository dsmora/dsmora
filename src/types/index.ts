export type Skill = {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

export type Experience = {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: ReadonlyArray<string>;
  highlighted?: boolean;
}

export type SocialLink = {
  name: string;
  url: string;
  icon: string;
}

export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  email: string;
  socialLinks: ReadonlyArray<SocialLink>;
}
