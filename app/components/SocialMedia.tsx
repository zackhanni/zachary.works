import { Mail } from "lucide-react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaDribbble, FaGoogle } from "react-icons/fa";

export default function SocialMedia({
  name,
  link,
  className,
  icon,
}: {
  name: string;
  link: string;
  className?: string;
  icon: React.ReactNode;
}) {
  return (
    <Link key={name} href={link} target="_blank">
      <div
        className={`text-3xl text-[#2CA5B8] XXtext-[#AB5C95] duration-300 ${className}`}
      >
        {icon}
      </div>
    </Link>
  );
}
