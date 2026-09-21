"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  CircleDot,
  Rocket,
  Sparkles,
  Target,
} from "lucide-react";

import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectFuture({ project }: Props) {
  return (
    <section className="py-20" aria-labelledby="future-title">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">
            <Rocket className="h-4 w-4" />
            Product Roadmap
          </div>

          <h2 id="future-title" className="text-3xl font-black tracking-tight md:text-4xl">
            Future Improvements
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            The next engineering milestones that could expand the project,
            improve its production readiness, or unlock new capabilities.
          </p>
        </div>

        <div className="flex w-fit items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/5 px-4 py-2 text-xs font-semibold text-emerald-200">
          <Target className="h-4 w-4" />
          {project.futurePlans.length} roadmap items
        </div>
      </div>

      <div className="relative">
        <div className="absolute bottom-6 left-[23px] top-6 hidden w-px bg-gradient-to-b from-emerald-400/50 via-cyan-400/20 to-transparent md:block" />

        <div className="grid gap-4">
          {project.futurePlans.map((plan, index) => (
            <motion.article
              key={plan}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/20 hover:bg-white/[0.05] md:ml-0 md:p-6"
            >
              <div className="flex gap-4 md:gap-5">
                <div className="relative z-10 flex shrink-0 flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/15 bg-emerald-300/5 text-emerald-300">
                    {index === 0 ? (
                      <Sparkles className="h-5 w-5" />
                    ) : (
                      <CircleDot className="h-5 w-5" />
                    )}
                  </div>

                  <span className="mt-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-300">
                      {index === 0 ? "Next priority" : "Roadmap"}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-slate-600" />
                    <span className="text-xs text-slate-500">
                      Milestone {index + 1}
                    </span>
                  </div>

                  <h3 className="mt-2 text-lg font-bold text-white md:text-xl">
                    {plan}
                  </h3>

                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-400">
                    <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                    Planned engineering improvement
                  </div>
                </div>

                <ArrowUpRight className="hidden h-5 w-5 shrink-0 text-slate-600 transition-colors group-hover:text-emerald-300 md:block" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-cyan-400/10 bg-cyan-400/[0.03] p-5 md:p-6">
        <div className="flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/5 text-cyan-300">
            <Target className="h-5 w-5" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
              Roadmap mindset
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Each item represents a possible next step rather than a promise
              of delivery. The roadmap can evolve as the project requirements,
              architecture, and learning goals change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
