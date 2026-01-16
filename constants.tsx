
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
  linkedin: "https://www.linkedin.com/in/nolongeraregistereduser/",
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
    url: "https://www.linkedin.com/in/nolongeraregistereduser/",
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
    period: "May 2024 - July 2024",
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
    degree: "DUT (Diplôme Universitaire de Technologie) - Network & Systems Administration",
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
  },
  {
    title: "Laly Mille — Art Education Platform (LIVE)",
    description: "Online platform for mixed media & art journaling courses. Browse, enroll, and track your creative learning journey.",
    fullDescription: "Lalymille is a beautifully crafted online education platform offering various mixed media and art journaling courses. The platform enables students to browse course catalogs, enroll in classes, and track their learning progress. As the frontend developer, I ensured a smooth, responsive user experience across all devices — from desktop to mobile. The platform integrates interactive learning tools, progress tracking features, a beautiful gallery showcase, and seamless navigation that reflects the artistic nature of the content.",
    tags: ["E-Learning", "Frontend", "Live Project"],
    techStack: ["JavaScript", "CSS3", "HTML5", "Responsive Design", "UI/UX"],
    image: "/images/lalymille-logo.webp",
    logo: "/images/lalymille-logo.webp",
    link: "https://www.lalymille.com/",
    features: [
      "Course catalog with multiple art categories",
      "Student enrollment and class management",
      "Course progress tracking system",
      "Responsive design for all devices",
      "Interactive learning tools integration",
      "Art gallery showcase",
      "Newsletter subscription system",
      "Seamless navigation and user experience"
    ]
  },
  {
    title: "TicketSys — Customer Support Platform",
    description: "Streamline your customer support. A powerful role-based ticketing system to manage requests, assign agents, and resolve issues faster than ever.",
    fullDescription: "TicketSys is a modern, enterprise-ready customer support platform built with Laravel. Say goodbye to chaotic email threads and missed requests — TicketSys provides a centralized hub where customers submit tickets, support agents handle assignments, and administrators maintain full control. With real-time dashboards, smart ticket routing, category management, and complete user role separation (User → Agent → Admin), your support team transforms from reactive firefighters into proactive problem-solvers. Whether you're a startup handling 10 tickets a day or an enterprise managing thousands, TicketSys scales with you.",
    tags: ["SaaS", "Laravel", "Full Stack"],
    techStack: ["Laravel 11", "MySQL", "Tailwind CSS", "Vite", "Blade", "PHP 8"],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
    textLogo: "TicketSys",
    github: "https://github.com/nolongeraregistereduser/TicketSys",
    screenshots: [
      "/images/ticketsys/01-landing-page.png",
      "/images/ticketsys/02-login.png",
      "/images/ticketsys/03-admin-dashboard.png",
      "/images/ticketsys/04-ticket-management.png",
      "/images/ticketsys/05-category-management.png",
      "/images/ticketsys/06-user-management.png",
      "/images/ticketsys/07-user-dashboard.png",
      "/images/ticketsys/08-ticket-details.png",
      "/images/ticketsys/09-assignment-success.png",
      "/images/ticketsys/10-ticket-assignment.png"
    ],
    features: [
      "Multi-role system: Users, Agents & Administrators",
      "Real-time admin dashboard with ticket analytics",
      "Smart ticket assignment to support agents",
      "Category management for organized workflows",
      "Ticket lifecycle: Open → In Progress → Resolved",
      "User management with role-based access control",
      "Customer portal for ticket creation & tracking",
      "Responsive design for desktop & mobile support"
    ]
  },
  {
    title: "DevConnect — Developer Social Network",
    description: "Connect developers worldwide. A modern social platform for sharing knowledge, showcasing projects, discovering opportunities, and building meaningful professional relationships.",
    fullDescription: "DevConnect is a comprehensive developer-focused social network built to bridge the gap between isolated coding and collaborative community growth. Unlike generic social media, DevConnect is purpose-built for developers who want to share technical knowledge, showcase their projects, discover collaboration opportunities, and build meaningful professional connections. The platform combines the best of LinkedIn, Twitter, and GitHub into one cohesive experience — where developers can post code snippets with syntax highlighting, engage in technical discussions through hashtags, discover trending technologies, and connect with peers who share their tech stack. With real-time notifications powered by Pusher WebSockets, profile customization with skill tags and programming languages, and a discovery feed tailored to your interests, DevConnect transforms how developers network, learn, and collaborate. Whether you're a freelancer seeking project partners, a startup building a developer community, or an enterprise fostering internal tech culture, DevConnect provides the tools to grow your network and accelerate your career.",
    tags: ["Social Network", "Laravel", "Full Stack"],
    techStack: ["Laravel 11", "MySQL", "Tailwind CSS", "Vite", "Alpine.js", "Pusher", "Blade"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    textLogo: "DevConnect",
    github: "https://github.com/nolongeraregistereduser/DevConnect",
    screenshots: [
      "/images/devconnect/01-landing-page.png",
      "/images/devconnect/02-login.png",
      "/images/devconnect/03-dashboard-feed.png",
      "/images/devconnect/04-profile-edit.png",
      "/images/devconnect/05-main-feed.png",
      "/images/devconnect/06-post-comments.png",
      "/images/devconnect/07-create-post.png"
    ],
    features: [
      "Developer profiles with skills, languages & portfolio showcase",
      "Social feed with code snippets, images & link sharing",
      "Hashtag system for discoverability & trending topics",
      "Real-time notifications via WebSocket integration",
      "Post engagement with likes, comments & shares",
      "Search functionality for developers, posts & hashtags",
      "Connection system for professional networking",
      "Responsive design optimized for all devices"
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
