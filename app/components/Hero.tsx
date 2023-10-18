import React from "react";
import Image from "next/image";

function Hero() {
  const HeroContent = [
    {
      largeText: "This is the large hero text",
      smallText: "This is additional smaller text",
    },
  ];

  return (
    <section className="h-screen w-full bg-black">
      <div className="">
        <Image
          src="/hero-image-table.jpg"
          fill={true}
          priority={true}
          alt="Working at a computer"
          style={{}}
          className=" opacity-20 absolute object-cover top-0 left-0"
        />
        <div className="content absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <p className="text-7xl text-white ">{HeroContent[0].largeText}</p>
          <p className="text-xl text-white ">{HeroContent[0].smallText}</p>
          <div>button link 1 and 2</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
