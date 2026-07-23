import { getGithubContributions } 
from "@/lib/github-contributions";


export default async function GithubActivity(){


const activity =
await getGithubContributions();



return (

<section
className="
mx-auto
max-w-7xl
px-6
py-24
"
>


<div
className="
rounded-3xl
border
border-white/10
bg-white/5
p-8
backdrop-blur-xl
"
>


<div
className="
text-center
"
>

<p
className="
font-semibold
uppercase
text-blue-500
"
>
GitHub Activity
</p>


<h2
className="
mt-3
text-4xl
font-black
"
>

Coding Consistency

</h2>


</div>




<div
className="
mt-8
text-center
"
>

<h3
className="
text-5xl
font-black
"
>

{activity.totalContributions}

</h3>


<p
className="
text-gray-400
"
>

Contributions this year

</p>


</div>





<div
className="
mt-10
grid
grid-cols-7
gap-2
"
>


{

activity.weeks

.flatMap(
(week: { contributionDays: { date: string; contributionCount: number }[] }) =>
week.contributionDays
)

.map(
(day: { date: string; contributionCount: number })=>(


<div

key={day.date}

title={`${day.date}: ${day.contributionCount} contributions`}

className={`

h-4

w-4

rounded-sm

${
day.contributionCount === 0

?

"bg-white/10"

:

day.contributionCount < 3

?

"bg-green-500/40"

:

day.contributionCount < 6

?

"bg-green-500/70"

:

"bg-green-500"

}

`}

/>


)

)

}


</div>


</div>


</section>

);

}