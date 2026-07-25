"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectFuture({
  project,
}: Props) {
  return (
    <section className="py-20">

      <h2 className="mb-10 text-3xl font-black">
        Future Improvements
      </h2>

      <div className="grid gap-6">

        {project.futurePlans.map((plan, index) => (

          <motion.div
            key={plan}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className="rounded-3xl border border-green-500/20 bg-green-500/5 p-6"
          >

            <div className="flex gap-4">

              <Rocket className="text-green-400" />

              <p>{plan}</p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}