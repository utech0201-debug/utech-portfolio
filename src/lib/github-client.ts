const username = process.env.GITHUB_USERNAME;
const token = process.env.GITHUB_TOKEN;

const API_BASE = "https://api.github.com";
const JSON_HEADERS = {
  Accept: "application/vnd.github+json",
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
};

export function getGithubUsername(): string {
  if (!username) {
    throw new Error("Missing GITHUB_USERNAME environment variable");
  }

  return username;
}

export async function githubFetch<T>(
  path: string,
  options: RequestInit & { next?: { revalidate?: number } } = {}
): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      ...JSON_HEADERS,
      ...options.headers,
    },
    next: { revalidate: 3600, ...options.next },
  });

  if (!response.ok) {
    let detail = `${response.status} ${response.statusText}`;

    try {
      const error = (await response.json()) as { message?: string };
      if (error.message) detail = error.message;
    } catch {
      // Keep the HTTP status when GitHub does not return JSON.
    }

    throw new Error(`GitHub API request failed: ${detail}`);
  }

  return response.json() as Promise<T>;
}

export async function githubGraphQL<T>(
  query: string,
  variables: Record<string, unknown> = {}
): Promise<T> {
  if (!token) {
    throw new Error("Missing GITHUB_TOKEN environment variable");
  }

  const response = await fetch(`${API_BASE}/graphql`, {
    method: "POST",
    headers: {
      ...JSON_HEADERS,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(
      `GitHub GraphQL request failed: ${response.status} ${response.statusText}`
    );
  }

  const result = (await response.json()) as {
    data?: T;
    errors?: Array<{ message?: string }>;
  };

  if (result.errors?.length) {
    throw new Error(
      `GitHub GraphQL request failed: ${result.errors
        .map((error) => error.message ?? "Unknown GraphQL error")
        .join("; ")}`
    );
  }

  if (!result.data) {
    throw new Error("GitHub GraphQL response contained no data");
  }

  return result.data;
}
