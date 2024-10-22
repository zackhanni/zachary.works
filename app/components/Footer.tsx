import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center mt-16">
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
