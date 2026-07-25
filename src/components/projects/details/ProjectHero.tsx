"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectHero({
  project,
}: Props) {
  return (
    <section className="pb-20">

      <Link
        href="/#projects"
        className="mb-8 inline-flex items-center gap-2 text-gray-400 transition hover:text-white"
      >
        <ArrowLeft size={18} />
        Back to Projects
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

        <div className="relative overflow-hidden rounded-3xl border border-white/10">

          <Image
            src={project.image}
            alt={project.title}
            width={1600}
            height={900}
            priority
            className="aspect-video w-full object-cover"
          />

        </div>

        <div className="mt-10">

          <h1 className="text-5xl font-black">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            {project.overview}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              <SiGithub size={18} />
              GitHub
            </a>

          </div>

        </div>

      </motion.div>

    </section>
  );
}