const username = process.env.GITHUB_USERNAME;
const token = process.env.GITHUB_TOKEN;

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
  if (!username) {
    throw new Error("GITHUB_USERNAME is missing in environment variables");
  }

  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=12`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      next: { revalidate: 1800 },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch repositories");
  }

  const repos: GithubRepo[] = await response.json();

  return repos.filter((repo) => !repo.fork);
}
