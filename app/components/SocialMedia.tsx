import Link from "next/link";
import SocialData from "./SocialData";

export default function SocialMedia() {
  return (
    <div className="social-media flex my-16 ">
    {SocialData.map((social) => {
      return (
        <Link key={social.label} href={social.href} target="_blank">
          <div className="pr-4 text-5xl">{social.icon}</div>
        </Link>
      );
    })}
  </div>
  )
}
