import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, FolderGit2, Radio, Sparkles } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Project } from "@/types/project";
import ProjectPreview from "@/components/projects/ProjectPreview";

interface Props { project: Project; }

function hasCustomPreview(slug: string) {
  return slug === "utech-learning-hub";
}

export default function ProjectHero({ project }: Props) {
  return (
    <section className="pb-10">
      <Link href="/#projects" className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white">
        <ArrowLeft size={17} /> Back to Projects
      </Link>
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/30">
        <div className="relative aspect-[16/8] overflow-hidden border-b border-white/10 bg-[#050a14]">
          {hasCustomPreview(project.slug) ? (
            <ProjectPreview variant="learning" />
          ) : (
            <>
              <Image src={project.image} alt={project.title + " project preview"} fill priority sizes="(max-width: 1280px) 100vw, 1152px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
            </>
          )}
          <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs font-medium text-gray-200 backdrop-blur-xl">
            <Radio size={13} className="text-emerald-400" /> {project.demo ? "Live project" : "Project case study"}
          </div>
        </div>
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-300"><Sparkles size={14} /> Project Case Study</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-400"><FolderGit2 size={14} /> {project.stats.version}</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-400">{project.stats.duration}</span>
          </div>
          <h1 className="mt-6 max-w-5xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">{project.title}</h1>
          <p className="mt-5 max-w-4xl text-base leading-8 text-gray-400 sm:text-lg">{project.overview}</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">Objective</p>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-gray-300">{project.description}</p>
            </div>
            {(project.demo || project.github) && (
              <div className="flex flex-wrap gap-3">
                {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500"><ExternalLink size={17} /> Live Demo</a>}
                {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"><SiGithub size={17} /> View Source</a>}
              </div>
            )}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((technology) => <span key={technology} className="rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1.5 text-xs font-medium text-blue-300">{technology}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
