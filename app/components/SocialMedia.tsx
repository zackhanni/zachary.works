import Link from "next/link";
import SocialData from "./SocialData";

export default function SocialMedia() {
  return (
    <div className="social-media flex">
      {SocialData.map((social) => {
        return (
          <Link key={social.label} href={social.href} target="_blank">
            <div className="pr-4 text-4xl hover:text-[#ab5c95] duration-300">
              {social.icon}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
