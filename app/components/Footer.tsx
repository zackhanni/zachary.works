import Link from "next/link";
import React from "react";
import SocialMedia from "./SocialMedia";
import Button from "./Button";

export default function Footer() {
  return (
    <div className="flex flex-col items-center">
      <SocialMedia />
      <Button name="Back to top" password={false} link="#hero" />
      <p className="pt-16 max-w-md">
        This website was designed in <b>Figma</b>, coded in <b>Visual Studio Code</b>, built with <b>Next.js</b>, and deployed with <b>Vercel</b> by yours truly.
      </p>
    </div>
  );
}
