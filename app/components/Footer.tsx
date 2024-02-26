import Link from "next/link";
import React from "react";
import SocialMedia from "./SocialMedia";
import Button from "./Button";

export default function Footer() {
  return (
    <div className="flex flex-col items-center mt-16">
      <SocialMedia />
      <p className="py-8 max-w-md">
        This website was designed in{" "}
        <a
          href="https://www.figma.com/"
          target="_blank"
          className="hover:text-white text-[#514E6D]"
        >
          Figma
        </a>
        , coded in{" "}
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          className="hover:text-white text-[#514E6D]"
        >
          Visual Studio Code
        </a>
        , built with{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          className="hover:text-white text-[#514E6D]"
        >
          Next.js
        </a>
        , and deployed with{" "}
        <a
          href="https://vercel.com/"
          target="_blank"
          className="hover:text-white text-[#514E6D]"
        >
          Vercel
        </a>{" "}
        by yours truly.
      </p>
      <Button name="Back to top" password={false} link="#hero" />
    </div>
  );
}
