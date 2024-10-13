import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TechnologyCard({
  image,
  link,
  name,
}: {
  image: string;
  link: string;
  name: string;
}) {
  return (
    <Link href={link} target="_blank" key={name} className="mx-auto">
      <div className="py-1 px-4 bg-white text-primary rounded-[25px] flex items-center justify-center h-[65px] w-auto shadow-md hover:shadow-xl duration-300">
        {/* {technology.name} */}
        <Image
          src={image}
          width={101}
          height={57}
          alt={`${name} logo`}
          className="object-contain max-h-[50px]"
        />
      </div>
    </Link>
  );
}
