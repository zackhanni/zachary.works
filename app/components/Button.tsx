import Link from "next/link";
import React from "react";
import { FaLock } from "react-icons/fa";

interface ButtonProps {
  name: string;
  link: string;
  password: boolean;
}

export default function Button(props: ButtonProps) {
  return (
    <Link href={props.link} className="no-underline">
      <div className="text-slate-200 bg-[#AB5C95] hover:bg-[#2CA5B8] duration-300 py-2 px-10 rounded-md flex text-center">
        {props.name}{" "}
        {props.password ? (
          <div className="pl-3">
            <FaLock />
          </div>
        ) : null}
      </div>
    </Link>
  );
}
