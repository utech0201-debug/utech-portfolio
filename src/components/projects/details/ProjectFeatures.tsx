"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectFeatures({
  project,
}: Props) {
  return (
    <section className="py-20">

      <h2 className="mb-10 text-3xl font-black">
        Key Features
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        {project.features.map((feature, index) => (

          <motion.div
            key={feature}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >

            <div className="flex items-start gap-4">

              <CheckCircle2
                className="mt-1 text-blue-500"
                size={22}
              />

              <p className="leading-7 text-gray-300">
                {feature}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}