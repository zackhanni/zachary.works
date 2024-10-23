import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

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
