import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/shared/theme-provider";


const geistSans = Geist({
  variable:"--font-geist-sans",
  subsets:["latin"],
});


const geistMono = Geist_Mono({
  variable:"--font-geist-mono",
  subsets:["latin"],
});



export const metadata: Metadata = {
  title: {
    default: "Utech | Full-Stack Developer",
    template: "%s | Utech",
  },

  description:
    "Utech is a Full-Stack Developer specializing in Next.js, TypeScript, modern web applications and cybersecurity.",


  keywords: [
    "Utech",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Tailwind CSS",
    "Cybersecurity",
    "Ghana Developer",
  ],


  authors:[
    {
      name:"Utech",
    },
  ],


  creator:"Utech",


  metadataBase:
    new URL(
      "https://utech-portfolio.vercel.app"
    ),


  openGraph:{

    title:
      "Utech | Full-Stack Developer",

    description:
      "Building secure, scalable and modern digital experiences.",

    url:
      "https://utech-portfolio.vercel.app",

    siteName:
      "Utech Portfolio",

    images:[
      {
        url:
        "/og-image.png",

        width:
        1200,

        height:
        630,

        alt:
        "Utech Portfolio",
      },
    ],

    locale:
      "en_US",

    type:
      "website",

  },


  twitter:{

    card:
    "summary_large_image",

    title:
    "Utech | Full-Stack Developer",

    description:
    "Full-Stack Developer and Cybersecurity Enthusiast",

    images:[
      "/og-image.png"
    ],

  },


};

export default function RootLayout({

children,

}:Readonly<{

children:React.ReactNode;

}>) {


return (

<html

lang="en"

suppressHydrationWarning

>


<body

className={`
${geistSans.variable}
${geistMono.variable}
antialiased
`}

>


<ThemeProvider>

{children}

</ThemeProvider>


</body>


</html>


);

}