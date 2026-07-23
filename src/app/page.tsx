import Background from "@/components/shared/Background";
import ScrollProgress from "@/components/shared/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import ProjectGrid from "@/components/projects/ProjectGrid";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
    <Background />
    <ScrollProgress />

      <Navbar />

      <main className="bg-black text-white">
        <Hero />
        <About />
        <Skills />
        <ProjectGrid />
         <Contact />
      </main>

      <Footer />
    </>
  );
}