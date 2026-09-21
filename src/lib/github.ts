import { getGithubUsername, githubFetch } from "@/lib/github-client";

export interface GithubProject {
  id: number;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
}

interface Repository {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  fork: boolean;
}

export async function getGithubProjects(): Promise<GithubProject[]> {
  const username = getGithubUsername();
  const repos = await githubFetch<Repository[]>(
    `/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=12`
  );

  return repos
    .filter((repo) => !repo.fork)
    .map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description ?? "No description available",
      language: repo.language ?? "Other",
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      url: repo.html_url,
    }));
}
