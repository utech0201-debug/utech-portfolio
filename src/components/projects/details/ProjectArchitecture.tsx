"use client";

import { motion } from "framer-motion";
import { Boxes } from "lucide-react";

import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectArchitecture({
  project,
}: Props) {
  return (
    <section className="py-20">

      <h2 className="mb-10 text-3xl font-black">
        System Architecture
      </h2>

      <div className="space-y-6">

        {project.architecture.map((step, index) => (

          <motion.div
            key={step}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-6"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">

              <Boxes className="text-blue-500" />

            </div>

            <div>

              <span className="text-sm text-blue-400">
                Layer {index + 1}
              </span>

              <h3 className="text-lg font-bold">
                {step}
              </h3>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}