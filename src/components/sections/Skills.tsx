const skillCategories = [
  { title: "Frontend", skills: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS"] },
  { title: "Backend", skills: ["Node.js", "Express", "REST APIs"] },
  { title: "Database", skills: ["PostgreSQL", "Prisma", "MongoDB"] },
  { title: "Tools", skills: ["Git", "GitHub", "VS Code", "Figma"] },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24">
      <div className="reveal">
        <p className="section-kicker">Skills</p>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            The stack behind the builds.
          </h2>
          <p className="max-w-md text-sm leading-6 text-gray-500">
            Tools I use to turn ideas into fast, secure and maintainable products.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <article
              key={category.title}
              className="glass-card group p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                <span className="font-mono text-xs text-blue-300">0{index + 1}</span>
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