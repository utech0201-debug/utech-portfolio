"use client";

import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github, Sparkles } from "lucide-react";

import ProjectFilter from "./ProjectFilter";
import { projects } from "@/data/projects";

export default function ProjectGrid() {
  const featured = projects.slice(0, 2);

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-28">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="status-dot" aria-hidden="true" />
            <p className="section-kicker">Featured engineering work</p>
          </div>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Builds with a purpose.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Products, platforms and experiments built to turn ideas into working
            software — with an emphasis on clean interfaces, practical systems
            and continuous learning.
          </p>
        </div>

        <Link
          href="/projects"
          className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-gray-200 transition hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-blue-400/10 hover:text-white"
        >
          Explore all projects
          <ArrowUpRight size={16} />
        </Link>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {featured.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.slug}`}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.05]"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition group-hover:bg-blue-500/20" />
            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-blue-300">
                  Featured build
                </span>
                <ArrowUpRight className="text-gray-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-300" size={18} />
              </div>

              <h3 className="mt-7 text-2xl font-black text-white">{project.title}</h3>
              <p className="mt-3 line-clamp-3 text-sm leading-7 text-gray-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((technology) => (
                  <span key={technology} className="rounded-lg border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-gray-400">
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex items-center gap-4 border-t border-white/10 pt-5 text-xs text-gray-500">
                <span className="flex items-center gap-1.5"><Sparkles size={13} /> {project.stats.version}</span>
                {project.github && <span className="flex items-center gap-1.5"><Github size={13} /> Source available</span>}
                {project.demo && <span className="flex items-center gap-1.5"><ExternalLink size={13} /> Live build</span>}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 border-t border-white/10 pt-14">
        <div className="mb-8">
          <p className="section-kicker">Complete project archive</p>
          <h3 className="mt-2 text-2xl font-black text-white">Explore the full build history.</h3>
        </div>
        <ProjectFilter projects={projects} />
      </div>
    </section>
  );
}
