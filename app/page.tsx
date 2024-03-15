import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import HeroButtons from "./components/HeroButtons";

export default function Home() {
  return (
    <main>
      <Hero />
      <HeroButtons />
      <Experience />
      <Projects />
      <About />
    </main>
  );
}
