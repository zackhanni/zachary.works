import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section id="hero" className="h-screen w-full bg-black">
      <div className="">
        <Image
          src="/hero-image-table.jpg"
          fill={true}
          priority={true}
          alt="Working at a computer"
          style={{}}
          className=" opacity-20 absolute object-cover top-0 left-0"
        />
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <p className="text-2xl text-white uppercase">
            Hi, Im a{" "}
            <span id="rainbow" className="font-semibold">
              software engineer
            </span>
            .
          </p>
          <p className="text-5xl md:text-7xl text-white font-bold">
            I built this site with Next.js
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
