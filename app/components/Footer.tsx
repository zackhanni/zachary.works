import {
  FaRegEnvelope,
  FaHome,
  FaPhone,
  FaRegFileAlt,
  FaLinkedin,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";
import Link from "next/link";

function Footer() {
  const ContactData = [
    {
      href: "/",
      label: "Philadelphia, PA",
      icon: <FaHome />,
    },
    {
      href: "tel:8562983095",
      label: "856-298-3095",
      icon: <FaPhone />,
    },
    {
      href: "mailto:zack.hanni@gmail.com",
      label: "zack.hanni@gmail.com",
      icon: <FaRegEnvelope />,
    },
    {
      href: "https://drive.google.com/file/d/1XJAk8fHctsLu_8d6r15THYBmJV-uro1E/view?usp=sharing",
      label: "Zack's Resume",
      icon: <FaRegFileAlt />,
    },
  ];

  const SocialData = [
    {
      label: "Linkedin",
      href: "https://www.linkedin.com/in/zackhanni/",
      icon: <FaLinkedin />,
    },
    {
      label: "Github",
      href: "https://github.com/zackhanni",
      icon: <FaGithub />,
    },
    {
      label: "Dribble",
      href: "https://dribbble.com/zackhanni",
      icon: <FaDribbble />,
    },
  ];

  return (
    <footer className="flex items-center justify-center  bg-slate-600 text-white py-20">
      <div className="flex flex-col md:flex-row justify-between w-full max-w-[1200px] p-8 xl:p-0 ">
        <div className="left-side pb-8 md:pb-0 text-lg">
          <div className="title font-bold text-2xl py-2">Contact</div>

          {ContactData.map((data) => {
            return (
              <Link href={data.href} key={data.label}>
                <div className="flex">
                  {data.icon}
                  <p className="pl-2">{data.label}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="right-side text-lg">
          <div className="title font-bold text-2xl py-2">About Me</div>
          <div className="description max-w-xs">
            I enjoy coding, learning, and audio engineering. I am open to
            discussing new projects and design challenges.
          </div>
          <div className="social media flex ">
            {SocialData.map((social) => {
              return (
                <Link href={social.href} key={social.label}>
                  <div className="pr-4 pt-4 text-3xl">{social.icon}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
