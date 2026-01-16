
import { Project, Experience, Education, Skill, SocialLink } from './types';

// ============================================
// PERSONAL INFO
// ============================================
export const PERSONAL_INFO = {
  name: "Mohamed Zouhairi",
  title: "Full Stack Developer",
  subtitle: "Java Spring Boot | PHP Laravel",
  email: "mohamedzouhairi023@gmail.com",
  phone: "+212 650668795",
  location: "Rabat, Morocco",
  github: "https://github.com/nolongeraregistereduser",
  linkedin: "https://linkedin.com/in/uid0zouhairi",
  resumeUrl: "/docs/MOHAMED-ZOUHAIRI-CV-EN.pdf",
  bio: "Full Stack Developer with strong backend expertise in Java Spring Boot and PHP Laravel, specialized in building secure REST APIs, Spring Security, JWT authentication, and MVC architecture. Solid experience with relational databases (MySQL, PostgreSQL), Linux system administration, and network fundamentals. Agile mindset (Scrum), strong problem-solving skills, and performance-oriented development approach."
};

// ============================================
// SOCIAL LINKS
// ============================================
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/nolongeraregistereduser",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/uid0zouhairi",
    icon: "linkedin"
  },
  {
    name: "Email",
    url: "mailto:mohamedzouhairi023@gmail.com",
    icon: "email"
  }
];

// ============================================
// SKILLS
// ============================================
export const SKILLS: Skill[] = [
  {
    category: "Backend Development",
    items: ["Spring Boot", "Java EE (Servlets, JSP)", "Laravel", "REST API", "MVC Architecture"]
  },
  {
    category: "Frontend Development",
    items: ["Angular", "React", "JavaScript (Vanilla)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "SQLite", "Relational Schema Design", "Complex SQL Queries"]
  },
  {
    category: "Networking & Systems",
    items: ["Linux (Ubuntu, Red Hat)", "LAN/DNS/HTTP/SMTP", "VPN", "Firewall"]
  },
  {
    category: "Project Management",
    items: ["Agile/Scrum", "UML", "Merise", "Git", "Postman"]
  }
];

// ============================================
// EXPERIENCE
// ============================================
export const EXPERIENCES: Experience[] = [
  {
    title: "Full Stack Developer - PMIS Application",
    company: "NETMAR",
    period: "May 2025 - July 2025",
    location: "Rabat",
    description: "Contributed to the complete full stack development cycle of a Port Management Information System for maritime port call management: business requirements analysis, backend architecture design with PHP Laravel, REST API development for maritime data management, MySQL database implementation and production deployment. Collaboration in Agile methodology with the technical team and project stakeholders.",
    technologies: ["PHP Laravel", "MySQL", "REST API", "Agile"]
  },
  {
    title: "CMS Website Developer",
    company: "Freelance",
    period: "April 2022 - January 2024",
    location: "Rabat",
    description: "Development and customization of professional websites with CMS (WordPress, Drupal, Joomla): custom theme creation, plugin integration and technical SEO optimization (meta tags, XML sitemap, PageSpeed). E-commerce integration (WooCommerce, PrestaShop), site migration and technical maintenance with security update management.",
    technologies: ["WordPress", "Drupal", "Joomla", "WooCommerce", "SEO"]
  },
  {
    title: "End-of-Study Internship",
    company: "ESTS Salé",
    period: "April 2021 - June 2021",
    location: "Salé",
    description: "Development of a web platform (e-learning). Design and implementation of the network platform for the e-learning system.",
    technologies: ["Web Development", "Network Infrastructure"]
  }
];

// ============================================
// EDUCATION
// ============================================
export const EDUCATION: Education[] = [
  {
    degree: "Application Designer and Developer",
    school: "YouCode / Simplon",
    period: "2024 - 2026",
    description: "Professional training focused on full stack development, agile project management and solving real-world problems."
  },
  {
    degree: "Associate Degree in Network & Systems Administration",
    school: "École Supérieure de Technologie de Salé",
    period: "2019 - 2021",
    location: "Salé",
    description: "Training in network infrastructure management, IT security and systems administration."
  }
];

// ============================================
// PROJECTS (Placeholders - Update later)
// ============================================
export const PROJECTS: Project[] = [
  {
    title: "SmartShop API",
    description: "REST API for B2B distributor managing 650 clients. Development of automatic loyalty system, split payment management with multiple payment methods and transaction traceability. Security implementation with Spring Security, JWT authentication and role-based access control.",
    tags: ["B2B", "REST API", "Enterprise"],
    techStack: ["Spring Boot", "Spring Security", "JWT", "MySQL"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    github: "#"
  },
  {
    title: "Lejob.ma",
    description: "Platform connecting recruiters and candidates with ATS-compliant CV generator. React frontend and Laravel backend development with authentication system, job listing management and CV templates optimized for tracking systems.",
    tags: ["Recruitment", "Web App", "SaaS"],
    techStack: ["React", "Laravel", "MySQL", "REST API"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
    link: "#",
    github: "#"
  },
  {
    title: "MedEx TeleExpertise",
    description: "Web application for remote medical collaboration between nurses, general practitioners and specialists. Secure patient record management, expertise request system and consultation tracking. MVC architecture with medical role management.",
    tags: ["Healthcare", "Telemedecine", "Security"],
    techStack: ["Java EE", "Servlets", "JSP", "MySQL"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    github: "#"
  },
  {
    title: "Project Coming Soon",
    description: "A new exciting project is in the works. Stay tuned for updates on innovative solutions combining cutting-edge technologies and creative problem-solving.",
    tags: ["Coming Soon", "In Development"],
    techStack: ["TBD"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop"
  }
];

// ============================================
// LANGUAGES
// ============================================
export const LANGUAGES = [
  { name: "French", level: "Proficient" },
  { name: "English", level: "Intermediate" },
  { name: "Arabic", level: "Native" }
];

// ============================================
// INTERESTS
// ============================================
export const INTERESTS = [
  "Technology & Innovation",
  "Cybersecurity",
  "Artificial Intelligence",
  "Football",
  "Basketball",
  "Gaming"
];
