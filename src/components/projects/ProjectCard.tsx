"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { SiGithub } from "react-icons/si";

import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectCard({
  project,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
      "
    >
      {/* Animated Glow */}
      <div
        className="
          absolute
          -inset-1
          rounded-3xl
          bg-gradient-to-r
          from-blue-600
          via-cyan-500
          to-violet-600
          opacity-0
          blur-xl
          transition
          duration-500
          group-hover:opacity-30
        "
      />

      {/* Card */}
      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/5
          shadow-xl
          backdrop-blur-xl
          transition
          duration-500
        "
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="
              object-cover
              transition
              duration-700
              group-hover:scale-110
            "
          />

          {/* Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/70
              via-black/10
              to-transparent
            "
          />

          {/* Badge */}
          <span
            className="
              absolute
              left-4
              top-4
              rounded-full
              bg-blue-600
              px-3
              py-1
              text-xs
              font-semibold
              text-white
            "
          >
            {project.id >= 4 ? "Latest Build" : "Featured"}
          </span>
          {project.id >= 4 && (
            <span className="absolute right-4 top-4 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-300 backdrop-blur">
              UTECH
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-7">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              {project.title}
            </h3>
            <span className="mt-1 shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-600">
              {String(project.id).padStart(2, "0")}
            </span>
          </div>

          <p
            className="
              mt-4
              leading-7
              text-gray-400
            "
          >
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  bg-blue-500/10
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-blue-300
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-white/10" />

          {/* Buttons */}
          <div className={`grid gap-3 ${project.demo ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"}`}>
            <Link
              href={`/projects/${project.slug}`}
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-violet-600
                px-4
                py-3
                font-medium
                text-white
                transition
                hover:bg-violet-500
              "
            >
              <ArrowRight size={18} />
              Details
            </Link>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  px-4
                  py-3
                  font-medium
                  text-white
                  transition
                  hover:border-blue-500
                  hover:text-blue-400
                "
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
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-blue-600
                  px-4
                  py-3
                  font-medium
                  text-white
                  transition
                  hover:bg-blue-500
                "
              >
                <ExternalLink size={18} />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
