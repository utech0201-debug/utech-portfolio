import { getGithubContributions } from "@/lib/github-contributions";

export default async function GithubActivity() {
  const activity = await getGithubContributions();

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="glass-card p-7 sm:p-9">
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className="section-kicker">GitHub activity</p>
            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">Coding consistency</h2>
          </div>
          <div className="rounded-2xl border border-green-400/10 bg-green-400/5 px-5 py-3 text-center">
            <p className="text-3xl font-black text-green-300">{activity.totalContributions}</p>
            <p className="text-xs text-gray-500">contributions this year</p>
          </div>
        </div>

        <div className="mt-9 overflow-x-auto pb-2">
          <div className="grid min-w-[760px] grid-cols-7 gap-1.5">
            {activity.weeks
              .flatMap((week: { contributionDays: { date: string; contributionCount: number }[] }) => week.contributionDays)
              .map((day: { date: string; contributionCount: number }) => (
                <div
                  key={day.date}
                  title={`${day.date}: ${day.contributionCount} contributions`}
                  className={`h-3.5 rounded-[3px] ${day.contributionCount === 0 ? "bg-white/10" : day.contributionCount < 3 ? "bg-green-500/40" : day.contributionCount < 6 ? "bg-green-500/70" : "bg-green-400"}`}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}