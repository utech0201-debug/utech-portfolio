"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Box,
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

export default function ProjectStats({ project }: Props) {
  const stats = [
    {
      label: "Lines of Code",
      value: project.stats.linesOfCode,
      icon: Code2,
    },
    {
      label: "Components",
      value: project.stats.components.toString(),
      icon: Box,
    },
    {
      label: "Files",
      value: project.stats.files.toString(),
      icon: FileCode2,
    },
    {
      label: "Development",
      value: project.stats.duration,
      icon: Clock3,
    },
    {
      label: "Performance",
      value: `${project.stats.performance}%`,
      icon: Gauge,
    },
    {
      label: "Version",
      value: project.stats.version,
      icon: Layers3,
    },
  ];

  return (
    <section className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="mb-8 flex items-center gap-3">
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-blue-500/20
              bg-blue-500/10
              text-blue-400
            "
          >
            <Activity size={20} />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              Engineering
            </p>

            <h2 className="mt-1 text-2xl font-black text-white sm:text-3xl">
              Project Metrics
            </h2>
          </div>
        </div>

        {/* Metrics */}
        <div
          className="
            grid
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;

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
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-6
                  backdrop-blur-xl
                  transition
                  hover:border-blue-500/20
                  hover:bg-white/[0.06]
                "
              >
                {/* Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-8
                    -top-8
                    h-24
                    w-24
                    rounded-full
                    bg-blue-500/10
                    blur-3xl
                    transition
                    group-hover:bg-blue-500/20
                  "
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/10
                        bg-black/20
                        text-blue-400
                      "
                    >
                      <Icon size={19} />
                    </div>

                    <span className="text-xs font-medium text-gray-600">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="mt-6 text-2xl font-black tracking-tight text-white sm:text-3xl">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    {stat.label}
                  </p>

                  {/* Performance bar */}
                  {stat.label === "Performance" && (
                    <div className="mt-5">
                      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${project.stats.performance}%`,
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
