import { Terminal as TerminalIcon } from "lucide-react";

export default function Terminal() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="terminal-card overflow-hidden shadow-2xl shadow-blue-950/20">
        <div className="terminal-topbar flex items-center gap-3 px-5 py-4">
          <span className="terminal-dot bg-red-500" />
          <span className="terminal-dot bg-yellow-500" />
          <span className="terminal-dot bg-green-500" />
          <div className="ml-2 flex items-center gap-2 text-xs text-gray-400">
            <TerminalIcon size={15} />
            utech@portfolio: ~
          </div>
          <span className="ml-auto hidden font-mono text-[10px] uppercase tracking-[0.2em] text-green-400 sm:block">
            online
          </span>
        </div>

        <div className="grid gap-8 p-6 font-mono text-sm leading-7 text-gray-300 sm:p-8 lg:grid-cols-[1fr_auto]">
          <div className="space-y-5">
            <p><span className="text-blue-400">utech@portfolio</span>:~$ whoami</p>
            <p className="text-white">Utech — Full-Stack Developer & Cybersecurity Enthusiast</p>
            <p><span className="text-blue-400">utech@portfolio</span>:~$ skills</p>
            <p className="text-gray-300">Next.js • TypeScript • Tailwind • PostgreSQL • Linux • Cybersecurity</p>
            <p><span className="text-blue-400">utech@portfolio</span>:~$ status</p>
            <p className="text-green-300">Available for internships, freelance and collaborations ✓</p>
            <p><span className="text-blue-400">utech@portfolio</span>:~$ <span className="animate-pulse">█</span></p>
          </div>
          <div className="hidden min-w-44 rounded-2xl border border-green-400/10 bg-green-400/[0.03] p-5 text-xs text-green-300 lg:block">
            <p className="text-gray-500">SYSTEM</p>
            <p className="mt-2">STATUS  ONLINE</p>
            <p>STACK   FULL-STACK</p>
            <p>FOCUS   SECURITY</p>
            <p>MODE    BUILD</p>
          </div>
        </div>
      </div>
    </section>
  );
}