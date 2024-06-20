import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import HeroButtons from "./HeroButtons";

export default function Hero() {
  return (
    <section id="hero" className="h-screen w-full">
      <div className="relative -z-20 pointer-events-none">
        <div className="fixed h-full w-full left-0 radial-gradient text-[#94A3B8]">
          {/* <Image
            src="/desk-with-computers.jpeg"
            fill={true}
            priority={true}
            alt="Working at a computer"
            style={{}}
            className="opacity-20 object-cover w-full h-screen overflow-hidden"
          /> */}

          <div className="px-4 md:px-0 absolute md:-translate-x-1/2 -translate-y-1/2 top-1/2 md:left-1/2 w-full max-w-2xl">
            <p className="text-5xl font-bold text-slate-200">
              Hi! I&apos;m Zack,
            </p>
            <p className="text-lg">
              a former audio engineer turned software engineer. With a rich
              background in the music industry, working alongside artists and
              music labels, I&apos;ve transitioned my creative problem-solving
              skills into the world of technology.
            </p>
            <p className="text-lg">
              Here, you&apos;ll find a showcase of my software engineering
              projects, highlighting my expertise in web development, natural
              language processing, and user-centric design. Explore my journey
              from soundwaves to code, and see how my unique blend of
              experiences fuels my passion for creating innovative and impactful
              digital solutions.
            </p>
            {/* <p className="text-lg">
              I&apos;m an audio engineer, turned{" "}
              <span id="rainbow" className="font-bold text-xl">
                software engineer
              </span>
              , based in Philadelphia, PA. This website is my personal
              portfolio, highlighting my work history, notable projects, and my
              profound love of tech.
            </p> */}
            <div className="text-4xl grid place-items-center pt-32">
              <FaChevronDown
              // className="pulse"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <HeroButtons /> */}
    </section>
  );
}
