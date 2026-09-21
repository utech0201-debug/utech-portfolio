import {
  CheckCircle2,
  Database,
  Globe2,
  KeyRound,
  LockKeyhole,
  Network,
  Server,
  ShieldCheck,
} from "lucide-react";

import { Project } from "@/types/project";

interface Props {
  project: Project;
}

interface Consideration {
  title: string;
  description: string;
  icon: typeof ShieldCheck;
}

function getConsiderations(project: Project): Consideration[] {
  const technologies = project.technologies.map((tech) => tech.toLowerCase());
  const has = (keywords: string[]) =>
    technologies.some((tech) => keywords.some((keyword) => tech.includes(keyword)));

  const considerations: Consideration[] = [];

  if (has(["supabase", "postgresql", "prisma", "database"])) {
    considerations.push({
      title: "Data protection",
      description:
        "Keep database credentials and privileged operations on the server, expose only the data the client needs, and enforce least-privilege access.",
      icon: Database,
    });
  }

  if (has(["next.js", "server actions", "api", "rest"])) {
    considerations.push({
      title: "Input & authorization",
      description:
        "Validate untrusted input at application boundaries and enforce authorization before sensitive server-side mutations or data access.",
      icon: Server,
    });
  }

  if (has(["e-commerce", "payment", "mobile money", "checkout"])) {
    considerations.push({
      title: "Payment boundaries",
      description:
        "Treat checkout and payment flows as security-sensitive paths and keep payment credentials and provider secrets outside the client.",
      icon: KeyRound,
    });
  }

  if (has(["networking", "kali linux", "nmap", "wireshark"])) {
    considerations.push({
      title: "Controlled security lab",
      description:
        "Keep security experiments inside isolated, authorized environments and separate lab traffic from production systems.",
      icon: Network,
    });
  }

  considerations.push({
    title: "Transport & secrets",
    description:
      "Use HTTPS, secure secret storage, dependency updates, and narrowly scoped credentials as the project moves toward production.",
    icon: Globe2,
  });

  considerations.push({
    title: "Security by design",
    description:
      "Treat security as an ongoing engineering concern across the interface, application, data, deployment, and operational layers.",
    icon: LockKeyhole,
  });

  return considerations;
}

export default function ProjectSecurity({ project }: Props) {
  const considerations = getConsiderations(project);

  return (
    <section className="py-12" aria-labelledby="project-security-title">
      <div className="relative overflow-hidden rounded-[2rem] border border-emerald-400/15 bg-emerald-500/[0.035] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-emerald-400">
              Engineering & Security
            </p>
            <h2
              id="project-security-title"
              className="text-3xl font-black tracking-tight text-white md:text-4xl"
            >
              Security considerations
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400 md:text-base">
              Practical safeguards mapped to this project&apos;s architecture,
              technologies, and path toward production.
            </p>
          </div>

          <div className="flex w-fit items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-200">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            {considerations.length} security controls
          </div>
        </div>

        <div className="relative mt-8 grid gap-4 md:grid-cols-2">
          {considerations.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-slate-950/45 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/20 hover:bg-slate-950/65"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-400/15 bg-emerald-500/10 text-emerald-400">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-bold text-white">{item.title}</h3>
                      <span className="text-xs font-bold text-slate-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-400/60">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Engineering safeguard
                </div>
              </article>
            );
          })}
        </div>

        <div className="relative mt-6 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              Security posture
            </p>
            <p className="mt-2 text-sm font-semibold text-white">
              Security-aware architecture with production hardening in mind.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-400">
            <ShieldCheck className="h-4 w-4" />
            Continuous consideration
          </div>
        </div>
      </div>
    </section>
  );
}
