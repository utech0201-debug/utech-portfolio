"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  FolderGit2,
  Sparkles,
} from "lucide-react";
import { SiGithub } from "react-icons/si";

import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectHero({ project }: Props) {
  return (
    <section className="pb-20">

      {/* Back navigation */}
      <Link
        href="/#projects"
        className="
          mb-8
          inline-flex
          items-center
          gap-2
          text-gray-400
          transition
          hover:text-white
        "
      >
        <ArrowLeft size={18} />
        Back to Projects
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

        {/* Case study badge */}
        <div
          className="
            mb-6
            flex
            w-fit
            items-center
            gap-2
            rounded-full
            border
            border-blue-500/20
            bg-blue-500/10
            px-4
            py-2
            text-sm
            font-medium
            text-blue-300
          "
        >
          <Sparkles size={16} />
          Project Case Study
        </div>

        {/* Hero image */}
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/5
            shadow-2xl
            shadow-black/20
          "
        >
          <Image
            src={project.image}
            alt={project.title}
            width={1600}
            height={900}
            priority
            className="
              aspect-video
              w-full
              object-cover
            "
          />
        </div>

        {/* Project information */}
        <div className="mt-10">

          <div className="flex flex-wrap items-center gap-3">
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/5
                px-3
                py-1.5
                text-xs
                font-medium
                text-gray-300
              "
            >
              <FolderGit2 size={14} />
              {project.stats.version}
            </span>

            <span
              className="
                rounded-full
                border
                border-white/10
                bg-white/5
                px-3
                py-1.5
                text-xs
                text-gray-400
              "
            >
              {project.stats.duration}
            </span>
          </div>

          <h1
            className="
              mt-5
              text-4xl
              font-black
              tracking-tight
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            {project.title}
          </h1>

          <p
            className="
              mt-6
              max-w-4xl
              text-lg
              leading-8
              text-gray-400
            "
          >
            {project.overview}
          </p>

          {/* Technology preview */}
          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.slice(0, 6).map((technology) => (
              <span
                key={technology}
                className="
                  rounded-full
                  border
                  border-blue-500/20
                  bg-blue-500/5
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  text-blue-300
                "
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Smart action buttons */}
          {(project.demo || project.github) && (
            <div className="mt-10 flex flex-wrap gap-4">

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-blue-600
                    px-6
                    py-3
                    font-semibold
                    text-white
                    shadow-lg
                    shadow-blue-600/20
                    transition
                    hover:bg-blue-500
                    hover:-translate-y-0.5
                  "
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-6
                    py-3
                    font-semibold
                    text-white
                    transition
                    hover:bg-white/10
                    hover:-translate-y-0.5
                  "
                >
                  <SiGithub size={18} />
                  View Source
                </a>
              )}

            </div>
          )}

        </div>

      </motion.div>

    </section>
  );
}
