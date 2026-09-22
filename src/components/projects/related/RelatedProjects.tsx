"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Radio } from "lucide-react";

import { projects } from "@/data/projects";

interface Props {
  currentSlug: string;
}

const relatedProjectMap: Record<string, string[]> = {
  "utech-learning-hub": [
    "cybersecurity-labs",
    "utech-portfolio",
  ],
  "online-banking-management-system": [
    "utech-portfolio",
    "cybersecurity-labs",
  ],
  "utech-portfolio": [
    "utech-learning-hub",
    "online-banking-management-system",
  ],
  "cybersecurity-labs": [
    "utech-learning-hub",
    "online-banking-management-system",
    "utech-portfolio",
  ],
};

function isLiveProject(project: (typeof projects)[number]) {
  return Boolean(
    project.demo &&
      (project.slug === "utech-learning-hub" ||
        project.slug === "utech-portfolio")
  );
}

export default function RelatedProjects({ currentSlug }: Props) {
  const relatedSlugs = relatedProjectMap[currentSlug] ?? [];

  const relatedProjects = relatedSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is (typeof projects)[number] => Boolean(project));

  return (
    <section className="mt-28">
      <div className="mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">
          Curated for this project
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-2 text-4xl font-black"
        >
          Related Projects
        </motion.h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500">
          Explore other builds connected by technology, purpose, or the skills
          behind this project.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {relatedProjects.map((project) => {
          const live = isLiveProject(project);

          return (
            <motion.div
              key={project.id}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                <div className="relative h-60 overflow-hidden bg-slate-950">
                  {live ? (
                    <>
                      <iframe
                        src={project.demo}
                        title={`${project.title} live preview`}
                        loading="lazy"
                        className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[960px] -translate-x-1/2 origin-top scale-[0.625] border-0"
                        tabIndex={-1}
                        allow="fullscreen"
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                      <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full border border-emerald-400/20 bg-slate-950/85 px-3 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur">
                        <Radio size={12} aria-hidden="true" />
                        LIVE PREVIEW
                      </div>
                    </>
                  ) : (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    </>
                  )}
                </div>

                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-bold">{project.title}</h3>

                    {live && (
                      <span className="shrink-0 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                        Live
                      </span>
                    )}
                  </div>

                  <p className="mt-4 leading-7 text-gray-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-blue-600/20 px-3 py-1 text-xs text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center gap-2 font-semibold text-blue-400">
                    View Case Study
                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
