"use client";

import { motion } from "framer-motion";
import { ArrowRight, TriangleAlert } from "lucide-react";

import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectChallenges({ project }: Props) {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">
          Engineering Problem Space
        </p>
        <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Challenges
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              The technical and product constraints that shaped the implementation of this project.
            </p>
          </div>
          <span className="w-fit rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1.5 text-xs font-semibold text-amber-300">
            {project.challenges.length} identified
          </span>
        </div>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2">
        {project.challenges.map((challenge, index) => (
          <motion.article
            key={challenge}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            whileHover={{ y: -3 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition hover:border-amber-400/20 hover:bg-white/[0.055]"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-amber-400/10 blur-3xl transition group-hover:bg-amber-400/15" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10 text-amber-300">
                  <TriangleAlert size={19} />
                </div>
                <span className="text-xs font-semibold tracking-[0.16em] text-gray-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-6 text-base font-semibold leading-7 text-gray-200">
                {challenge}
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gray-600 transition group-hover:text-amber-300">
                Engineering constraint
                <ArrowRight size={13} />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
