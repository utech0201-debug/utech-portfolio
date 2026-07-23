import Background from "@/components/shared/Background";
import ScrollProgress from "@/components/shared/ScrollProgress";

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

import JsonLd from "@/components/seo/JsonLd";


export default function Home() {


  return (

    <>

      {/* SEO Structured Data */}
      <JsonLd />


      {/* Animated Background */}
      <Background />


      {/* Page Progress */}
      <ScrollProgress />


      {/* Navigation */}
      <Navbar />



      <main
        className="
        min-h-screen
        bg-[var(--background)]
        text-[var(--foreground)]
        transition-colors
        duration-300
        "
      >


        <Hero />


        <About />


        <Skills />


        <Terminal />


        {/* Personal Projects */}
        <ProjectGrid />



        {/* GitHub Integration */}

        <GithubProfile />


        <GithubLanguages />


        <GithubProjects />


        <GithubActivity />



        {/* Developer Showcase */}

        <DeveloperTerminal />



        <Contact />


      </main>



      <Footer />

    </>

  );

}