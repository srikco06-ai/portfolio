import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">
        <div className="relative">
          <div className="section-wrapper">
            <Hero />
          </div>

          <Skills />

          <Experience />

          <Projects />

          <Certifications />

          <Contact />
        </div>
      </main>
    </>
  );
}