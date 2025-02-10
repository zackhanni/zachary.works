import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-red-100 bottom-0 absolute">
      {/* <p className="max-w-sm mb-0">
        This website was designed in{" "}
        <a
          href="https://www.figma.com/"
          target="_blank"
          className="text-[#2CA5B8] hover:text-[#AB5C95]"
        >
          Figma
        </a>
        , coded in{" "}
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          className="text-[#2CA5B8] hover:text-[#AB5C95]"
        >
          Visual Studio Code
        </a>
        , built with{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          className="text-[#2CA5B8] hover:text-[#AB5C95]"
        >
          Next.js
        </a>
        , and deployed with{" "}
        <a
          href="https://vercel.com/"
          target="_blank"
          className="text-[#2CA5B8] hover:text-[#AB5C95]"
        >
          Vercel
        </a>{" "}
        by yours truly.
      </p> */}
      <div className="flex overflow-hidden justify-center pt-16 w-screen">
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
