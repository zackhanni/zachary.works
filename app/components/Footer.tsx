import Link from "next/link";
import React from "react";
import SocialMedia from "./SocialMedia";
import Button from "./Button";

export default function Footer() {
  return (
    <div className="flex flex-col items-center">
      <SocialMedia />
      {/* <Button
        name="Resume"
        password={false}
        link="https://drive.google.com/file/d/1XJAk8fHctsLu_8d6r15THYBmJV-uro1E/view?usp=sharing"
      /> */}
      <Button name="Back to top" password={false} link="#hero" />
      <p className="pt-16 max-w-md">
        This website was designed in{" "}
        <a
          href="https://www.figma.com/"
          target="blank"
          className="hover:text-white text-[#514E6D]"
        >
          Figma
        </a>
        , coded in{" "}
        <a
          href="https://www.figma.com/"
          target="blank"
          className="hover:text-white text-[#514E6D]"
        >
          Visual Studio Code
        </a>
        , built with{" "}
        <a
          href="https://www.figma.com/"
          target="blank"
          className="hover:text-white text-[#514E6D]"
        >
          Next.js
        </a>
        , and deployed with{" "}
        <a
          href="https://www.figma.com/"
          target="blank"
          className="hover:text-white text-[#514E6D]"
        >
          Vercel
        </a>{" "}
        by yours truly.
      </p>
    </div>
  );
}
