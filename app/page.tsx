import Contact from "./components/Contact";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>
      <Projects />
      <Contact />
    </main>
  );
}
