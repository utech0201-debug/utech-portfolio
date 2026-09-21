import { getGithubUsername, githubFetch } from "@/lib/github-client";

interface GithubProfileResponse {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

export async function getGithubProfile() {
  const username = getGithubUsername();
  const profile = await githubFetch<GithubProfileResponse>(
    `/users/${encodeURIComponent(username)}`
  );

  return {
    username: profile.login,
    name: profile.name ?? profile.login,
    avatar: profile.avatar_url,
    bio: profile.bio ?? "Full Stack Developer",
    repositories: profile.public_repos,
    followers: profile.followers,
    following: profile.following,
    profileUrl: profile.html_url,
  };
}
