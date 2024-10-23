"use client";

import React from "react";
import SocialMedia from "./SocialMedia";
import { Tilt } from "react-tilt";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const tiltOptions = {
  max: 25,
  scale: 1.05,
};

export default function ZackFLoatingCard() {
  return (
    <Tilt
      options={tiltOptions}
      className="hidden lg:block max-w-1/4 max-w-[300px] text-[#238493] bg-white rounded-lg sticky top-[110px] h-fit z-10 min-h-[350px] px-3"
    >
      <div className="flex flex-col py-3 w-fit bg-white/80 rounded-lg">
        <h2 className="text-3xl font-bold m-0">Zack Hanni</h2>
        <h3 className="text-sm m-0">Experienced Software Engineer</h3>
        <p className="m-0 py-3">
          I build exceptional and accessible digital experiences for the web. I
          keep an open mind for new ideas and learn something new every day.
        </p>
      </div>
      {/* <div className="flex justify-center space-x-4">
        <SocialMedia
          name="Linkedin"
          link="https://github.com/zackhanni"
          icon={<FaLinkedin />}
        />
        <SocialMedia
          name="Github"
          link="https://github.com/zackhanni"
          icon={<FaGithub />}
        />
        <SocialMedia
          name="Email"
          link="mailto:zack.hanni@gmail.com"
          icon={<IoMdMail />}
          className=""
        />
      </div> */}
      <Image
        src="/silly-straw.png"
        width={100}
        height={100}
        alt="silly straw"
        className="absolute -z-10 -top-80 rotate-[-20deg]"
      />
      <div>
        <Image
          src="/jazz-cup.png"
          width={500}
          height={300}
          alt="jazz cup design"
          className="pb-2 bg-white absolute left-0 bottom-0 rounded-lg"
        />
      </div>
    </Tilt>
  );
}

// bg-zinc-950
