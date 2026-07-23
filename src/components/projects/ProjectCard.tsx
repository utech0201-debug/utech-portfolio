"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Image from "next/image";
import { Project } from "@/types";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.35,
      }}
      className="group relative"
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
          border-zinc-200
          bg-white/80
          shadow-xl
          backdrop-blur-xl
          transition
          duration-500

          dark:border-white/10
          dark:bg-white/5
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
              shadow-lg
            "
          >
            Featured
          </span>
        </div>

        {/* Content */}
        <div className="p-7">
          <h3
            className="
              text-2xl
              font-bold
              text-zinc-900
              dark:text-white
            "
          >
            {project.title}
          </h3>

          <p
            className="
              mt-4
              leading-7
              text-zinc-600
              dark:text-gray-400
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
                  bg-blue-100
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-blue-700

                  dark:bg-blue-500/10
                  dark:text-blue-300
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-zinc-200 dark:border-white/10" />

          {/* Buttons */}
          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  flex-1
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-zinc-300
                  bg-white
                  px-4
                  py-3
                  font-medium
                  text-zinc-700
                  transition

                  hover:border-blue-500
                  hover:text-blue-600

                  dark:border-white/10
                  dark:bg-white/5
                  dark:text-white
                  dark:hover:border-blue-500
                  dark:hover:text-blue-400
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
                  flex-1
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
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}