const username = process.env.GITHUB_USERNAME;
const token = process.env.GITHUB_TOKEN;


export async function getGithubContributions(){


if(!username || !token){

throw new Error(
"GitHub credentials missing"
);

}



const query = `

query {

user(login:"${username}"){

contributionsCollection{

contributionCalendar{

totalContributions

weeks{

contributionDays{

date

contributionCount

}

}

}

}

}

}

`;



const response =
await fetch(
"https://api.github.com/graphql",
{

method:"POST",

headers:{

Authorization:
`Bearer ${token}`,

"Content-Type":
"application/json",

},

body:
JSON.stringify({
query
}),

next:{
revalidate:3600,
},

}

);



if(!response.ok){

throw new Error(
"Failed fetching GitHub contributions"
);

}



const result =
await response.json();



return (

result.data.user
.contributionsCollection
.contributionCalendar

);

}