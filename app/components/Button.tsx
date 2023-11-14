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
    <Link href={props.link}>
      <div className="text-black text-xl font-bold bg-amber-400 hover:bg-amber-500 duration-300 py-3 px-6 rounded-md m-2 flex">
        {props.name} {props.password ? <div className="pl-3"><FaLock/></div> : null }
      </div>
    </Link>
  );
}
