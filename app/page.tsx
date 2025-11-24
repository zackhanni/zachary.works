import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Experience />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
