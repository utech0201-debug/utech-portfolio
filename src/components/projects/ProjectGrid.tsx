"use client";

import ProjectFilter from "./ProjectFilter";
import { projects } from "@/data/projects";

export default function ProjectGrid() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="text-center">
        <p className="font-semibold uppercase text-blue-500">
          Projects
        </p>

        <h2 className="mt-3 text-4xl font-black">
          Featured Work
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-gray-400">
          Explore my latest applications, experiments,
          and development projects.
        </p>
      </div>

      <div className="mt-12">
        <ProjectFilter projects={projects} />
      </div>
    </section>
  );
}