export default function JsonLd(){


const data={


"@context":
"https://schema.org",


"@type":
"Person",


name:
"Utech",


jobTitle:
"Full Stack Developer",


url:
"https://your-domain.vercel.app",


sameAs:[


"https://github.com/utech0201-debug"


],



knowsAbout:[


"Next.js",

"React",

"TypeScript",

"Cybersecurity",

"Node.js"


]


};



return (

<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:
JSON.stringify(data)

}}

/>

);


}