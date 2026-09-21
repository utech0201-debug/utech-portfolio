import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { getGithubProfile } from "@/lib/github-profile";

export default async function GithubProfile() {
  const profile = await getGithubProfile();

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="glass-card overflow-hidden p-6 sm:p-8 md:p-10">
        <div className="flex flex-col gap-7 md:flex-row md:items-center">
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-blue-500/15 blur-xl" />
            <Image
              src={profile.avatar}
              alt={profile.name ?? "GitHub Profile"}
              width={112}
              height={112}
              className="relative rounded-full border border-white/15 shadow-xl"
            />
          </div>

          <div className="min-w-0 flex-1 text-center md:text-left">
            <p className="section-kicker">Live GitHub profile</p>
            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">{profile.name}</h2>
            <p className="mt-1 font-mono text-sm text-blue-300">@{profile.username}</p>
            <p className="mt-4 max-w-2xl text-gray-400">{profile.bio}</p>
          </div>

          <a
            href={profile.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-black transition hover:-translate-y-0.5 hover:bg-gray-200"
          >
            <SiGithub size={18} />
            GitHub
          </a>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <StatCard value={profile.repositories} label="Repositories" />
          <StatCard value={profile.followers} label="Followers" />
          <StatCard value={profile.following} label="Following" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label }: { value: number; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
      <p className="text-3xl font-black text-white">{value}</p>
      <p className="mt-1 text-sm text-gray-500">{label}</p>
    </div>
  );
}