"use client";

import ProjectsData from "./ProjectsData";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import ToolBubbles from "./ToolBubbles";

export default function Projects() {
  return (
    <section
      id="projects"
      className="radial-gradient flex flex-col justify-center items-center pb-16"
    >
      <div className="container">
        <div className="w-full flex items-center justify-center z-10 sticky top-0 backdrop-blur h-[90px]">
          <h2 className="text-5xl font-bold  text-slate-200 ">Projects</h2>
        </div>

        <ul className="row pl-0 overflow-hidden gy-4">
          {ProjectsData.map((project) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const { ref, inView } = useInView({
              threshold: 0.15,
              triggerOnce: true,
            });

            return (
              <li
                className={`col-12 col-sm-6 col-lg-4 ${
                  inView ? "show" : "hide"
                }`}
                key={project.title}
                ref={ref}
              >
                <div className="card pl-0 group bg-transparent backdrop-blur rounded-lg shadow-lg min-h-full duration-150">
                  <div className="overflow-hidden">
                    <Link href={project.liveWebsite} target="_blank">
                      <Image
                        src={project.src}
                        height={175}
                        width={350}
                        alt={project.title}
                        className="card-img-top object-cover w-full h-[200px] group-hover:scale-105 group-hover:grayscale ease-out duration-300"
                      />
                    </Link>
                  </div>
                  <div className="card-body py-3 !text-[#94A3B8] text-sm group-hover:!bg-slate-500/10">
                    <div>
                      <Link
                        href={project.liveWebsite}
                        target="_blank"
                        className="text-decoration-none"
                      >
                        <p className="card-title !text-slate-200 font-bold text-2xl">
                          {project.title}
                        </p>
                      </Link>

                      <p className="card-text">{project.description}</p>

                      <ToolBubbles tools={project.tools} />
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
