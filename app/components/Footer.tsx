import Image from "next/image";
import React from "react";
import SocialMedia from "./SocialMedia";
import Button from "./Button";

export default function Footer() {
  return (
    <div className="flex flex-col items-center mt-16">
      <Button name="Back to top" password={false} link="#hero" />
      <div className="flex mx-auto overflow-hidden w-screen py-16">
        <Image
          src="/jazz-cup.png"
          width={448}
          height={204}
          alt="jazz cup design"
          className="w-auto h-[150px]"
        />
        <Image
          src="/jazz-cup.png"
          width={448}
          height={204}
          alt="jazz cup design"
          className="w-auto h-[150px] scale-[-1]"
        />
        <Image
          src="/jazz-cup.png"
          width={448}
          height={204}
          alt="jazz cup design"
          className="w-auto h-[150px]"
        />
        <Image
          src="/jazz-cup.png"
          width={448}
          height={204}
          alt="jazz cup design"
          className="w-auto h-[150px] scale-[-1]"
        />
        <Image
          src="/jazz-cup.png"
          width={448}
          height={204}
          alt="jazz cup design"
          className="w-auto h-[150px]"
        />
        <Image
          src="/jazz-cup.png"
          width={448}
          height={204}
          alt="jazz cup design"
          className="w-auto h-[150px] scale-[-1]"
        />
      </div>
    </div>
  );
}
