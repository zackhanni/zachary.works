import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="bg-black h-24 text-white grid place-content-center">
      <Link href="/">
        <h2 className=" text-5xl">Zacahry.works</h2>
      </Link>
    </nav>
  );
}

export default Navbar;
