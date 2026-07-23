"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";


const commands = [
  {
    command:"whoami",
    output:[
      "Full-Stack Developer",
      "Cybersecurity Enthusiast",
      "Building secure modern applications",
    ],
  },

  {
    command:"skills",
    output:[
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "Linux",
    ],
  },


  {
    command:"tools",
    output:[
      "Git",
      "Docker",
      "Kali Linux",
      "Burp Suite",
      "VS Code",
    ],
  },


  {
    command:"status",
    output:[
      "Available for internships",
      "Open to freelance projects",
      "Ready to build",
    ],
  },

];



export default function DeveloperTerminal(){


const [index,setIndex] =
useState(0);


useEffect(()=>{


const timer =
setInterval(()=>{

setIndex(
(prev)=>
(prev+1)%commands.length
);


},5000);



return()=>clearInterval(timer);


},[]);



const current =
commands[index];



return (

<section

className="
mx-auto
max-w-7xl

px-6

py-24
"

>


<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

className="
overflow-hidden

rounded-3xl

border

border-green-500/20

bg-black

shadow-2xl
"

>


{/* Terminal Header */}

<div

className="
flex

items-center

gap-2

border-b

border-white/10

px-5

py-3
"

>

<span className="h-3 w-3 rounded-full bg-red-500"/>

<span className="h-3 w-3 rounded-full bg-yellow-500"/>

<span className="h-3 w-3 rounded-full bg-green-500"/>

<p className="ml-3 text-sm text-gray-400">
utech-terminal
</p>


</div>




{/* Terminal Body */}

<div

className="
p-6

font-mono

text-sm

text-green-400

"

>


<p>

utech@portfolio:~$

<span className="ml-2 text-white">

{current.command}

</span>

</p>



<div className="mt-4 space-y-2 text-gray-300">


{
current.output.map((line)=>(

<p key={line}>

<span className="text-green-500">
&gt;
</span>

{" "}

{line}

</p>

))

}


</div>



<p className="mt-6 animate-pulse">

utech@portfolio:~$_

</p>


</div>



</motion.div>


</section>

);

}