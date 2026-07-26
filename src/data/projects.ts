import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,

    slug: "online-banking-management-system",

    title: "Online Banking Management System",

    description:
      "A secure full-stack banking platform featuring authentication, account management, transactions, dashboards, analytics, and modern financial workflows.",

    overview:
      "The Online Banking Management System is a production-style banking application designed to simulate modern digital banking. The project emphasizes security, scalability, responsive user experience, and clean software architecture while implementing real-world banking concepts.",

    image: "/projects/banking.png",

    gallery: [
      "/projects/banking.png",
    ],

    github: "",

    demo: "",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Server Actions",
    ],

    features: [
      "Secure User Authentication",
      "Customer Dashboard",
      "Account Management",
      "Transaction History",
      "Money Transfers",
      "Financial Analytics",
      "Responsive Design",
      "Modern Banking UI",
      "Protected Routes",
    ],

    architecture: [
      "Next.js App Router",
      "Server Components",
      "Server Actions",
      "Prisma ORM",
      "PostgreSQL Database",
      "REST-style API Structure",
    ],

    challenges: [
      "Designing a scalable relational database",
      "Creating secure transaction workflows",
      "Managing server-side state",
      "Building responsive banking dashboards",
      "Keeping code modular and maintainable",
    ],

    lessons: [
      "Advanced database modeling",
      "Secure backend architecture",
      "Next.js App Router patterns",
      "Prisma best practices",
      "Building enterprise-scale React applications",
    ],

    futurePlans: [
      "Two-Factor Authentication",
      "Email Notifications",
      "Mobile Banking Interface",
      "Docker Deployment",
      "AI Financial Insights",
      "Admin Dashboard",
    ],

    timeline: [
      "Project Planning",
      "Requirements Analysis",
      "Database Design",
      "Authentication",
      "Dashboard Development",
      "Transactions Module",
      "Testing",
      "Deployment",
    ],

    stats: {
      linesOfCode: "18,000+",
      components: 55,
      files: 120,
      duration: "3 Months",
      performance: 96,
      version: "v1.0",
    },
  },

  {
    id: 2,

    slug: "utech-portfolio",

    title: "Utech Portfolio",

    description:
      "A modern developer portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, GitHub APIs, SEO optimization, and interactive project pages.",

    overview:
      "This portfolio serves as my personal brand and professional showcase. It demonstrates my frontend, backend, API integration, responsive design, and UI/UX skills while presenting my projects through detailed interactive case studies.",

    image: "/projects/portfolio.png",

    gallery: [
      "/projects/portfolio.png",
    ],

    github:
      "https://github.com/utech0201-debug/utech-portfolio",

    demo:
      "https://utech-portfolio.vercel.app",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "GitHub API",
      "Vercel",
    ],

    features: [
      "Responsive Design",
      "Dark Mode",
      "SEO Optimization",
      "GitHub Integration",
      "Animated Interface",
      "Interactive Project Pages",
      "Contact Form",
      "Developer Terminal",
      "Performance Optimization",
    ],

    architecture: [
      "Next.js App Router",
      "Server Components",
      "GitHub REST API",
      "Resend Email API",
      "Static Generation",
    ],

    challenges: [
      "Optimizing loading performance",
      "Integrating multiple APIs",
      "Building reusable components",
      "Designing modern UI animations",
      "Maintaining responsive layouts",
    ],

    lessons: [
      "Advanced Next.js architecture",
      "API integration",
      "Production deployment",
      "SEO implementation",
      "Professional UI design",
    ],

    futurePlans: [
      "Developer Blog",
      "Headless CMS",
      "Command Palette",
      "Interactive Case Studies",
      "Analytics Dashboard",
      "Project Search",
    ],

    timeline: [
      "Planning",
      "Wireframing",
      "Responsive UI",
      "GitHub Integration",
      "Animations",
      "SEO",
      "Testing",
      "Deployment",
      "Continuous Updates",
    ],

    stats: {
      linesOfCode: "7,307",
      components: 39,
      files: 58,
      duration: "2 Months",
      performance: 100,
      version: "v2.0",
    },
  },

  {
    id: 3,

    slug: "cybersecurity-labs",

    title: "Cybersecurity Labs",

    description:
      "A collection of cybersecurity learning environments focused on networking, Linux administration, defensive security concepts, and ethical security research.",

    overview:
      "Cybersecurity Labs is a continuously growing collection of isolated practice environments used to strengthen knowledge of networking, Linux, security fundamentals, and responsible security testing within controlled environments.",

    image: "/projects/security.png",

    gallery: [
      "/projects/security.png",
    ],

    github: "",

    demo: "",

    technologies: [
      "Linux",
      "Kali Linux",
      "Networking",
      "Virtual Machines",
      "Wireshark",
      "Nmap",
    ],

    features: [
      "Virtual Security Labs",
      "Linux Administration",
      "Network Analysis",
      "Packet Inspection",
      "Security Research",
      "Documentation",
    ],

    architecture: [
      "Virtual Machines",
      "Linux Environment",
      "Private Networks",
      "Security Tools",
    ],

    challenges: [
      "Creating isolated testing environments",
      "Learning networking protocols",
      "Understanding defensive security concepts",
      "Documenting experiments clearly",
    ],

    lessons: [
      "Linux proficiency",
      "Network troubleshooting",
      "Security fundamentals",
      "Lab documentation",
      "Responsible security practices",
    ],

    futurePlans: [
      "CTF Writeups",
      "Cloud Security Labs",
      "Container Security",
      "Security Automation",
      "Blue Team Labs",
      "SOC Simulation",
    ],

    timeline: [
      "Research",
      "Lab Design",
      "VM Setup",
      "Networking",
      "Security Testing",
      "Documentation",
      "Continuous Learning",
    ],

    stats: {
      linesOfCode: "N/A",
      components: 12,
      files: 35,
      duration: "Ongoing",
      performance: 100,
      version: "v1.0",
    },
  },
];