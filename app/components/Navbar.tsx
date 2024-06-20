import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="bg-black w-full h-24 text-slate-200 fixed top-0 z-50">
      <div className="">
        <Link href="/">
          <h2 className="text-4xl sm:text-5xl text-center pt-6 font-semibold">
            Hire Zack Hanni
          </h2>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
