import { Navbar } from "@/app/components/Navbar";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Experience } from "@/app/components/Experience";
import { Projects } from "@/app/components/Projects";
import { WebProjects } from "@/app/components/WebProjects";
import { Certifications } from "@/app/components/Certifications";
import { Contact } from "@/app/components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <WebProjects />
      <Certifications />
      <Contact />
    </div>
  );
}