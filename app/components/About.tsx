import { FaRegEnvelope, FaHome, FaPhone, FaRegFileAlt } from "react-icons/fa";
import Link from "next/link";
import Footer from "./Footer";
import ZackFLoatingCard from "./ZackFloatingCard";

export default function About() {
  const TechStack = [
    "React (Next JS)",
    "Javascript",
    "Typescript",
    "Tailwind",
    "Node.js",
    "Git",
    "HTML5",
    "CSS3",
    "Rest",
    "Vercel",
  ];

  const AltStack = [
    "Ruby",
    "Jekyll",
    "Netlify",
    "PHP",
    "Wordpress",
    "MongoDB",
    "Heroku",
  ];

  return (
    <section className="">
      <div className="bg-black text-white py-28 flex flex-col items-center justify-center">
        <div className="flex max-w-[90%] xl:max-w-[80%] 2xl:max-w-[60%]">
          <ZackFLoatingCard />
          <div id="min-w-[50%] max-w-[90%] sm:max-w-[75%] md:max-w-[50%]">
            {/* About me */}
            <div
              className="radial-gradient p-8 
        mt-6 rounded-lg backdrop-blur"
            >
              <p className="text-3xl font-bold">More About Me</p>
              <p className="py-6">
                Dedicated, Analytical, and Motivated Software Engineering
                Professional with expertise in web development and optimization.
                Leverages technical expertise to deliver information technology
                solutions.
              </p>
            </div>{" "}
            {/* tech i love */}
            <div
              className="radial-gradient p-8 
        mt-6 rounded-lg backdrop-blur"
            >
              <p className="text-3xl font-bold">Tech I Love</p>
              <p className="py-6">
                My choice tech stack for personal projects is GENERALLY (but not
                always):
              </p>
              <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
                {TechStack.map((tech) => {
                  return <li key={tech}>{tech}</li>;
                })}
              </div>

              <p className="py-6">
                Some other tech that I love and/or have built at scale with:
              </p>
              <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
                {AltStack.map((tech) => {
                  return <li key={tech}>{tech}</li>;
                })}
              </div>
            </div>
            {/* contact box */}
            <div
              className="radial-gradient p-8 
        mt-6 rounded-lg backdrop-blur "
            >
              <h2 id="contact" className="text-3xl font-bold">
                Contact
              </h2>
              <p className="py-6">
                The best way to contact me is through email or LinkedIn
                (I&apos;m not much of a twitter guy). Give me a shout here:
              </p>
              <div>
                <p>
                  Email:
                  <a
                    href="mailto:zack.hanni@gmail.com"
                    target="blank"
                    className="hover:underline hover:text-blue-700"
                  >
                    zack.hanni@gmail.com
                  </a>
                </p>
                <p>
                  LinkedIn:
                  <a
                    href="https://www.linkedin.com/in/zackhanni/"
                    target="blank"
                    className="hover:underline hover:text-blue-700"
                  >
                    @zackhanni
                  </a>
                </p>
                <p>
                  <a
                    href="https://drive.google.com/file/d/1XJAk8fHctsLu_8d6r15THYBmJV-uro1E/view?usp=sharing"
                    target="blank"
                    className="hover:underline hover:text-blue-700"
                  >
                    Zack&apos;s Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
}
