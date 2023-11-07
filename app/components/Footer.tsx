import Link from "next/link";
import React from "react";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <div className="flex flex-col items-center">
      <SocialMedia />
      <div>
        <Link href="#hero">
          <div className="text-black text-xl font-bold bg-amber-400 hover:bg-amber-500 py-3 px-6 rounded-md mx-8">
            Back to top
          </div>
        </Link>
      </div>
    </div>
  );
}
