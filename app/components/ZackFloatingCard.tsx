"use client";

import React from "react";
import SocialMedia from "./SocialMedia";
import { Tilt } from "react-tilt";

export default function ZackFLoatingCard() {
  return (
    <Tilt
      className="hidden lg:flex flex-col sticky top-24 w-1/2 h-fit justify-start text-white rounded-lg mr-4 p-4
     bg-teal-800 z-10
    "
    >
      <h2 className="text-4xl font-bold">Zack Hanni</h2>
      <h3 className="text-xl font-semibold">Experienced Software Engineer</h3>
      <p className="my-4">
        I build exceptional and accessible digital experiences for the web.
      </p>
      <SocialMedia />
    </Tilt>
  );
}

// bg-zinc-950
