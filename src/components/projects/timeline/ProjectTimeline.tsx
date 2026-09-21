"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Code2,
  Database,
  FlaskConical,
  Rocket,
  Search,
  Settings2,
} from "lucide-react";

interface Props {
  timeline: string[];
}

const stageIcons = [
  Search,
  Settings2,
  Database,
  Code2,
  FlaskConical,
  Rocket,
  CheckCircle2,
];

const stageLabels = [
  "Discovery",
  "Foundation",
  "Architecture",
  "Development",
  "Validation",
  "Deployment",
  "Iteration",
];

export default function ProjectTimeline({ timeline }: Props) {
  return (
    <section className="mt-24">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
          Engineering Lifecycle
        </p>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
          Development Timeline
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
          A visual record of how the project moved from an initial idea through
          implementation, validation, and its current stage.
        </p>
      </motion.div>

      <div className="relative mx-auto max-w-4xl">
        <div
          aria-hidden="true"
          className="absolute bottom-5 left-[1.45rem] top-5 w-px bg-gradient-to-b from-blue-500/70 via-cyan-400/50 to-violet-500/30 sm:left-1/2 sm:-translate-x-1/2"
        />

        <div className="space-y-6 sm:space-y-8">
          {timeline.map((step, index) => {
            const Icon = stageIcons[index % stageIcons.length];
            const stage = stageLabels[index % stageLabels.length];
            const isCurrent = index === timeline.length - 1;
            const isEven = index % 2 === 0;

            const cardClass = isCurrent
              ? "group relative rounded-2xl border border-blue-500/30 bg-blue-500/[0.07] p-5 shadow-lg shadow-blue-950/20 backdrop-blur-xl transition sm:p-6"
              : "group relative rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition hover:border-blue-500/20 hover:bg-white/[0.055] sm:p-6";

            return (
              <motion.div
                key={step + "-" + index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="relative sm:grid sm:grid-cols-2 sm:gap-10"
              >
                <div
                  aria-hidden="true"
                  className={
                    "hidden sm:block " + (isEven ? "" : "col-start-2")
                  }
                />

                <div
                  className={
                    "relative pl-16 sm:pl-0 " +
                    (isEven
                      ? "sm:col-start-1 sm:row-start-1 sm:text-right"
                      : "sm:col-start-2 sm:row-start-1")
                  }
                >
                  <div className={cardClass}>
                    <div
                      className={
                        "mb-4 flex items-center gap-3 " +
                        (isEven ? "sm:justify-end" : "")
                      }
                    >
                      <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-500">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-400">
                        {stage}
                      </span>
                      {isCurrent && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-300">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                          Current
                        </span>
                      )}
                    </div>

                    <div
                      className={
                        "flex items-center gap-3 " +
                        (isEven ? "sm:flex-row-reverse" : "")
                      }
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition group-hover:border-blue-400/30 group-hover:bg-blue-500/15">
                        <Icon size={19} />
                      </div>
                      <p className="text-base font-bold text-white sm:text-lg">
                        {step}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  aria-hidden="true"
                  className="absolute left-0 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/30 bg-[#030712] shadow-lg shadow-blue-950/30 sm:left-1/2 sm:-translate-x-1/2"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/15 text-blue-400">
                    <Icon size={15} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
