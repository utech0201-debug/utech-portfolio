"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Radio } from "lucide-react";
import { SiGithub } from "react-icons/si";

import ProjectPreview from "@/components/projects/ProjectPreview";
import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const isUtechBuild = project.id >= 4;
  const previewVariant =
    project.slug === "utech-store"
      ? "store"
      : project.slug === "utech-learning-hub"
        ? "learning"
        : null;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl"
    >
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 opacity-0 blur-xl transition duration-500 group-hover:opacity-30" />

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-xl transition duration-500">
        <div className="relative h-56 overflow-hidden">
          {previewVariant ? (
            <ProjectPreview variant={previewVariant} />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              loading="lazy"
            />
          )}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
            {isUtechBuild ? "Latest Build" : "Featured"}
          </span>

          {isUtechBuild && (
            <span className="absolute right-4 top-4 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-300 backdrop-blur">
              UTECH
            </span>
          )}
        </div>

        <div className="p-7">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-bold tracking-tight text-white">{project.title}</h3>
            <span className="mt-1 shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-600">
              {String(project.id).padStart(2, "0")}
            </span>
          </div>

          <p className="mt-4 leading-7 text-gray-400">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-slate-500">
            {project.demo ? (
              <>
                <Radio size={12} className="text-emerald-400" />
                <span className="text-emerald-300/80">Live project</span>
              </>
            ) : (
              <span>Project showcase</span>
            )}
          </div>

          <div className={`my-6 grid gap-3 ${project.demo ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"}`}>
            <Link
              href={`/projects/${project.slug}`}
              className="flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 font-medium text-white transition hover:bg-violet-500"
            >
              <ArrowRight size={18} />
              Details
            </Link>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-medium text-white transition hover:border-blue-500 hover:text-blue-400"
              >
                <SiGithub size={18} />
                GitHub
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-500"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
