
export interface DemoVideo {
  title: string;
  url: string;
}

export type ProjectCategory = 'software' | 'devops' | 'it';

export interface Project {
  id: string;
  title: string;
  /** Short description shown on the card (maps to the prompt's `shortDescription`). */
  description: string;
  fullDescription?: string;
  /** Core pillar this project belongs to — drives the Featured Work filter tabs. */
  category: ProjectCategory;
  tags: string[];
  image: string;
  logo?: string;
  textLogo?: string;
  /** Tech stack badges (maps to the prompt's `stack`). */
  techStack: string[];
  /** The problem this project set out to solve. */
  challenge?: string;
  /** How the solution was architected. */
  architecture?: string;
  /** Live site URL (maps to the prompt's `liveUrl`). */
  link?: string;
  /** Source repository (maps to the prompt's `githubUrl`). */
  github?: string;
  /** Single embedded demo video (maps to the prompt's `demoVideoUrl`). */
  demoVideo?: string;
  demoVideos?: DemoVideo[];
  features?: string[];
  screenshots?: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  technologies?: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  location?: string;
  description: string;
}

export interface Skill {
  category: string;
  /** Short tagline describing the pillar. */
  subtitle?: string;
  /** Icon key rendered by the Skills component (e.g. "code", "cloud", "shield"). */
  icon?: string;
  /** Accent color key: "emerald" | "blue" | "purple". */
  accent?: string;
  items: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
