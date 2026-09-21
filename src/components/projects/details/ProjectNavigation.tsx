import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

interface Props { currentSlug: string; }

export default function ProjectNavigation({ currentSlug }: Props) {
  const index = projects.findIndex((project) => project.slug === currentSlug);
  if (index === -1) return null;
  const previous = projects[index - 1];
  const next = projects[index + 1];

  return (
    <nav aria-label="Project navigation" className="grid gap-4 border-t border-white/10 pt-10 sm:grid-cols-2">
      {previous ? (
        <Link href={"/projects/" + previous.slug} className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-blue-500/20 hover:bg-white/[0.055]">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500"><ArrowLeft size={14} /> Previous project</span>
          <span className="mt-3 block text-lg font-bold text-white">{previous.title}</span>
        </Link>
      ) : <div />}
      {next ? (
        <Link href={"/projects/" + next.slug} className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 text-left transition hover:-translate-y-1 hover:border-blue-500/20 hover:bg-white/[0.055] sm:text-right">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Next project <ArrowRight size={14} /></span>
          <span className="mt-3 block text-lg font-bold text-white">{next.title}</span>
        </Link>
      ) : null}
    </nav>
  );
}
