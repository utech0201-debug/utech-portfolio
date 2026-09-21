import { GraduationCap, ShieldCheck, Code2, Rocket } from "lucide-react";

const stats = [
  { title: "Projects", value: "15+", icon: Rocket },
  { title: "Technologies", value: "20+", icon: Code2 },
  { title: "Security Labs", value: "10+", icon: ShieldCheck },
  { title: "Learning", value: "Daily", icon: GraduationCap },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-28">
      <div className="reveal">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="section-kicker">About me</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl">
              Building modern digital experiences with security in mind.
            </h2>
          </div>
          <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 font-mono text-xs text-blue-300">
            GHANA • OPEN TO OPPORTUNITIES
          </span>
        </div>

        <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-400">
          I&apos;m Oscar Dziedzorm, also known as <strong className="text-white">Utech</strong>,
          a Full-Stack Developer and Cybersecurity enthusiast from Ghana. I enjoy
          building scalable applications, secure systems, interactive experiences,
          and learning modern software architecture.
        </p>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
        <article className="glass-card group p-8 sm:p-10">
          <div className="flex items-center gap-3">
            <span className="status-dot" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-300">
              developer.profile
            </p>
          </div>

          <h3 className="mt-7 text-2xl font-bold text-white">Who I am</h3>
          <p className="mt-5 leading-8 text-gray-400">
            I specialize in modern full-stack development with Next.js, React,
            TypeScript, Tailwind CSS, Node.js, Prisma and PostgreSQL. I&apos;m also
            passionate about Linux, networking, ethical hacking, penetration
            testing and application security.
          </p>

          <div className="terminal-card mt-8 overflow-hidden">
            <div className="terminal-topbar flex items-center gap-2 px-5 py-3">
              <span className="terminal-dot bg-red-500" />
              <span className="terminal-dot bg-yellow-500" />
              <span className="terminal-dot bg-green-500" />
              <span className="ml-2 font-mono text-xs text-gray-500">developer.ts</span>
            </div>
            <div className="overflow-x-auto p-5 font-mono text-xs leading-7 text-green-300 sm:text-sm">
              <p><span className="text-blue-400">const</span> developer = {"{"}</p>
              <p className="pl-4">name: <span className="text-amber-300">&quot;Utech&quot;</span>,</p>
              <p className="pl-4">role: <span className="text-amber-300">&quot;Full-Stack Developer&quot;</span>,</p>
              <p className="pl-4">focus: [<span className="text-amber-300">&quot;Software&quot;</span>, <span className="text-amber-300">&quot;AI&quot;</span>, <span className="text-amber-300">&quot;Cybersecurity&quot;</span>],</p>
              <p className="pl-4">mindset: <span className="text-amber-300">&quot;Build. Learn. Secure.&quot;</span></p>
              <p>{"}"}</p>
            </div>
          </div>
        </article>

        <div className="grid gap-5 sm:grid-cols-2">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="glass-card group p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-400/[0.07]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10">
                  <Icon className="text-blue-300" size={22} />
                </div>
                <h3 className="mt-7 text-4xl font-black text-white">{item.value}</h3>
                <p className="mt-2 text-sm text-gray-400">{item.title}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}