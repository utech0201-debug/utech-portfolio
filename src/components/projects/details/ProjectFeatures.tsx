"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Layers3,
  Sparkles,
  Zap,
} from "lucide-react";

import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectFeatures({ project }: Props) {
  return (
    <section className="py-20" aria-labelledby="features-title">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-blue-300">
            <Sparkles className="h-4 w-4" />
            Product Capabilities
          </div>

          <h2 id="features-title" className="text-3xl font-black tracking-tight md:text-4xl">
            Key Features
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            The core capabilities that define the product experience and
            translate the project goals into working functionality.
          </p>
        </div>

        <div className="flex w-fit items-center gap-2 rounded-full border border-blue-400/15 bg-blue-400/5 px-4 py-2 text-xs font-semibold text-blue-200">
          <Layers3 className="h-4 w-4" />
          {project.features.length} capabilities
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {project.features.map((feature, index) => (
          <motion.article
            key={feature}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            viewport={{ once: true, margin: "-50px" }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300/20 hover:bg-white/[0.05] md:p-6"
          >
            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-blue-400/70 via-cyan-400/20 to-transparent opacity-70" />

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-blue-300/15 bg-blue-300/5 text-blue-300">
                <CheckCircle2 className="h-5 w-5" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
                    Feature {String(index + 1).padStart(2, "0")}
                  </span>

                  <ArrowUpRight className="h-4 w-4 text-slate-700 transition-colors group-hover:text-blue-300" />
                </div>

                <h3 className="mt-2 text-lg font-bold text-white md:text-xl">
                  {feature}
                </h3>

                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-emerald-300">
                  <Zap className="h-3.5 w-3.5" />
                  Core product capability
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
            Product scope
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-200">
            {project.features.length} documented capabilities
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
            Experience
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-200">
            Built around the project goals
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
            Delivery
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-200">
            Designed for iterative improvement
          </p>
        </div>
      </div>
    </section>
  );
}
