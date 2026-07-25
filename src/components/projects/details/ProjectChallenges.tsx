"use client";

import { motion } from "framer-motion";
import { TriangleAlert } from "lucide-react";

import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectChallenges({
  project,
}: Props) {
  return (
    <section className="py-20">

      <h2 className="mb-10 text-3xl font-black">
        Challenges
      </h2>

      <div className="grid gap-6">

        {project.challenges.map((challenge, index) => (

          <motion.div
            key={challenge}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className="rounded-3xl border border-red-500/20 bg-red-500/5 p-6"
          >

            <div className="flex gap-4">

              <TriangleAlert className="text-red-400" />

              <p className="text-gray-300">
                {challenge}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}