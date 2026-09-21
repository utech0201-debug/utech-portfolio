import { getGithubUsername, githubFetch } from "@/lib/github-client";

type GithubRepo = {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  fork: boolean;
};

export async function getGithubRepositories() {
  const username = getGithubUsername();
  const repos = await githubFetch<GithubRepo[]>(
    `/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=12`,
    { next: { revalidate: 1800 } }
  );

  return repos.filter((repo) => !repo.fork);
}
