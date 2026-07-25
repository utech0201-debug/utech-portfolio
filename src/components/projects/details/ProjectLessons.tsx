"use client";

import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectLessons({
  project,
}: Props) {
  return (
    <section className="py-20">

      <h2 className="mb-10 text-3xl font-black">
        Lessons Learned
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        {project.lessons.map((lesson, index) => (

          <motion.div
            key={lesson}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.08,
            }}
            viewport={{ once: true }}
            className="rounded-3xl border border-yellow-500/20 bg-yellow-500/5 p-6"
          >

            <div className="flex gap-4">

              <Lightbulb className="text-yellow-400" />

              <p>{lesson}</p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}