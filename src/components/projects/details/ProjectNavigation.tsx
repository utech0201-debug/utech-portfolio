import Link from "next/link";
import { ArrowLeft, ArrowRight, Radio } from "lucide-react";

import { projects } from "@/data/projects";

interface Props {
  currentSlug: string;
}

function isLiveProject(slug: string) {
  return slug === "utech-learning-hub" || slug === "utech-portfolio";
}

export default function ProjectNavigation({ currentSlug }: Props) {
  const index = projects.findIndex((project) => project.slug === currentSlug);

  if (index === -1) return null;

  const previous = projects[index - 1];
  const next = projects[index + 1];

  return (
    <nav aria-label="Project navigation" className="border-t border-white/10 pt-14">
      <div className="mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">
          Continue exploring
        </p>
        <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
          More from the Utech portfolio
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {previous ? (
          <Link
            href={`/projects/${previous.slug}`}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.055] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl transition group-hover:bg-blue-500/20" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                <ArrowLeft size={14} aria-hidden="true" />
                Previous project
              </span>

              <div className="mt-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-medium text-gray-500">
                    {isLiveProject(previous.slug) ? "Live build" : "Case study"}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-white transition group-hover:text-blue-300">
                    {previous.title}
                  </h3>
                </div>

                {isLiveProject(previous.slug) && (
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                    <Radio size={10} aria-hidden="true" />
                    Live
                  </span>
                )}
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-400">
                Open case study
                <ArrowLeft
                  size={16}
                  className="rotate-180 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </div>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {next && (
          <Link
            href={`/projects/${next.slug}`}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 text-left backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.055] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:text-right"
          >
            <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl transition group-hover:bg-blue-500/20" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                Next project
                <ArrowRight size={14} aria-hidden="true" />
              </span>

              <div className="mt-6 flex items-end justify-between gap-4 sm:flex-row-reverse">
                <div>
                  <p className="text-xs font-medium text-gray-500">
                    {isLiveProject(next.slug) ? "Live build" : "Case study"}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-white transition group-hover:text-blue-300">
                    {next.title}
                  </h3>
                </div>

                {isLiveProject(next.slug) && (
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                    <Radio size={10} aria-hidden="true" />
                    Live
                  </span>
                )}
              </div>

              <div className="mt-6 flex items-center justify-end gap-2 text-sm font-semibold text-blue-400">
                Open case study
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </div>
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
}
