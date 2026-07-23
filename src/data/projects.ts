import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Online Banking Management System",
    description:
      "A full-stack banking platform with user accounts, transactions, dashboard analytics, and secure database management.",
    image: "/projects/banking.png",
    github: "",
    demo: "",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
  },

  {
    id: 2,
    title: "Utech Portfolio",
    description:
      "A modern developer portfolio built with Next.js, Tailwind CSS and Framer Motion.",
    image: "/projects/portfolio.png",
    github: "https://github.com/utech0201-debug/utech-portfolio.git",
    demo: "",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
    ],
  },

  {
    id: 3,
    title: "Cybersecurity Labs",
    description:
      "A collection of security research projects, penetration testing labs and networking experiments.",
    image: "/projects/security.png",
    github: "",
    demo: "",
    technologies: [
      "Kali Linux",
      "Networking",
      "Security Testing",
    ],
  },
];