"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Radio } from "lucide-react";

import { projects } from "@/data/projects";
import ProjectPreview from "@/components/projects/ProjectPreview";

interface Props {
  currentSlug: string;
}

function isLiveProject(project: (typeof projects)[number]) {
  return Boolean(
    project.demo &&
      (project.slug === "utech-store" || project.slug === "utech-learning-hub")
  );
}

export default function RelatedProjects({ currentSlug }: Props) {
  const relatedProjects = projects.filter(
    (project) => project.slug !== currentSlug
  );

  return (
    <section className="mt-28">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center text-4xl font-black"
      >
        Related Projects
      </motion.h2>

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
                <div className="relative h-60 overflow-hidden">
                  {live ? (
                    <div className="absolute inset-0">
                      <ProjectPreview
                        variant={
                          project.slug === "utech-store"
                            ? "store"
                            : "learning"
                        }
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-emerald-400/20 bg-slate-950/85 px-3 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur">
                        <Radio size={12} />
                        LIVE PREVIEW
                      </div>
                    </div>
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
                  <h3 className="text-2xl font-bold">{project.title}</h3>

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
