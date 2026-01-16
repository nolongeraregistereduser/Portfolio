
export interface Project {
  title: string;
  description: string;
  fullDescription?: string;
  tags: string[];
  image: string;
  logo?: string;
  techStack: string[];
  link?: string;
  github?: string;
  demoVideo?: string;
  features?: string[];
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
  items: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
