"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types";

interface Props {
  projects: Project[];
}

export default function ProjectFilter({ projects }: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const technologies = useMemo(
    () => [
      "All",
      ...Array.from(
        new Set(projects.flatMap((project) => project.technologies))
      ),
    ],
    [projects]
  );

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch = project.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        project.technologies.includes(category);

      return matchesSearch && matchesCategory;
    });
  }, [projects, search, category]);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-md">
          <Search
            size={18}
            className="absolute left-3 top-3.5 text-gray-400"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects..."
            className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 outline-none focus:border-blue-500"
          />
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-xl border border-white/10 bg-black/30 px-4 py-3"
        >
          {technologies.map((tech) => (
            <option key={tech} value={tech}>
              {tech}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))
        ) : (
          <div className="col-span-full rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">
            <h3 className="text-xl font-bold">
              No Projects Found
            </h3>

            <p className="mt-2 text-gray-400">
              Try another search keyword or technology.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}