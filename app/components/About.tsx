import Image from "next/image";
import Contact from "./Contact";
import Footer from "./Footer";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section
      id="about"
      className=" text-slate-200 flex justify-center pb-16 w-full bg-[#10151E] dot-background"
    >
      <div className="container flex flex-col items-center justify-center">
        <SectionHeader title="About" />
        <div className="row">
          <div className="col-12 space-y-16">
            <div className="max-w-screen-md mx-auto prose text-slate-200 lg:prose-md border-2 border-white p-8 rounded-2xl backdrop-blur-[2px]">
              <h3 className="text-slate-200">How it all started 🌱</h3>
              <p>
                In the beginning, I learned to code through Codecademy, a
                patient mentor, and involving myself in a ton of freelance
                projects. My career took off at Sounds Like Soma, a Philadelphia
                based recording studio, where I managed the studio&apos;s
                business website and IT infrastructure. This opportunity allowed
                me to work with global recording artists and record labels to
                make promotional landing pages and electronic press kits.
              </p>
              <h3 className="text-slate-200">In the here and now 👈</h3>
              <p>
                Presently, I am the lead full-stack web and mobile developer at
                a Philadelphia-based PR firm. This role actively pushes me to
                try new technologies and branch out of my comfort zone, leading
                me to continually grow as a developer.
              </p>
              <h3 className="text-slate-200">What im looking for 🔍</h3>
              <p>
                In my next role, I am seeking a team of motivated professionals
                developing software that impacts everyday people. I am eager to
                contribute my skills to a company that fosters a culture of
                idea-sharing and continuous improvement.
              </p>
            </div>
            {/* tech i love */}
            <div className="space-y-8">
              <div className="space-y-4 prose lg:prose-lg max-w-screen-md">
                <h3 className="text-center pb-8 text-slate-200">Tech Stack</h3>

                <div className="flex flex-wrap gap-y-4 sm:gap-x-4 max-w-screen-md mx-auto">
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
              <div className="prose lg:prose-lg max-w-screen-md">
                <h3 className="text-center py-8 text-slate-200">
                  Mobile Development
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-4 sm:gap-x-4 max-w-screen-md mx-auto">
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
            </div>
            {/* <Contact /> */}
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </section>
  );
}

const TechnologyCard = ({
  image,
  link,
  name,
}: {
  image: string;
  link: string;
  name: string;
}) => {
  return (
    <Link href={link} target="_blank" key={name} className="mx-auto">
      <div className="py-1 px-4 bg-white text-primary rounded-2xl flex items-center justify-center h-[65px] w-auto shadow-md hover:shadow-xl duration-200 hover:bg-white/80">
        {/* {technology.name} */}
        <Image
          src={image}
          width={101}
          height={57}
          alt={`${name} logo`}
          className="object-contain max-h-[50px]"
        />
      </div>
    </Link>
  );
};
