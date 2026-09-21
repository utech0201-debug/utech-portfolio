"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Box,
  CheckCircle2,
  Clock3,
  Code2,
  FileCode2,
  Gauge,
  Layers3,
} from "lucide-react";

import { Project } from "@/types/project";

interface Props {
  project: Project;
}

const iconMap = {
  Activity,
  Box,
  CheckCircle2,
  Clock3,
  Code2,
  FileCode2,
  Gauge,
  Layers3,
};

export default function ProjectStats({ project }: Props) {
  const defaultStats = [
    {
      label: "Lines of Code",
      value: project.stats.linesOfCode,
      icon: "Code2",
    },
    {
      label: "Components",
      value: project.stats.components.toString(),
      icon: "Box",
    },
    {
      label: "Files",
      value: project.stats.files.toString(),
      icon: "FileCode2",
    },
    {
      label: "Development",
      value: project.stats.duration,
      icon: "Clock3",
    },
    {
      label: "Performance",
      value: `${project.stats.performance}%`,
      icon: "Gauge",
      progress: project.stats.performance,
    },
    {
      label: "Version",
      value: project.stats.version,
      icon: "Layers3",
    },
  ];

  const stats = project.stats.metrics ?? defaultStats;
  const isActive = project.stats.duration.toLowerCase().includes("ongoing");

  return (
    <section className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl sm:p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                <Activity size={20} />
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-400">
                  Engineering Telemetry
                </p>
                <h2 className="mt-1 text-2xl font-black text-white sm:text-3xl">
                  Project Metrics
                </h2>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                {isActive ? "Active Build" : "Build Complete"}
              </span>

              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-medium text-gray-400">
                {project.stats.version}
              </span>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/5 pt-4 text-xs text-gray-500">
            <span>
              <span className="text-gray-300">Architecture:</span>{" "}
              {project.architecture.length} layers
            </span>
            <span>
              <span className="text-gray-300">Technology:</span>{" "}
              {project.technologies.length} stacks
            </span>
            <span>
              <span className="text-gray-300">Delivery:</span>{" "}
              {project.stats.duration}
            </span>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => {
            const Icon =
              iconMap[stat.icon as keyof typeof iconMap] ?? Activity;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:border-blue-500/20 hover:bg-white/[0.06]"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-500/10 blur-3xl transition group-hover:bg-blue-500/20" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/20 text-blue-400">
                      <Icon size={19} />
                    </div>

                    <span className="text-xs font-medium text-gray-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-6 text-2xl font-black tracking-tight text-white sm:text-3xl">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-sm text-gray-500">{stat.label}</p>

                  {stat.progress !== undefined && (
                    <div className="mt-5">
                      <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-600">
                        <span>Score</span>
                        <span>{stat.progress}%</span>
                      </div>

                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${stat.progress}%`,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.3,
                            ease: "easeOut",
                          }}
                          className="h-full rounded-full bg-blue-500"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
