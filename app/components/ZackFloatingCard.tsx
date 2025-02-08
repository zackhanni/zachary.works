"use client";

import React from "react";
import SocialMedia from "./SocialMedia";
import { Tilt } from "react-tilt";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const tiltOptions = {
  max: 20,
  scale: 1.05,
};

export default function ZackFLoatingCard() {
  return (
    <Tilt
      options={tiltOptions}
      className="hidden lg:block min-w-[250px] max-w-[280px] text-[#238493] bg-white rounded-2xl sticky top-[110px] z-10 h-[430px] p-8"
    >
      <div className="flex flex-col bg-white/80 space-y-4 mb-4">
        <h2 className="text-2xl font-semibold">Zack Hanni</h2>
        <h3 className="text-white bg-[#238493]/70 w-fit py-.5 px-2 rounded-md">
          Software Engineer
        </h3>
        <p className="">
          I build exceptional and accessible digital experiences for web and
          mobile.
        </p>
      </div>
      <div className="flex space-x-4">
        <SocialMedia
          name="Linkedin"
          link="https://www.linkedin.com/in/zackhanni/"
          className="text-[#2CA5B8] hover:text-[#2CA5B8]"
          icon={<FaLinkedin />}
        />
        <SocialMedia
          name="Github"
          link="https://github.com/zackhanni"
          className="text-[#2CA5B8] hover:text-[#2CA5B8]"
          icon={<FaGithub />}
        />
        <SocialMedia
          name="Email"
          link="mailto:zack.hanni@gmail.com"
          className="text-[#2CA5B8] hover:text-[#2CA5B8]"
          icon={<IoMdMail />}
        />
      </div>
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
          className="pb-2 bg-white absolute left-0 bottom-0 rounded-2xl"
        />
      </div>
    </Tilt>
  );
}

// bg-zinc-950
