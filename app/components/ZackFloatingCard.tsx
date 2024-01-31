"use client";

import React from "react";
import SocialMedia from "./SocialMedia";
import { Tilt } from "react-tilt";

export default function ZackFLoatingCard() {
  return (
    <Tilt className="hidden lg:flex flex-col sticky top-24 w-1/2 h-fit justify-start text-white rounded-lg my-6 mr-6 p-8">
      <h2 className="text-3xl font-bold">Zack Hanni</h2>
      <h3 className="font-medium">Experienced Software Engineer</h3>
      <p className="my-4 max-w-xs text-sm">
        I build exceptional and accessible digital experiences for the web.
      </p>
      <SocialMedia />
    </Tilt>
  );
}
