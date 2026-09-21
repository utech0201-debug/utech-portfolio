"use client";

import { motion } from "framer-motion";
import {
  Braces,
  CheckCircle2,
  Code2,
  Database,
  Layers3,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
} from "lucide-react";

import { Project } from "@/types/project";

interface Props {
  project: Project;
}

const iconMap = [
  { match: ["next", "react", "vite", "html", "css"], icon: Code2 },
  { match: ["typescript", "javascript", "python", "java"], icon: Braces },
  { match: ["supabase", "postgres", "prisma", "mysql", "database"], icon: Database },
  { match: ["tailwind", "framer", "lucide"], icon: Layers3 },
  { match: ["linux", "kali", "network", "wireshark", "nmap"], icon: Network },
  { match: ["security", "cyber", "auth"], icon: ShieldCheck },
  { match: ["node", "server", "api", "vercel"], icon: Server },
];

function getTechnologyIcon(technology: string, index: number) {
  const normalized = technology.toLowerCase();
  const match = iconMap.find(({ match }) =>
    match.some((keyword) => normalized.includes(keyword)),
  );

  if (match) return match.icon;
  return index % 2 === 0 ? TerminalSquare : Sparkles;
}

export default function ProjectTechStack({ project }: Props) {
  return (
    <section
      className="py-20"
      aria-labelledby="technology-stack-title"
    >
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-blue-400">
            Engineering Stack
          </p>
          <h2
            id="technology-stack-title"
            className="text-3xl font-black tracking-tight text-white md:text-4xl"
          >
            Technology Stack
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-400 md:text-base">
            The tools and technologies selected to shape the product, its
            architecture, and the engineering workflow behind it.
          </p>
        </div>

        <div className="flex w-fit items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-200">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          {project.technologies.length} technologies
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {project.technologies.map((tech, index) => {
          const Icon = getTechnologyIcon(tech, index);

          return (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-[0_18px_60px_rgba(2,8,23,0.25)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] via-transparent to-cyan-400/[0.04] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-300 transition-colors group-hover:border-blue-400/40 group-hover:bg-blue-500/15">
                  <Icon className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-base font-bold text-white">
                    {tech}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                    Stack component
                  </p>
                </div>

                <span className="ml-auto self-start text-xs font-bold text-slate-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="relative mt-5 h-px bg-white/5">
                <div className="h-px w-1/3 bg-gradient-to-r from-blue-400/70 to-transparent transition-all duration-500 group-hover:w-2/3" />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            Stack Size
          </p>
          <p className="mt-2 text-2xl font-black text-white">
            {project.technologies.length}
          </p>
          <p className="mt-1 text-sm text-slate-500">
            technologies documented
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            Architecture
          </p>
          <p className="mt-2 text-2xl font-black text-white">
            {project.architecture.length}
          </p>
          <p className="mt-1 text-sm text-slate-500">
            system layers mapped
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-400/10 bg-emerald-500/[0.035] p-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400/70">
            Engineering Focus
          </p>
          <p className="mt-2 flex items-center gap-2 text-lg font-black text-white">
            <Sparkles className="h-4 w-4 text-emerald-400" />
            Purpose-built stack
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Selected around the project&apos;s goals and constraints
          </p>
        </div>
      </div>
    </section>
  );
}
