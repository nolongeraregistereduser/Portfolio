
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
// PROJECTS
// ============================================
export const PROJECTS: Project[] = [
  {
    title: "Lejob.ma (DEMO VIDEO)",
    description: "Job board & recruitment marketplace connecting employers and candidates — focused on the Moroccan market.",
    fullDescription: "Lejob.ma is a job board / recruitment marketplace built to connect employers and candidates — focused on the Moroccan market and similar francophone/north-african audiences. It combines a modern Laravel backend with a Vite + React frontend to deliver fast, interactive candidate and employer experiences. The platform helps companies post jobs, filter and shortlist candidates, and manage applicants. Candidates can create profiles, upload CVs, search and apply for jobs, and receive email updates. The platform includes admin tools to moderate content and manage listings.",
    tags: ["Recruitment", "Job Board", "Marketplace"],
    techStack: ["Laravel 11", "React", "Vite", "TailwindCSS", "MySQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
    textLogo: "Lejob.ma",
    github: "https://github.com/nolongeraregistereduser/Lejob.ma",
    demoVideo: "https://drive.google.com/file/d/1WRyc3opysXJcvUouFKZhf7QUimwRxIFR/preview",
    features: [
      "Job listings with categories and geographic locations",
      "Employer dashboard for creating/updating job ads",
      "Candidate registration/profile and CV upload",
      "Search and filtering (title, company, category, location)",
      "Email notifications (application confirmations, interview invites)",
      "Admin panel for moderation and analytics",
      "Foundations for payments / featured listings via Stripe"
    ]
  },
  {
    title: "SalamanCare (DEMO VIDEO) ",
    description: "A lightweight MVP connecting caregivers with patients through a simple, accessible mobile-first experience.",
    fullDescription: "SALAMANCARE is a lightweight MVP that connects caregivers with patients (especially immobile/bedridden patients) through a simple, accessible mobile-first experience. The app focuses on quick alerts, medication coordination, and a caregiver hub for managing patient needs. It provides a single-tap, low-friction way for patients with limited mobility to request help or notify caregivers, while giving caregivers a compact dashboard to receive alerts, manage medications, and track adherence. Built to be bilingual-ready, accessible, and offline-friendly.",
    tags: ["Healthcare", "Mobile App", "MVP"],
    techStack: ["React Native", "Expo", "TypeScript", "Firebase"],
    image: "/images/salamancare-logo.png",
    logo: "/images/salamancare-logo.png",
    github: "https://github.com/nolongeraregistereduser/SALAMANCARE",
    demoVideo: "https://drive.google.com/file/d/1aOl-q6iDEiT4eyBiRD7C7Wz-lF2hnY-R/preview",
    features: [
      "One-tap bell for help (configurable quick actions)",
      "Pre-filled quick messages and customizable buttons",
      "Bilingual UI support (Arabic / English)",
      "Offline-first queueing of alerts",
      "Large, accessible UI for limited mobility",
      "Real-time alert stream via Firebase",
      "Medication manager and schedules"
    ]
  },
  {
    title: "PageForge AI ( Landing Page Builder - NO-CODE ) (3 DEMOS)",
    description: "Build stunning landing pages in minutes with AI-powered design. Drag, drop, generate — launch faster than ever.",
    fullDescription: "PageForge is a revolutionary no-code landing page builder powered by GrapeJS and artificial intelligence. Stop wrestling with code — just describe your vision, and watch AI craft pixel-perfect landing pages instantly. With an intuitive drag-and-drop interface, 50+ professionally designed templates, and smart AI that understands your brand, you can go from idea to live page in under 10 minutes. Perfect for startups, marketers, and agencies who need to ship fast without sacrificing quality.",
    tags: ["No-Code", "AI-Powered", "Page Builder"],
    techStack: ["GrapeJS", "React", "Node.js", "OpenAI API", "TailwindCSS", "MongoDB"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    textLogo: "PageForge AI Powered (NO-CODE)",
    demoVideos: [
      { title: "AI Page Generation", url: "https://drive.google.com/file/d/1-i26Cp9aa-r_8KeZjxBimVhPy7gAsllS/preview" },
      { title: "Drag & Drop Editor", url: "https://drive.google.com/file/d/1NRmlrDY5H0Hs0kqz6DyYN8mno4B33zIh/preview" },
      { title: "Template Library", url: "https://drive.google.com/file/d/1BzEz2wJTQkAmaxthOYo3MSJ5svttw7UB/preview" }
    ],
    features: [
      "AI-powered page generation from text prompts",
      "Drag-and-drop visual editor with GrapeJS",
      "50+ responsive, conversion-optimized templates",
      "Real-time collaboration for teams",
      "One-click publish to custom domains",
      "Built-in analytics and A/B testing",
      "SEO optimization tools included",
      "Export clean HTML/CSS code anytime"
    ]
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
