import { getGithubLanguages } from "@/lib/github-languages";


export default async function GithubLanguages(){


const languages =
await getGithubLanguages();



return (

<section

className="
mx-auto

max-w-7xl

px-6

py-12

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


<h2

className="
text-3xl

font-black

"

>

Top Technologies

</h2>



<div

className="
mt-8

space-y-6

"

>


{
languages.map((lang)=>(


<div

key={lang.name}

>


<div

className="
mb-2

flex

justify-between

text-sm

"

>

<span>

{lang.name}

</span>


<span>

{lang.percentage}%

</span>


</div>



<div

className="
h-3

overflow-hidden

rounded-full

bg-white/10

"

>


<div

className="
h-full

rounded-full

bg-blue-600

transition-all

"

style={{

width:
`${lang.percentage}%`

}}

/>


</div>


</div>


))

}



</div>


</div>


</section>

);


}