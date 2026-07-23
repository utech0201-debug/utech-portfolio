import { getGithubRepositories } from "@/lib/github-repositories";

type GithubRepository = {
  id: number;
  html_url: string;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
};

export default async function GithubRepositories() {
  const repositories: GithubRepository[] = await getGithubRepositories();

  return (

<section

id="github"

className="
mx-auto
max-w-7xl
px-6
py-24
"

>


<div className="text-center">


<p
className="
text-blue-500
font-semibold
uppercase
"
>

GitHub

</p>


<h2

className="
mt-3

text-4xl

font-black
"

>

Latest Repositories

</h2>


</div>




<div

className="
mt-12

grid

gap-8

md:grid-cols-2

lg:grid-cols-3
"

>


{
  repositories.map((repo: GithubRepository) => (
    <article
      key={repo.id}
      className="rounded-3xl border border-slate-200 bg-slate-950/50 p-6 shadow-xl shadow-slate-950/10 transition hover:-translate-y-1 hover:border-blue-500 hover:bg-slate-950"
    >
      <a
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
        className="text-xl font-semibold text-white hover:text-blue-400"
      >
        {repo.name}
      </a>
      {repo.description ? (
        <p className="mt-4 text-slate-300">{repo.description}</p>
      ) : null}
      <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-400">
        {repo.language && (
          <span className="rounded-full bg-slate-800 px-3 py-1">
            {repo.language}
          </span>
        )}
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
      </div>
    </article>
  ))
}



</div>


</section>

);


}