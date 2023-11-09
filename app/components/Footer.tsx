import Link from "next/link";
import React from "react";
import SocialMedia from "./SocialMedia";
import Button from "./Button";

export default function Footer() {
  return (
    <div className="flex flex-col items-center">
      <SocialMedia />
      <Button name="Back to top" password={false} link="#hero" />
    </div>
  );
}
