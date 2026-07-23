"use client";

import { motion } from "framer-motion";
import {
  Star,
  GitFork,
  ExternalLink,
} from "lucide-react";

import { SiGithub } from "react-icons/si";

import type { GithubProject } from "@/lib/github";


interface Props {
  project: GithubProject;
}



export default function GithubCard({
  project,
}: Props) {


return (

<motion.article

whileHover={{
  y:-8,
  scale:1.02,
}}

transition={{
  duration:0.3,
}}


className="
group

flex
h-full
flex-col

rounded-3xl

border
border-white/10

bg-white/5

p-6

backdrop-blur-xl

transition

"

>



<div
className="
flex
items-start
justify-between
gap-4
"
>


<h3
className="
break-words

text-xl

font-bold

text-gray-900

dark:text-white
"
>

{project.name}

</h3>



<SiGithub

size={24}

className="
shrink-0
text-gray-700

dark:text-white
"

/>


</div>





<p

className="
mt-4

min-h-[80px]

leading-7

text-gray-600

dark:text-gray-400

"

>

{project.description}

</p>





<div

className="
mt-6

flex

flex-wrap

items-center

gap-3

text-sm

"

>


<span

className="
rounded-full

bg-blue-500/10

px-3

py-1

text-blue-500

"

>

{project.language}

</span>




<span

className="
flex

items-center

gap-1

rounded-full

bg-white/5

px-3

py-1

"

>

<Star size={15}/>

{project.stars}

</span>





<span

className="
flex

items-center

gap-1

rounded-full

bg-white/5

px-3

py-1

"

>

<GitFork size={15}/>

{project.forks}

</span>



</div>






<a

href={project.url}

target="_blank"

rel="noopener noreferrer"


className="
mt-8

inline-flex

w-fit

items-center

gap-2

rounded-xl

bg-blue-600

px-5

py-3

font-semibold

text-white

transition

hover:bg-blue-500

"

>


<ExternalLink size={16}/>


View Repository


</a>




</motion.article>

);

}