import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  return (
    <section
      id="projects"
      className="
      mx-auto
      max-w-7xl
      px-6
      py-24
      "
    >

      <p className="text-blue-500 font-semibold uppercase">
        Projects
      </p>


      <h2 className="
        mt-3
        text-4xl
        font-bold
      ">
        Featured Work
      </h2>


      <div className="
        mt-12
        grid
        gap-8
        md:grid-cols-2
        lg:grid-cols-3
      ">

        {projects.map((project)=>(
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}

      </div>

    </section>
  );
}