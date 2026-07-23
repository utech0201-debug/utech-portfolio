const username = process.env.GITHUB_USERNAME;
const token = process.env.GITHUB_TOKEN;


interface LanguageMap {
  [key:string]: number;
}



export async function getGithubLanguages(){


if(!username){

throw new Error(
"GITHUB_USERNAME missing"
);

}



const response = await fetch(

`https://api.github.com/users/${username}/repos?per_page=100`,

{

headers:{

...(token && {

Authorization:
`Bearer ${token}`,

}),

Accept:
"application/vnd.github+json",

},


next:{
revalidate:3600,
}

}

);



if(!response.ok){

throw new Error(
"Failed fetching repositories"
);

}



const repos =
await response.json();



const languages:
LanguageMap = {};



for(const repo of repos){


if(repo.fork)
continue;



const languageResponse =
await fetch(

repo.languages_url,

{

headers:{

...(token && {

Authorization:
`Bearer ${token}`,

}),

Accept:
"application/vnd.github+json",

},

}

);



if(!languageResponse.ok)
continue;



const data =
await languageResponse.json();



Object.entries(data)
.forEach(

([language,bytes])=>{


languages[language] =
(languages[language] ?? 0)
+
Number(bytes);


}

);


}



const total =
Object.values(languages)
.reduce(

(sum,value)=>
sum + value,

0

);



if(total === 0)
return [];



return Object.entries(languages)

.map(
([name,value])=>({

name,

percentage:

Math.round(

(value / total)
*
100

),

})

)

.sort(

(a,b)=>
b.percentage-a.percentage

)

.slice(0,5);



}