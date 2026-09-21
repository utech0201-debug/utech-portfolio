import { getGithubLanguages } from "@/lib/github-languages";

export default async function GithubLanguages() {
  const languages = await getGithubLanguages();

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="glass-card p-7 sm:p-9">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-kicker">Stack telemetry</p>
            <h2 className="mt-2 text-3xl font-black text-white">Top technologies</h2>
          </div>
          <span className="font-mono text-xs text-gray-500">LIVE • GITHUB</span>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {languages.map((lang) => (
            <div key={lang.name} className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="mb-3 flex justify-between text-sm">
                <span className="font-medium text-gray-200">{lang.name}</span>
                <span className="font-mono text-blue-300">{lang.percentage}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-300"
                  style={{ width: `${lang.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}