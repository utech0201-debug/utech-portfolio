import { MetadataRoute } from "next";


export default function sitemap()
: MetadataRoute.Sitemap {


return [

{
url:
"https://your-domain.vercel.app",

lastModified:
new Date(),

changeFrequency:
"monthly",

priority:
1,
},


];

}