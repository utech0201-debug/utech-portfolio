const username = process.env.GITHUB_USERNAME;
const token = process.env.GITHUB_TOKEN;

export async function getGithubProfile() {
  if (!username) {
    throw new Error("GITHUB_USERNAME is missing in environment variables");
  }

  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Accept: "application/vnd.github+json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub profile");
  }

  const profile = await response.json();

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
