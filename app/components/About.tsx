import Footer from "./Footer";
import ZackFLoatingCard from "./ZackFloatingCard";

export default function About() {
  const TechStack = [
    "React",
    "Next.js",
    "Javascript",
    "Typescript",
    "Tailwind",
    "Node.js",
    "Git",
    "HTML5",
    "CSS3",
    "RESTful APIs",
    "Vercel",
    "MongoDB",
  ];

  const AltStack = [
    "Ruby",
    "Jekyll",
    "Netlify",
    "PHP",
    "Wordpress",
    "MongoDB",
    "Heroku",
    "Bootstrap",
  ];

  return (
    <section className="">
      <div className="bg-black text-white pb-28 flex flex-col items-center justify-center">
        <div className="flex">
          <ZackFLoatingCard />
          <div className="max-w-screen-md">
            {/* About me */}
            <div
              className="radial-gradient p-4 sm:p-8 
        mt-6 rounded-lg backdrop-blur"
            >
              <h3 className="text-3xl font-bold">More About Me</h3>
              <p className="py-6">
                I am eager to contribute my skills and expertise to a dynamic
                team of motivated professionals dedicated to developing
                impactful software solutions. In my next role, I am seeking an
                environment that encourages personal and professional growth. I
                am particularly interested in opportunities where collaboration
                with innovative colleagues fosters a culture of idea-sharing and
                continuous improvement.
              </p>
              <p>
                When I&apos;m not at the computer, I&apos;m usually running,
                hanging out with my wife and two cats, or spending too much time
                in my Baldur&apos;s Gate 3 campaign.
              </p>
            </div>{" "}
            {/* tech i love */}
            <div
              className="radial-gradient p-4 sm:p-8 
        mt-6 rounded-lg backdrop-blur"
            >
              <p className="text-3xl font-bold">Tech I Love</p>
              <p className="py-6">
                My choice tech stack for personal projects is GENERALLY (but not
                always):
              </p>
              <div className="grid gap-2 grid-cols-1 sm:grid-cols-2">
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
              className="radial-gradient p-4 sm:p-8 
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
                  Email:{" "}
                  <a
                    href="mailto:zack.hanni@gmail.com"
                    target="blank"
                    className="hover:underline hover:text-blue-700"
                  >
                    zack.hanni@gmail.com
                  </a>
                </p>
                <p>
                  LinkedIn:{" "}
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
                    href="https://docs.google.com/document/d/1SzLNz6jHUPfvxQVEV21YptKuoyBZ6UFzQjmPckXFGQY/edit?usp=drive_link"
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
