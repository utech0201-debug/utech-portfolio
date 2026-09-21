import {
  getGithubUsername,
  githubFetch,
  githubGraphQL,
} from "@/lib/github-client";

interface LanguageMap {
  [key: string]: number;
}

interface GraphQLLanguageEdge {
  size: number;
  node: {
    name: string;
  } | null;
}

interface GraphQLRepository {
  languages: {
    edges: GraphQLLanguageEdge[];
  };
}

interface GraphQLResponse {
  user: {
    repositories: {
      pageInfo: {
        hasNextPage: boolean;
        endCursor: string | null;
      };
      nodes: GraphQLRepository[];
    };
  } | null;
}

const query = `
  query GetRepositoryLanguages($login: String!, $after: String) {
    user(login: $login) {
      repositories(
        first: 100
        after: $after
        ownerAffiliations: OWNER
        privacy: PUBLIC
        isFork: false
        orderBy: { field: UPDATED_AT, direction: DESC }
      ) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
            edges {
              size
              node {
                name
              }
            }
          }
        }
      }
    }
  }
`;

async function fetchLanguagesFromGraphQL(
  username: string
): Promise<LanguageMap> {
  const languages: LanguageMap = {};
  let after: string | null = null;

  do {
    const data: GraphQLResponse = await githubGraphQL<GraphQLResponse>(
      query,
      {
        login: username,
        after,
      }
    );

    const repositories: GraphQLResponse["user"]["repositories"] | null =
      data.user?.repositories ?? null;

    if (!repositories) {
      throw new Error("GitHub user or repository data not found");
    }

    for (const repository of repositories.nodes) {
      for (const edge of repository.languages.edges) {
        if (!edge.node?.name) continue;

        languages[edge.node.name] =
          (languages[edge.node.name] ?? 0) + edge.size;
      }
    }

    after = repositories.pageInfo.hasNextPage
      ? repositories.pageInfo.endCursor
      : null;
  } while (after);

  return languages;
}

async function fetchLanguagesFromRest(
  username: string
): Promise<LanguageMap> {
  const repos = await githubFetch<
    Array<{
      fork: boolean;
      language: string | null;
    }>
  >(
    `/users/${encodeURIComponent(username)}/repos?per_page=100&type=owner`
  );

  const languages: LanguageMap = {};

  for (const repo of repos) {
    if (repo.fork || !repo.language) continue;

    languages[repo.language] = (languages[repo.language] ?? 0) + 1;
  }

  return languages;
}

export async function getGithubLanguages() {
  const username = getGithubUsername();
  let languages: LanguageMap;

  try {
    languages = process.env.GITHUB_TOKEN
      ? await fetchLanguagesFromGraphQL(username)
      : await fetchLanguagesFromRest(username);
  } catch (error) {
    console.error("Failed to fetch GitHub language data:", error);
    languages = await fetchLanguagesFromRest(username);
  }

  const total = Object.values(languages).reduce(
    (sum, value) => sum + value,
    0
  );

  if (total === 0) return [];

  return Object.entries(languages)
    .map(([name, value]) => ({
      name,
      percentage: Math.round((value / total) * 100),
    }))
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 5);
}
