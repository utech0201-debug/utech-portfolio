"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Project } from "@/types";
import Image from "next/image";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      {/* Project Preview */}
      <div className="relative h-48 overflow-hidden">

  <Image
    src={project.image}
    alt={project.title}
    fill
    className="object-cover transition duration-500 hover:scale-110"
  />

</div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold">
          {project.title}
        </h3>

        <p className="mt-3 text-gray-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 flex gap-4">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition hover:text-blue-400"
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
              className="flex items-center gap-2 text-sm transition hover:text-blue-400"
            >
              <ExternalLink size={18} />
              Live
            </a>
          )}

        </div>
      </div>
    </motion.div>
  );
}