

function Footer() {
  return (
    <footer className="flex items-center justify-center  bg-slate-600 text-white py-20 px-10">
      <div className="flex">
        <div className="left-side">
          <div className="title font-bold text-2xl">Contact</div>
          <div className="location">Philadelphia, PA</div>
          <div className="phone-number">856-298-3095</div>
          <div className="email">zack.hanni@gmail.com</div>
          <div className="resume">Zack Resume</div>
        </div>
        <div className="right-side">
          <div className="title font-bold text-2xl">About Me</div>
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
