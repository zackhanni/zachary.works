"use client";

import ProjectsData from "./ProjectsData";
import Link from "next/link";
import Image from "next/image";
import "../components/ProjectsStyles.css";
import { useInView } from "react-intersection-observer";
import ToolBubbles from "./ToolBubbles";

export default function Projects() {
  return (
    <section
      id="projects"
      className="radial-gradient flex flex-col justify-center items-center pb-16"
    >
      <div className="container">
        <h2 className="text-5xl font-bold text-center py-4 z-10 text-white sticky top-0 backdrop-blur">
          Projects
        </h2>

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
                <div className="card pl-0 bg-dark backdrop-blur rounded-lg shadow-2xl">
                  <div className="overflow-hidden">
                    <Link href={project.liveWebsite} target="_blank">
                      <Image
                        src={project.src}
                        height={175}
                        width={350}
                        alt={project.title}
                        className="card-img-top object-cover w-full h-[200px] hover:scale-110 hover:grayscale ease-out duration-500"
                      />
                    </Link>
                  </div>
                  <div className="card-body py-2 text-white text-sm min-h-max">
                    <div>
                      <div className="flex justify-between items-center">
                        <p className="card-title font-bold text-2xl">
                          {project.title}
                        </p>
                      </div>

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
