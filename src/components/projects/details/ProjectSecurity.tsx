import { LockKeyhole, ShieldCheck } from "lucide-react";
import { Project } from "@/types/project";

interface Props { project: Project; }

function getConsiderations(project: Project) {
  const considerations: string[] = [];
  if (project.technologies.some((tech) => ["Supabase", "PostgreSQL", "Prisma"].includes(tech))) considerations.push("Keep database credentials and privileged operations on the server; expose only the data the client needs.");
  if (project.technologies.some((tech) => ["Next.js", "Server Actions", "REST-style API Structure"].includes(tech))) considerations.push("Validate untrusted input at application boundaries and enforce authorization before sensitive server-side mutations.");
  if (project.technologies.some((tech) => ["E-commerce", "Mobile Money Integration", "Production Payments"].includes(tech))) considerations.push("Treat checkout and payment flows as security-sensitive paths and avoid storing payment credentials in the application.");
  if (project.technologies.some((tech) => ["Networking", "Kali Linux", "Nmap", "Wireshark"].includes(tech))) considerations.push("Keep security experiments inside controlled environments and separate lab traffic from production systems.");
  considerations.push("Use HTTPS, secure secrets management, dependency updates, and least-privilege access as the project moves toward production.");
  return considerations;
}

export default function ProjectSecurity({ project }: Props) {
  return (
    <section className="py-10">
      <div className="rounded-[2rem] border border-emerald-500/15 bg-emerald-500/[0.04] p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">Engineering & security</p>
            <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">Security considerations</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-400">Practical safeguards relevant to the project architecture and its path toward production.</p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400"><ShieldCheck size={22} /></div>
        </div>
        <div className="mt-7 grid gap-3 md:grid-cols-2">
          {getConsiderations(project).map((item) => (
            <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-black/10 p-4">
              <LockKeyhole className="mt-0.5 shrink-0 text-emerald-400" size={18} />
              <p className="text-sm leading-6 text-gray-300">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
