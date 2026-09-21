"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  CheckCircle2,
  ChevronRight,
  Code2,
  Database,
  Globe2,
  Layers3,
  Network,
  Server,
  ShieldCheck,
} from "lucide-react";

import { Project } from "@/types/project";

interface Props {
  project: Project;
}

const layerMeta = [
  {
    icon: Globe2,
    label: "Interface",
    description:
      "The presentation layer responsible for the user-facing experience, navigation, responsive layouts, and interaction patterns.",
  },
  {
    icon: Layers3,
    label: "Application",
    description:
      "The application layer where reusable components, business flows, route logic, and server/client boundaries come together.",
  },
  {
    icon: Server,
    label: "Service",
    description:
      "The service layer handles APIs, server actions, external integrations, validation, and application-side operations.",
  },
  {
    icon: Database,
    label: "Data",
    description:
      "The persistence layer manages structured data, queries, models, content, and the systems that support the application.",
  },
  {
    icon: ShieldCheck,
    label: "Security",
    description:
      "Security controls protect application boundaries, secrets, data access, validation, and controlled development environments.",
  },
];

function getLayerMeta(step: string, index: number) {
  const normalized = step.toLowerCase();

  if (
    normalized.includes("database") ||
    normalized.includes("supabase") ||
    normalized.includes("prisma") ||
    normalized.includes("postgres")
  ) {
    return layerMeta[3];
  }

  if (
    normalized.includes("server") ||
    normalized.includes("api") ||
    normalized.includes("action") ||
    normalized.includes("service")
  ) {
    return layerMeta[2];
  }

  if (
    normalized.includes("react") ||
    normalized.includes("component") ||
    normalized.includes("vite") ||
    normalized.includes("ui") ||
    normalized.includes("frontend")
  ) {
    return layerMeta[0];
  }

  if (
    normalized.includes("security") ||
    normalized.includes("network") ||
    normalized.includes("private")
  ) {
    return layerMeta[4];
  }

  if (index === 0) return layerMeta[0];
  if (index === 1) return layerMeta[1];
  return layerMeta[Math.min(index + 1, layerMeta.length - 1)];
}

export default function ProjectArchitecture({ project }: Props) {
  return (
    <section className="py-20" aria-labelledby="architecture-title">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">
            <Network className="h-4 w-4" />
            Engineering Blueprint
          </div>

          <h2 id="architecture-title" className="text-3xl font-black tracking-tight md:text-4xl">
            System Architecture
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            How the major technical layers fit together to turn this project
            from an idea into a working system.
          </p>
        </div>

        <div className="flex w-fit items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/5 px-4 py-2 text-xs font-semibold text-cyan-200">
          <Boxes className="h-4 w-4" />
          {project.architecture.length} architecture layers
        </div>
      </div>

      <div className="mb-8 hidden items-center justify-center md:flex">
        {project.architecture.map((step, index) => {
          const meta = getLayerMeta(step, index);
          const Icon = meta.icon;

          return (
            <div key={step} className="flex items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/80 shadow-[0_0_30px_rgba(34,211,238,0.06)]"
                title={step}
              >
                <Icon className="h-6 w-6 text-cyan-300" />
              </motion.div>

              {index < project.architecture.length - 1 && (
                <ChevronRight className="mx-2 h-4 w-4 text-slate-600" />
              )}
            </div>
          );
        })}
      </div>

      <div className="grid gap-4">
        {project.architecture.map((step, index) => {
          const meta = getLayerMeta(step, index);
          const Icon = meta.icon;

          return (
            <motion.article
              key={step}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-60px" }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/20 hover:bg-white/[0.05] md:p-6"
            >
              <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-cyan-400/70 via-blue-500/20 to-transparent opacity-70" />

              <div className="flex gap-4 md:gap-5">
                <div className="flex shrink-0 flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/5 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="mt-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-300">
                      {meta.label}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-slate-600" />
                    <span className="text-xs text-slate-500">Layer {index + 1}</span>
                  </div>

                  <h3 className="mt-2 text-lg font-bold text-white md:text-xl">
                    {step}
                  </h3>

                  <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                    {meta.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-emerald-300">
                    <CheckCircle2 className="h-4 w-4" />
                    Integrated into the project architecture
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[
          {
            icon: Code2,
            label: "Implementation",
            value: project.technologies.length + " technologies",
          },
          {
            icon: Layers3,
            label: "Structure",
            value: project.architecture.length + " layers",
          },
          {
            icon: ShieldCheck,
            label: "Engineering",
            value: "Security-aware design",
          },
        ].map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-slate-950/50 p-4"
            >
              <div className="flex items-center gap-3">
                <Icon className="h-4 w-4 text-blue-300" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-200">
                    {item.value}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
