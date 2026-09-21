import type { Metadata } from "next";
import Link from "next/link";

import ProjectFilter from "@/components/projects/ProjectFilter";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Utech's software engineering projects, experiments, cybersecurity work, and full-stack applications.",
  alternates: {
    canonical: "https://utech-portfolio.vercel.app/projects",
  },
  openGraph: {
    title: "Projects | Utech",
    description:
      "Explore Utech's software engineering projects, experiments, cybersecurity work, and full-stack applications.",
    url: "https://utech-portfolio.vercel.app/projects",
    siteName: "Utech Portfolio",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 pb-24 pt-32">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-white"
        >
          ← Back to home
        </Link>

        <header className="mt-10 max-w-3xl">
          <p className="section-kicker">Engineering portfolio</p>
          <h1 className="mt-3 text-5xl font-black tracking-tight text-white sm:text-6xl">
            Projects built to learn, solve, and ship.
          </h1>
          <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
            A focused view of Utech builds — from full-stack products and
            learning platforms to banking systems and cybersecurity labs.
          </p>
        </header>

        <div className="mt-14">
          <ProjectFilter projects={projects} />
        </div>
      </div>
    </main>
  );
}
