import ScrollProgress from "@/components/shared/ScrollProgress";
import { PersonStructuredData } from "@/components/seo/StructuredData";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

import Terminal from "@/components/sections/Terminal";

import ProjectGrid from "@/components/projects/ProjectGrid";

import GithubProfile from "@/components/github/GithubProfile";
import GithubLanguages from "@/components/github/GithubLanguages";
import GithubProjects from "@/components/github/GithubProjects";
import GithubActivity from "@/components/github/GithubActivity";

import DeveloperTerminal from "@/components/terminal/DeveloperTerminal";
import LearningLab from "@/components/learning/LearningLab";
import LearningBillboard from "@/components/learning/LearningBillboard";



export default function Home() {


  return (

    <>
      <PersonStructuredData
        siteUrl="https://utech-portfolio.vercel.app"
      />

      


      {/* Page Progress */}
      <ScrollProgress />


      {/* Navigation */}
      <Navbar />



      <main
        className="
        relative
        z-10
        min-h-screen
        bg-transparent
        text-[var(--foreground)]
        transition-colors
        duration-300
        "
      >


        <Hero />


        <About />


        <Skills />


        {/* Live Learning Billboard */}
        <LearningBillboard />


        <Terminal />


        {/* Personal Projects */}
        <ProjectGrid />



        {/* GitHub Integration */}

        <GithubProfile />


        <GithubLanguages />


        <GithubProjects />


        <GithubActivity />



        {/* Learning Lab */}
        <LearningLab />


        {/* Developer Showcase */}

        <DeveloperTerminal />



        <Contact />


      </main>



      <Footer />

    </>

  );

}