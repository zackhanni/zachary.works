import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import HeroButtons from "./components/HeroButtons";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      {/* <HeroButtons /> */}
      <Experience />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
