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

          <div className="px-4 md:px-0 absolute md:-translate-x-1/2 -translate-y-1/2 top-1/2 md:left-1/2 w-full space-y-8 pt-8 container">
            <div className="flex justify-center items-center md:gap-4">
              <div className="md:max-w-[60%]">
                <p className="text-5xl font-bold text-[#AB5C95]">
                  Hi! I&apos;m Zack,
                </p>

                <p className="text-lg">
                  I&apos;m a{" "}
                  <strong className="text-white">full stack developer</strong>{" "}
                  and life-long learner with a deep passion for JavaScript and
                  React. With a rich background in the music industry, working
                  alongside artists and music labels, I&apos;ve transitioned my
                  creative problem-solving skills into the world of software
                  development. When I&apos;m not at my computer, I like to spend
                  my time learning Japanese, keeping fit and producing music.
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
              </div>
              <div className="max-w-[40%] h-full items-center justify-center hidden md:flex">
                <Image
                  src={"/itsme.jpeg"}
                  width={300}
                  height={300}
                  priority
                  alt="Black and white photo of Zack"
                  className="h-[300px] w-auto object-cover rounded-3xl"
                />
              </div>
            </div>

            <div className="text-4xl grid place-items-center">
              <FaChevronDown
                // className="pulse"
                className="text-[#AB5C95]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <HeroButtons /> */}
    </section>
  );
}
