
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
    category: "Development",
    subtitle: "Building robust, full-stack applications end to end.",
    icon: "code",
    accent: "emerald",
    items: ["Java", "Spring Boot", "PHP", "Laravel", "Angular", "React", "TypeScript"]
  },
  {
    category: "Infrastructure & Cloud",
    subtitle: "Containerizing, orchestrating and shipping to production.",
    icon: "cloud",
    accent: "blue",
    items: ["Docker", "Kubernetes (K8s)", "Nginx", "Linux (Ubuntu/CentOS)", "CI/CD"]
  },
  {
    category: "IT Operations & Security",
    subtitle: "Keeping systems running, secure and observable.",
    icon: "shield",
    accent: "purple",
    items: ["ServiceNow (CSA)", "ITSM", "Bash/Python Scripting", "PowerMTA", "Networking (LAN/Firewalls)"]
  }
];

// ============================================
// EXPERIENCE
// ============================================
export const EXPERIENCES: Experience[] = [
  {
    title: "Software Engineer",
    company: "Vantery",
    period: "January 2026 - June 2026",
    location: "Remote",
    description: "End-to-end design and development of high-performance educational SaaS platforms. Built a stateful single-page application (Next.js + Laravel 11) with secure Sanctum authentication and Spatie role-based access control, an AI-powered university orientation engine combining deterministic scoring with Claude AI, and self-hosted DevOps (Nginx, SSL, CI/CD) on a Linux VPS.",
    technologies: ["Laravel 11", "Next.js", "PostgreSQL", "Claude AI", "Docker", "CI/CD"]
  },
  {
    title: "ServiceNow Developer",
    company: "UX4MATION",
    period: "January 2025 - February 2026",
    location: "Morocco · Remote",
    description: "ServiceNow platform administration and development at a premier ServiceNow Pure-play Partner specializing in digital transformation. Configured and customized core ITSM workflows (Incident, Problem and Change Management), authored Business Rules and Access Control Lists (ACLs), and administered users and roles in enterprise environments — earning the ServiceNow Certified System Administrator (CSA) certification.",
    technologies: ["ServiceNow", "ITSM", "Business Rules", "ACLs", "CSA"]
  },
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
    id: "localvitrine",
    category: "java",
    title: "LocalVitrine",
    description: "SaaS landing-page generator that lets local businesses launch SEO-ready pages — no code, no agency.",
    fullDescription: "LocalVitrine is a B2B SaaS platform that turns the painful, expensive process of getting online into a few clicks. Built end-to-end with an Angular 17 front end and a Spring Boot 3 backend, it pairs a GrapesJS visual no-code editor with AI-assisted content generation so a shop owner can describe their business and walk away with a polished, conversion-focused landing page. Every page is published through a dynamic template-resolution engine on clean, SEO-friendly URLs — and the whole stack ships to a Kubernetes cluster behind an Nginx reverse proxy, so it scales from the first customer to the thousandth without re-architecting.",
    tags: ["SaaS", "No-Code", "SEO"],
    techStack: ["Angular 17", "Spring Boot 3", "GrapesJS", "Kubernetes", "Nginx", "JWT"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    textLogo: "LocalVitrine",
    github: "https://github.com/nolongeraregistereduser/LocalVitrine",
    challenge: "SMEs needed a fast, no-code way to generate SEO-friendly landing pages without hiring an agency or learning to code.",
    architecture: "Layered Spring Boot 3 backend with a dynamic template-resolution engine and JWT-secured REST APIs, paired with an Angular 17 no-code editor. Front end and back end are containerized and deployed to a Kubernetes cluster behind an Nginx reverse proxy for independent scaling."
  },
  {
    id: "agribat",
    category: "php",
    title: "Agribat",
    description: "Real-time multiplayer farming simulation — a browser MMO where players grow, trade and survive live economies.",
    fullDescription: "Agribat is a real-time, multiplayer farming simulation (MMO-style) where players manage farms inside a living, breathing economy. Engineered with PHP 8.2 and Symfony 7.2, it models the world through 52 Doctrine entities and 38 dedicated business services that simulate complex markets, salaries, weather and cultivation cycles. The standout piece of engineering is a custom temporal-compression engine paired with an autonomous game loop (cron-driven) that keeps the world running even when players are offline — crops keep growing, wages keep paying and the weather keeps turning. Real-time state is pushed to every connected player over Mercure, and the entire stack is containerized with Docker and shipped through GitLab CI/CD to a Linux VPS.",
    tags: ["MMO", "Real-Time", "DevOps"],
    techStack: ["PHP 8.2", "Symfony 7.2", "Mercure", "Doctrine", "Docker", "GitLab CI/CD"],
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
    textLogo: "Agribat",
    link: "https://agribati.com",
    challenge: "Simulating a persistent, real-time multiplayer economy — with farming, salaries and weather that keep evolving even while players are logged off.",
    architecture: "Domain modeled with 52 Doctrine entities and 38 business services on PHP 8.2 / Symfony 7.2. A bespoke temporal-compression engine and a cron-based autonomous game loop drive offline progression, while Mercure streams real-time updates. Fully containerized (PHP-FPM, Nginx, MySQL, Mercure) and deployed via GitLab CI/CD to a Linux VPS."
  },
  {
    id: "vantery",
    category: "php",
    title: "Vantery",
    description: "AI-powered EdTech platform that guides students to the right university path with explainable, data-driven recommendations.",
    fullDescription: "Vantery is a live EdTech SaaS platform that helps students answer one of the hardest questions they'll face — where, and what, to study. Built as a stateful single-page application on Next.js with a Laravel 11 API, it pairs a multi-dimensional, weighted scoring engine (running on PostgreSQL with trigram search and JSONB) with an AI Orientation Bot powered by a deterministic scoring core combined with Claude AI — so every recommendation is not just smart, but auditable and explainable. Security is first-class: authentication via Laravel Sanctum, role-based access control with Spatie, and query-level anti-enumeration protections. The whole platform is self-hosted end to end — provisioned on a Linux VPS with Nginx, SSL and automated CI/CD pipelines that I built and operate.",
    tags: ["EdTech", "AI", "SaaS"],
    techStack: ["Laravel 11", "Next.js", "PostgreSQL", "Claude AI", "Sanctum", "Spatie RBAC", "Docker"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
    textLogo: "Vantery",
    link: "https://app.vantery.com",
    challenge: "Students needed trustworthy, personalized university guidance — recommendations that are genuinely intelligent yet transparent enough to explain and defend.",
    architecture: "Stateful Next.js SPA over a Laravel 11 API, secured with Sanctum auth, Spatie RBAC and anti-enumeration safeguards. A deterministic, multi-dimensional weighted scoring engine on PostgreSQL (trigram + JSONB) is paired with Claude AI for explainable orientation. Self-hosted on a Linux VPS with Nginx, SSL and automated CI/CD."
  },
  {
    id: "goexploria",
    category: "php",
    title: "GoExploria",
    description: "Multi-module digital-growth SaaS for tourism — CRM, CMS and a no-code page builder in one platform.",
    fullDescription: "GoExploria is a live, multi-module SaaS platform built to power digital growth for the tourism sector. Architected and delivered from zero — cloud infrastructure, database design and deployment workflows included — it brings together everything a tourism business needs to grow online in a single product: a CRM to manage leads and customers, a CMS to run content, and a company directory to centralize marketing efforts. The centerpiece is an integrated GrapesJS visual page builder that lets non-technical users design and publish SEO-optimized landing pages entirely on their own, removing the developer bottleneck from everyday marketing.",
    tags: ["SaaS", "Tourism", "No-Code"],
    techStack: ["Laravel", "React", "GrapesJS", "MySQL", "Linux VPS"],
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop",
    textLogo: "GoExploria",
    link: "https://goexploria.com",
    challenge: "Tourism businesses needed a single platform to run marketing, content and customer relationships — and to publish SEO landing pages without touching code.",
    architecture: "Multi-module Laravel + React SaaS combining CRM, CMS and a company directory, with an integrated GrapesJS page builder for autonomous SEO landing pages. Built end to end including cloud infrastructure, database design and deployment workflows on a Linux VPS."
  },
  {
    id: "microservices-ecommerce",
    category: "java",
    title: "Microservices E-Commerce",
    description: "Cloud-native distributed e-commerce system built to survive failure and scale on demand.",
    fullDescription: "A cloud-native, distributed e-commerce platform engineered to do what monoliths can't: keep selling even when individual parts break. The system is decomposed into independent Java 17 / Spring Cloud microservices along clear domain boundaries (clients, products, billing), each deployable and scalable on its own. Service discovery runs through Netflix Eureka, all traffic flows through a single API Gateway, and configuration is centralized with Spring Cloud Config so the fleet can be tuned without redeploys. Inter-service calls use OpenFeign, and Resilience4j circuit breakers contain failures so one struggling service never cascades into a full outage — the foundation of a system that's genuinely production-ready.",
    tags: ["Microservices", "Cloud-Native", "Resilience"],
    techStack: ["Java 17", "Spring Cloud", "Netflix Eureka", "API Gateway", "OpenFeign", "Resilience4j", "Docker"],
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&h=600&fit=crop",
    textLogo: "Microservices Shop",
    github: "https://github.com/nolongeraregistereduser/MICRO-SERVICES-COMMERCEMANAGEMENT",
    challenge: "Building a scalable foundation capable of handling independent service failures without bringing down the whole platform.",
    architecture: "Domain split into independent Spring Cloud services with Netflix Eureka service discovery, a single API Gateway, and centralized Spring Cloud Config. Synchronous calls run over OpenFeign, with Resilience4j circuit breakers isolating failures between services."
  },
  {
    id: "auto-remediation-engine",
    category: "it",
    title: "Auto-Remediation Engine",
    description: "\"Zero-Touch\" IT operations engine that detects, diagnoses and fixes server failures before a human is ever paged.",
    fullDescription: "The Auto-Remediation Engine is a \"zero-touch\" IT operations tool born out of a real pain: an L1 support team drowning in repetitive, after-hours server crashes — mostly memory spikes that always needed the same manual fix. Engineered in Python and Bash, it runs as a custom daemon that continuously tracks system metrics and acts on its own when thresholds are breached: auto-restarting Nginx, resetting stuck queues and recovering services in seconds instead of hours. Every action is reported through REST APIs and webhooks into a central alerting system, so the team gets full visibility without having to babysit the servers. The result is dramatically reduced downtime and a support queue freed from work a machine should have been doing all along.",
    tags: ["Automation", "Monitoring", "SysAdmin"],
    techStack: ["Python", "Bash", "Webhooks", "Linux"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    textLogo: "Auto-Remediation",
    challenge: "L1 support was overwhelmed by repetitive server crashes caused by memory spikes, eating hours of manual intervention.",
    architecture: "Custom daemon tracking system metrics, auto-restarting Nginx/MySQL on failure thresholds, and firing REST API alerts via webhooks for full observability."
  },
  {
    id: "high-volume-email-infra",
    category: "it",
    title: "High-Volume Email Infrastructure",
    description: "Enterprise deliverability setup that lands high-volume email campaigns in the inbox — not the spam folder.",
    fullDescription: "A bare-metal email infrastructure project focused on the unforgiving discipline of deliverability — getting massive, time-sensitive email campaigns reliably into recipients' inboxes instead of spam folders. Working on Linux servers (Ubuntu/CentOS), I deployed and tuned PowerMTA for high-volume sending and engineered the reputation layer that mailbox providers actually trust: strict SPF, DKIM and DMARC authentication policies, careful DNS configuration, and disciplined IP warming strategies that build sender reputation gradually rather than triggering filters. It's infrastructure where small misconfigurations cost real money, and where doing it right is the difference between a campaign that converts and one that never gets seen.",
    tags: ["Deliverability", "Infrastructure", "DNS"],
    techStack: ["PowerMTA", "CentOS", "DNS"],
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&h=600&fit=crop",
    textLogo: "Email Infra",
    challenge: "Ensuring high deliverability and bypassing spam filters for massive, time-sensitive email campaigns.",
    architecture: "Configured strict SPF/DKIM/DMARC policies and IP warming strategies on bare-metal Linux servers running PowerMTA."
  },
  {
    id: "servicenow-itsm",
    category: "it",
    title: "ServiceNow ITSM Platform",
    description: "Certified ServiceNow (CSA) configuration of enterprise ITSM workflows — incidents, changes and access control.",
    fullDescription: "A hands-on ServiceNow implementation built during an intensive pre-employment program with UX4MATION, culminating in the ServiceNow Certified System Administrator (CSA) certification. The work covered the full platform-administration lifecycle: configuring and customizing core IT Service Management (ITSM) workflows — Incident, Problem and Change Management — in simulated enterprise environments. Beyond the out-of-the-box modules, it involved authoring custom Business Rules to enforce process logic, administering users and roles, and locking down data with Access Control Lists (ACLs), plus tailoring the platform UI/UX so that real support teams could work faster and more safely.",
    tags: ["ServiceNow", "ITSM", "CSA"],
    techStack: ["ServiceNow", "ITSM", "Business Rules", "ACLs", "Incident/Change Mgmt"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    textLogo: "ServiceNow ITSM",
    challenge: "Standing up enterprise-grade ITSM processes — incidents, changes and tightly governed access — on the ServiceNow platform.",
    architecture: "Configured core ITSM workflows (Incident, Problem, Change Management), authored custom Business Rules, administered users and roles, and secured records with Access Control Lists (ACLs), backed by the ServiceNow CSA certification."
  },
  {
    id: "network-infrastructure",
    category: "it",
    title: "Enterprise Network Infrastructure",
    description: "End-to-end LAN design and hardware deployment — routing, VLAN segmentation and firewall hardening.",
    fullDescription: "An end-to-end network and systems engineering project: designing and physically deploying the complete Local Area Network (LAN) architecture and hardware infrastructure for an internal e-learning platform. The build covered the full stack of physical networking — configuring enterprise routers and switches for optimal routing and logical VLAN segmentation to isolate traffic, then installing and configuring hardware firewalls to secure the internal network and protect the educational web servers from unauthorized access. It's the kind of ground-up infrastructure work that everything else quietly depends on.",
    tags: ["Networking", "LAN/VLAN", "Security"],
    techStack: ["Routers/Switches", "VLAN", "Firewalls", "LAN", "Linux"],
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop",
    textLogo: "Network Infra",
    challenge: "Designing and deploying a secure, well-segmented physical network from scratch to host and protect an internal e-learning platform.",
    architecture: "Designed the full LAN topology, configured routers and switches for optimal routing and logical VLAN segmentation, and deployed hardware firewalls to shield internal web servers from unauthorized access."
  },
  {
    id: "tricol-inventory",
    category: "java",
    title: "Tricol Inventory",
    description: "ERP supply-chain engine with strict FIFO batch tracking and a complete movement audit trail.",
    fullDescription: "Tricol Inventory is an ERP-grade inventory and supply-chain engine built for businesses that can't afford to lose track of a single batch. The hard requirement was strict chronological FIFO tracking — knowing exactly which lot moves first, and being able to prove it. Built on Spring Boot with a DTO-driven API (mapped cleanly via MapStruct), it enforces business rules at every step and records a full audit history of every inventory movement. Database schema changes are versioned and reproducible thanks to Liquibase migrations, and the core logic is locked down with extensive JUnit/Mockito test coverage, making the system safe to evolve in production.",
    tags: ["ERP", "Supply Chain", "Backend"],
    techStack: ["Java", "Spring Boot", "Liquibase", "MapStruct", "JUnit/Mockito", "MySQL"],
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop",
    textLogo: "Tricol Inventory",
    github: "https://github.com/nolongeraregistereduser/Tricol-Spring-Security",
    challenge: "Strict requirement for chronological batch tracking (FIFO) across the supply chain with full, auditable traceability.",
    architecture: "DTO-driven API (MapStruct) backed by Liquibase versioned schema migrations and a complete audit history for every inventory movement, with business logic validated by extensive JUnit/Mockito tests."
  },
  {
    id: "smartshop-api",
    category: "java",
    title: "SmartShop API",
    description: "B2B commercial backend engine handling the full order lifecycle, loyalty tiers and split payments.",
    fullDescription: "SmartShop is a B2B commercial backend engine that powers the messy, money-critical parts of wholesale commerce. Built as a robust Spring Boot REST API with strict Jakarta Validation and managed through Maven, it orchestrates the complete B2B order lifecycle from quote to fulfilment. Its standout feature is a dynamic loyalty engine that applies tier-based discounts automatically, alongside rigorous financial workflows — subtotal and VAT computation, multi-channel split payments, and real-time stock validation that prevents overselling. Every endpoint is guarded by validation rules that keep dirty data and invalid transactions out of the system, making it a dependable backbone for B2B platforms.",
    tags: ["B2B", "REST API", "Backend"],
    techStack: ["Java", "Spring Boot", "Jakarta Validation", "Maven", "MySQL"],
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&h=600&fit=crop",
    textLogo: "SmartShop API",
    github: "https://github.com/nolongeraregistereduser/smartshop-api",
    challenge: "B2B commerce needed a backend that could enforce tier-based loyalty discounts, complex financial workflows and real-time stock accuracy — without ever shipping bad data.",
    architecture: "Spring Boot REST API with strict Jakarta Validation on every contract, a dynamic tier-based loyalty/discount engine, subtotal/VAT computation, multi-channel split payments and real-time stock validation, built and managed with Maven."
  },
  {
    id: "lejob-ma",
    category: "php",
    title: "Lejob.ma",
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
    id: "salamancare",
    category: "php",
    title: "SalamanCare",
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
    id: "pageforge-ai",
    category: "php",
    title: "PageForge AI",
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
    id: "laly-mille",
    category: "php",
    title: "Laly Mille — Art Education Platform",
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
    id: "ticketsys",
    category: "php",
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
    id: "devconnect",
    category: "php",
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
