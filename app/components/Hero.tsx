import Image from "next/image";

function Hero() {
  return (
    <section id="hero" className="h-screen w-full relative bg-black -z-10">
      <div className="fixed h-full w-full left-0 right-0">
        <Image
          src="/hero-image-table.jpg"
          fill={true}
          priority={true}
          alt="Working at a computer"
          style={{}}
          className="opacity-20 object-cover w-screen"
        />
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <p className="text-2xl text-white uppercase">
            Hi, Im a{" "}
            <span id="rainbow" className="font-semibold">
              software engineer
            </span>
            .
          </p>
          <p className="text-5xl md:text-7xl text-white font-bold">
            I built this site with Next.js
          </p>
          <p className="text-white">
            I&apos;m a software engineer based in Philadelphia, Pennsylvania. I&apos;m eager to try and learn new things and help 
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
