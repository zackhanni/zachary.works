import Contact from "./Contact";
import Footer from "./Footer";
import TechnologyCard from "./TechnologyCard";
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
      className="bg-black text-slate-200 flex justify-center py-16 w-full"
    >
      <div className="container flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-center z-10 sticky top-0 backdrop-blur h-[90px]">
          <h2 className="text-5xl font-bold  text-slate-200">About Zack</h2>
        </div>
        <div className="row">
          {/* <ZackFLoatingCard /> */}
          <div className="col-12 space-y-16">
            <div className="max-w-screen-md mx-auto">
              <h3>How it started:</h3>
              <p>
                In the beginning, I learned through codecademy, having a mentor,
                and working on a ton of freelance projects. I really started my
                career at Sounds Like Soma - a philly based recording studio -
                where I worked with recording artists and record labels to make
                promotional landing pages. I also managed the studio&apos;s
                business website and IT infrastructure.
              </p>
              <h3>In the here and now:</h3>
              <p>
                Presently, I lead web and mobile app development at a
                Philadelphia-based PR firm.
              </p>
              <p>
                I am eager to contribute my skills and expertise to a dynamic
                team of motivated professionals dedicated to developing
                impactful software solutions. In my next role, I am seeking an
                environment that encourages personal and professional growth. I
                am particularly interested in opportunities where collaboration
                with innovative colleagues fosters a culture of idea-sharing and
                continuous improvement.
              </p>
            </div>
            {/* tech i love */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl text-center pb-8">Tech Stack</h3>

                <div className="grid grid-cols-3 md:grid-cols-4 gap-y-4 gap-x-4 max-w-screen-md mx-auto">
                  <TechnologyCard
                    name="NextJS"
                    image="/logos/next-js.svg"
                    link="https://nextjs.org/"
                  />
                  <TechnologyCard
                    name="React"
                    image="/logos/reactjs.svg"
                    link="https://react.dev/"
                  />

                  <TechnologyCard
                    name="Javascript"
                    image="/logos/javascript2.svg"
                    link="https://www.javascript.com/"
                  />

                  <TechnologyCard
                    name="Typescript"
                    image="/logos/typescript.svg"
                    link="https://www.typescriptlang.org/"
                  />

                  <TechnologyCard
                    name="Tailwind"
                    image="/logos/tailwindcss.svg"
                    link="https://tailwindcss.com/"
                  />
                  <TechnologyCard
                    name="Html"
                    image="/logos/html5.svg"
                    link="https://developer.mozilla.org/en-US/docsWeb/>TML"
                  />

                  <TechnologyCard
                    name="CSS"
                    image="/logos/css.svg"
                    link="https://developer.mozilla.org/en-US/docsWeb/>SS"
                  />

                  <TechnologyCard
                    name="Bootstrap"
                    image="/logos/getbootstrap.svg"
                    link="https://getbootstrap.com/"
                  />

                  <TechnologyCard
                    name="NodeJS"
                    image="/logos/nodejs.svg"
                    link="https://nodejs.org/en"
                  />

                  {/* <TechnologyCard
                    name="Mongodb"
                    image="/logos/mongodb.svg"
                    link="/"
                  /> */}

                  <TechnologyCard
                    name="AWS"
                    image="/logos/Amazon_Web_Services_Logo.svg"
                    link="https://aws.amazon.com/"
                  />

                  <TechnologyCard
                    name="RESTful API"
                    image="/logos/rest-api.svg"
                    link="https://aws.amazon.com/"
                  />

                  <TechnologyCard
                    name="Wordpress"
                    image="/logos/wordpress2.svg"
                    link="https://restfulapi.net"
                  />
                </div>
              </div>
              <div>
                <p className="text-3xl text-center py-8">Mobile Development</p>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-y-4 gap-x-4 max-w-screen-md mx-auto">
                  {/* {MobileStack.map((tech) => {
                    return <li key={tech}>{tech}</li>;
                  })} */}
                  <TechnologyCard
                    name="React Native"
                    image="/logos/react-native.webp"
                    link="https://reactnative.dev/"
                  />
                  <TechnologyCard
                    name="NativeWind"
                    image="/logos/nativewind.png" // CHANGE
                    link="https://www.nativewind.dev/"
                  />
                  <TechnologyCard
                    name="Appwrite"
                    image="/logos/appwrite.svg" // CHANGE
                    link="https://appwrite.io/"
                  />
                  <TechnologyCard
                    name="Expo"
                    image="/logos/expo.svg"
                    link="https://expo.dev/"
                  />
                </div>
              </div>
              {/* <div>
                <p>Some other tech that i&apos;m familiar with:</p>
                <div className="grid grid-cols-2 md:grid-cols-3">
                  {AltStack.map((tech) => {
                    return <li key={tech}>{tech}</li>;
                  })}
                </div>
              </div> */}
            </div>
            {/* <Contact /> */}
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </section>
  );
}
