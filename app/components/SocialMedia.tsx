import Link from "next/link";
import SocialData from "./SocialData";

export default function SocialMedia() {
  return (
    <div className="social-media flex space-x-4">
      {SocialData.map((social) => {
        return (
          <Link key={social.label} href={social.href} target="_blank">
            <div className="text-3xl hover:text-[#2CA5B8] duration-300">
              {social.icon}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
