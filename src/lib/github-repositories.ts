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
};

export async function getGithubRepositories(){


const response = await fetch(

`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`,

{
headers:{
Authorization:`Bearer ${token}`,
Accept:"application/vnd.github+json",
},

next:{
revalidate:1800,
},

}

);



if(!response.ok){

throw new Error(
"Failed to fetch repositories"
);

}



const repos =
await response.json();



return repos.map(
(repo: GithubRepo)=>({

id:repo.id,

name:repo.name,

description:
repo.description ??
"No description available",

language:
repo.language ??
"Various",

stars:
repo.stargazers_count,

forks:
repo.forks_count,

url:
repo.html_url,


})

);


}