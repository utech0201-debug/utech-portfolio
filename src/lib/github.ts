const username = process.env.GITHUB_USERNAME;
const token = process.env.GITHUB_TOKEN;


if (!username) {
  throw new Error(
    "Missing GITHUB_USERNAME environment variable"
  );
}


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


  const response = await fetch(

    `https://api.github.com/users/${username}/repos?sort=updated&per_page=12`,

    {

      headers: {

        Accept:
          "application/vnd.github+json",

        ...(token && {
          Authorization:
            `Bearer ${token}`,
        }),

      },


      next:{
        revalidate:3600,
      },

    }

  );



  if(!response.ok){

    throw new Error(
      "Failed to fetch GitHub repositories"
    );

  }



  const repos: Repository[] =
    await response.json();



  return repos

    .filter(
      (repo)=>!repo.fork
    )


    .map(
      (repo)=>({

        id:
          repo.id,

        name:
          repo.name,


        description:
          repo.description ??
          "No description available",


        language:
          repo.language ??
          "Other",


        stars:
          repo.stargazers_count,


        forks:
          repo.forks_count,


        url:
          repo.html_url,

      })

    );

}