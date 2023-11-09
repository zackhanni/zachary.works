import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Projects />
      <About />
    </main>
  );
}
