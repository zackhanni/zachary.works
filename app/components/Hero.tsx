import Image from "next/image";
import SocialData from "./SocialData";
import Link from "next/link";

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
          <div className="social-media flex my-8">
            {SocialData.map((social) => {
              return (
                <Link href={social.href} key={social.label} target="_blank">
                  <div className="pr-4 text-3xl">{social.icon}</div>
                </Link>
              );
            })}
          </div>
          <p className="text-xl">
            I&apos;m an audio engineer, turned{" "}
            <span id="rainbow" className="font-semibold text-xl">
              software engineer
            </span>
            , based in Philadelphia, PA. This website is my personal
            portfolio, highlighting my work history, noteable projects, and my
            profound love of tech.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
