"use client";

import ProjectFilter from "./ProjectFilter";
import { projects } from "@/data/projects";

export default function ProjectGrid() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-28">
      <div className="flex flex-col gap-5 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
        <div>
          <p className="section-kicker">Selected work</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Projects built to solve real problems.
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-gray-500">
          Applications, experiments and systems I&apos;ve designed, developed and
          shipped while learning modern software engineering.
        </p>
      </div>

      <div className="mt-12">
        <ProjectFilter projects={projects} />
      </div>
    </section>
  );
}