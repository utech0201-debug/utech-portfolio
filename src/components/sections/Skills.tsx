const skillCategories = [
  {
    title: "Frontend",
    description: "Interfaces, motion and responsive product experiences.",
    skills: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    description: "Application logic, APIs and server-side workflows.",
    skills: ["Node.js", "Express", "REST APIs"],
  },
  {
    title: "Data",
    description: "Structured data, persistence and application modeling.",
    skills: ["PostgreSQL", "Prisma", "MongoDB"],
  },
  {
    title: "Tools",
    description: "The workflow I use to ship, debug and iterate.",
    skills: ["Git", "GitHub", "VS Code", "Figma"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24">
      <div className="reveal">
        <p className="section-kicker">Skills</p>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              The stack behind the builds.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
              A practical toolkit for turning ideas into fast, secure and maintainable products.
            </p>
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-gray-500">
            04 / CORE AREAS
          </span>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <article
              key={category.title}
              className="glass-card group p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-300">
                    0{index + 1} / stack
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-white">{category.title}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
                    {category.description}
                  </p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] text-gray-500">
                  {category.skills.length} tools
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm text-gray-300 transition hover:border-blue-400/30 hover:bg-blue-400/10 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}