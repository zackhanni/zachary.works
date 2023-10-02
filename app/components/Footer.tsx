import { FaRegEnvelope, FaHome, FaPhone, FaRegFileAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex items-center justify-center  bg-slate-600 text-white py-20">
      <div className="flex flex-col md:flex-row justify-between w-full max-w-[1200px] p-8 xl:p-0 ">
        <div className="left-side pb-8 md:pb-0 text-lg">
          <div className="title font-bold text-2xl py-2">Contact</div>
          <div className="location flex">
            <FaHome />
            <p className="pl-2">Philadelphia, PA</p>
          </div>
          <div className="phone-number flex">
            <FaPhone />
            <p className="pl-2">856-298-3095</p>
          </div>
          <div className="email flex">
            <FaRegEnvelope />
            <p className="pl-2">zack.hanni@gmail.com</p>
          </div>
          <div className="resume flex">
            <FaRegFileAlt />
            <p className="pl-2">Zack Resume</p>
          </div>
        </div>
        <div className="right-side text-lg">
          <div className="title font-bold text-2xl py-2">About Me</div>
          <div className="description max-w-xs">
            I enjoy coding, learning, and audio engineering. I am open to
            discussing new projects and design challenges.
          </div>
          <div className="social media"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
