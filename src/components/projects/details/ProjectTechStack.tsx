"use client";

import { motion } from "framer-motion";

import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectTechStack({
  project,
}: Props) {
  return (

    <section className="py-20">

      <h2 className="mb-10 text-3xl font-black">
        Technology Stack
      </h2>

      <div className="flex flex-wrap gap-4">

        {project.technologies.map((tech, index) => (

          <motion.span
            key={tech}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
            }}
            viewport={{ once: true }}
            className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-3 font-semibold"
          >
            {tech}
          </motion.span>

        ))}

      </div>

    </section>

  );
}