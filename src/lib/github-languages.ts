const username = process.env.GITHUB_USERNAME;
const token = process.env.GITHUB_TOKEN;

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
  data?: {
    user?: {
      repositories: {
        pageInfo: {
          hasNextPage: boolean;
          endCursor: string | null;
        };
        nodes: GraphQLRepository[];
      };
    } | null;
  };
  errors?: Array<{ message: string }>;
}

const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";

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

async function fetchLanguagesFromGraphQL(): Promise<LanguageMap> {
  if (!token) {
    throw new Error("GITHUB_TOKEN missing");
  }

  const languages: LanguageMap = {};
  let after: string | null = null;

  do {
    const response = await fetch(GITHUB_GRAPHQL_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          login: username,
          after,
        },
      }),
      cache: "force-cache",
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`GitHub GraphQL request failed: ${response.status}`);
    }

    const result = (await response.json()) as GraphQLResponse;

    if (result.errors?.length) {
      throw new Error(
        `GitHub GraphQL error: ${result.errors[0].message}`
      );
    }

    const repositories = result.data?.user?.repositories;

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

async function fetchLanguagesFromRest(): Promise<LanguageMap> {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100&type=owner`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    throw new Error("Failed fetching repositories");
  }

  const repos = await response.json();
  const languages: LanguageMap = {};

  for (const repo of repos) {
    if (repo.fork || !repo.language) continue;

    languages[repo.language] = (languages[repo.language] ?? 0) + 1;
  }

  return languages;
}

export async function getGithubLanguages() {
  if (!username) {
    throw new Error("GITHUB_USERNAME missing");
  }

  let languages: LanguageMap;

  try {
    languages = token
      ? await fetchLanguagesFromGraphQL()
      : await fetchLanguagesFromRest();
  } catch (error) {
    console.error("Failed to fetch GitHub language data:", error);
    languages = await fetchLanguagesFromRest();
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
