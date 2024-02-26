import Image from "next/image";
import SocialMedia from "./SocialMedia";
import Button from "./Button";
import { FaChevronDown } from "react-icons/fa";

function Hero() {
  return (
    <section id="hero" className="h-screen w-full relative -z-10">
      <div className="fixed h-full w-full left-0 right-0 bg-black">
        <Image
          src="/hero-image-table.jpg"
          fill={true}
          priority={true}
          alt="Working at a computer"
          style={{}}
          className="opacity-20 object-cover w-screen"
        />
        <div className="px-8 sm:px-16 lg:px-0 absolute md:-translate-x-1/2 -translate-y-1/2 top-1/2 md:left-1/2 text-white max-w-[1200]">
          <p className="text-4xl font-bold">Hi, I&apos;m Zack.</p>
          <p className="pt-4 text-lg">
            I&apos;m an audio engineer, turned{" "}
            <span id="rainbow" className="font-semibold text-lg">
              software engineer
            </span>
            , based in Philadelphia, PA. This website is my personal portfolio,
            highlighting my work history, notable projects, and my profound love
            of tech.
          </p>
          <div className="text-4xl grid place-items-center pt-32">
            <FaChevronDown className="pulse" />
          </div>

          {/* <div className="z-50">
            <Button name="Work Experience" password={false} link="#work" />
            <Button name="Projects" password={false} link="#projects" />
            <Button name="Contact" password={false} link="#contact" />
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
