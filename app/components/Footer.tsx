import Image from "next/image";
import React from "react";
import SocialMedia from "./SocialMedia";
import Button from "./Button";

export default function Footer() {
  return (
    <div className="flex flex-col items-center mt-16 px-4 sm:px-0">
      <SocialMedia otherStyles={"text-[#AB5C95]"} />
      <p className="py-8 max-w-md">
        This website was designed in{" "}
        <a
          href="https://www.figma.com/"
          target="_blank"
          className="hover:text-[#2CA5B8] text-[#AB5C95]"
        >
          Figma
        </a>
        , coded in{" "}
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          className="hover:text-[#2CA5B8] text-[#AB5C95]"
        >
          Visual Studio Code
        </a>
        , built with{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          className="hover:text-[#2CA5B8] text-[#AB5C95]"
        >
          Next.js
        </a>
        , and deployed with{" "}
        <a
          href="https://vercel.com/"
          target="_blank"
          className="hover:text-[#2CA5B8] text-[#AB5C95]"
        >
          Vercel
        </a>{" "}
        by yours truly.
      </p>
      <Button name="Back to top" password={false} link="#hero" />
      <div className="pt-8">
        <Image
          src="/jazz-cup.png"
          width={448}
          height={204}
          alt="jazz cup design"
          className="w-[448px] h-[204px] "
        />
      </div>
    </div>
  );
}
