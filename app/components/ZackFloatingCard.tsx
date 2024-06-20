"use client";

import React from "react";
import SocialMedia from "./SocialMedia";
import { Tilt } from "react-tilt";
import Image from "next/image";

const tiltOptions = {
  max: 25,
  scale: 1.05,
};

export default function ZackFLoatingCard() {
  return (
    <Tilt
      options={tiltOptions}
      className="col-3 hidden md:block text-[#811BDE] bg-white rounded-lg sticky top-24 h-fit z-10"
    >
      <div className="flex flex-col justify-start py-4 px-2 w-fit bg-white/80 rounded-lg">
        <h2 className="text-3xl font-bold">Zack Hanni</h2>
        <h3 className="font-semibold text-lg">Experienced Software Engineer</h3>
        <p className="text-sm">
          I build exceptional and accessible digital experiences for the web.
        </p>
      </div>

      <Image
        src="/silly-straw.png"
        width={100}
        height={100}
        alt="silly straw"
        className="absolute -z-10 -top-80 rotate-[-20deg]"
      />

      <Image
        src="/jazz-cup.png"
        width={500}
        height={300}
        alt="jazz cup design"
        className="py-2 bg-white"
      />
      <div className="flex justify-center py-4">
        <SocialMedia otherStyles={"text-[#811BDE]"} />
      </div>
    </Tilt>
  );
}

// bg-zinc-950
