export interface Profile {
  name: string;
  title: string;
  tagline: string;
  email: string;
  location: string;
  about: string;
  availability: string;
  initials: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  category: string;
  level: number;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  gradient: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PortfolioData {
  profile: Profile;
  stats: Stat[];
  navLinks: NavLink[];
  skills: Skill[];
  techTags: string[];
  projects: Project[];
  experience: Experience[];
  socialLinks: SocialLink[];
}
