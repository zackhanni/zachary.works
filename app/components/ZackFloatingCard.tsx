import React from "react";
import SocialMedia from "./SocialMedia";

export default function ZackFLoatingCard() {
  return (
    <div className="hidden sm:flex flex-col sticky top-0 w-1/2 justify-between py-24 radial-gradient text-white rounded-lg">
      <h2 className="text-5xl font-bold">Zack Hanni</h2>
      <h3 className="mt-3 text-xl font-medium">
        Experienced Software Engineer
      </h3>
      <p className="mt-4 max-w-xs">
        I build exceptional and accessible digital experiences for the web.
      </p>
      <SocialMedia />
    </div>
  );
}
