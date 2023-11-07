import Image from "next/image";
import SocialMedia from "./SocialMedia";

function Hero() {
  return (
    <section id="hero" className="h-screen w-full relative bg-black -z-10">
      <div className="fixed h-full w-full left-0 right-0">
        <Image
          src="/hero-image-table.jpg"
          fill={true}
          priority={true}
          alt="Working at a computer"
          style={{}}
          className="opacity-20 object-cover w-screen"
        />
        <div className="max-md:p-6 p-0 absolute md:-translate-x-1/2 -translate-y-1/2 top-1/2 md:left-1/2 text-white max-w-[1200]">
          <p className="text-5xl lg:text-7xl font-bold">Hi, I&apos;m Zack.</p>
          {/* <SocialMedia /> */}
          <p className="text-xl pt-8">
            I&apos;m an audio engineer, turned{" "}
            <span id="rainbow" className="font-semibold text-xl">
              software engineer
            </span>
            , based in Philadelphia, PA. This website is my personal portfolio,
            highlighting my work history, notable projects, and my profound love
            of tech.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
