import { getGithubUsername, githubGraphQL } from "@/lib/github-client";

interface ContributionCalendar {
  totalContributions: number;
  weeks: Array<{
    contributionDays: Array<{
      date: string;
      contributionCount: number;
    }>;
  }>;
}

interface GithubContributionResponse {
  user: {
    contributionsCollection: {
      contributionCalendar: ContributionCalendar;
    } | null;
  } | null;
}

export async function getGithubContributions(): Promise<ContributionCalendar> {
  const username = getGithubUsername();

  const query = `
    query GetContributions($login: String!) {
      user(login: $login) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const data = await githubGraphQL<GithubContributionResponse>(query, {
    login: username,
  });

  const calendar = data.user?.contributionsCollection?.contributionCalendar;

  if (!calendar) {
    throw new Error("GitHub contribution data unavailable");
  }

  return calendar;
}
