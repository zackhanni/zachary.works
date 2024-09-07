import Footer from "./Footer";
import ZackFLoatingCard from "./ZackFloatingCard";

export default function About() {
  const TechStack = [
    "React",
    "Next.js",
    "Javascript",
    "Typescript",
    "Tailwind CSS",
    "Bootstrap",
    "Node.js",
    "Git",
    "HTML5",
    "CSS3",
    "Vercel",
    "MySQL",
    "SQLite",
    "Strapi",
    "Shadcn",
    "Prisma",
  ];

  const MobileStack = ["React Native", "NativeWind", "Expo", "Appwrite"];

  const AltStack = [
    "Stripe",
    "Resend",
    "MongoDB",
    "Ruby",
    "Jekyll",
    "Netlify",
    "PHP",
    "Wordpress",
  ];

  return (
    <section
      id="about"
      className="bg-black text-slate-200 flex justify-center pb-28"
    >
      <div className="container flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-center z-10 sticky top-0 backdrop-blur h-[90px]">
          <h2 className="text-5xl font-bold  text-slate-200 ">About Zack</h2>
        </div>
        <div className="row">
          <ZackFLoatingCard />
          <div className="col-md-9 col-12 space-y-4">
            <div className="radial-gradient rounded-lg backdrop-blur p-4">
              <p className="">
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
            </div>
            {/* tech i love */}
            <div className="radial-gradient p-4 rounded-lg backdrop-blur space-y-4">
              <h3 className="text-3xl font-bold">Tech I Love</h3>
              <div>
                <p>
                  My choice tech stack for personal projects is GENERALLY (but
                  not always):
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3">
                  {TechStack.map((tech) => {
                    return <li key={tech}>{tech}</li>;
                  })}
                </div>
              </div>
              <div>
                <p>Mobile development:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3">
                  {MobileStack.map((tech) => {
                    return <li key={tech}>{tech}</li>;
                  })}
                </div>
              </div>
              <div>
                <p>Some other tech that i&apos;m familiar with:</p>
                <div className="grid grid-cols-2 md:grid-cols-3">
                  {AltStack.map((tech) => {
                    return <li key={tech}>{tech}</li>;
                  })}
                </div>
              </div>
            </div>
            {/* contact box */}
            <div className="radial-gradient p-4 rounded-lg backdrop-blur ">
              <h2 id="contact" className="text-3xl font-bold">
                Contact
              </h2>
              <p className="">
                The best way to contact me is through email or LinkedIn
                (I&apos;m not much of a twitter guy). Give me a shout here:
              </p>
              <div>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:zack.hanni@gmail.com"
                    target="blank"
                    className="hover:underline hover:text-[#2CA5B8] text-[#AB5C95]"
                  >
                    zack.hanni@gmail.com
                  </a>
                </p>
                <p>
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/zackhanni/"
                    target="blank"
                    className="hover:underline hover:text-[#2CA5B8] text-[#AB5C95]"
                  >
                    @zackhanni
                  </a>
                </p>
                <p>
                  <a
                    href="https://docs.google.com/document/d/1SzLNz6jHUPfvxQVEV21YptKuoyBZ6UFzQjmPckXFGQY/edit?usp=drive_link"
                    target="blank"
                    className="hover:underline hover:text-[#2CA5B8] text-[#AB5C95]"
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
