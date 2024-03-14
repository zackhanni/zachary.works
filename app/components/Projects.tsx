"use client";

import ProjectsData from "./ProjectsData";
import Link from "next/link";
import Image from "next/image";
import "../components/ProjectsStyles.css";
import { useInView } from "react-intersection-observer";
import ToolBubbles from "./ToolBubbles";

function Projects() {
  return (
    <section
      id="projects"
      className="radial-gradient flex flex-col justify-center items-center"
    >
      <h2 className="text-4xl font-bold text-center py-4 text-white sticky top-0 z-10 w-full backdrop-blur">
        Projects
      </h2>

      <ul className="card-container m-auto grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden">
        {ProjectsData.map((project) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const { ref, inView } = useInView({
            threshold: 0.15,
            triggerOnce: true,
          });

          return (
            <li
              className={`card bg-slate-400/10 sm:w-[300px] backdrop-blur p-4 rounded-lg shadow-2xl ${
                inView ? "show" : "hide"
              }`}
              key={project.title}
              ref={ref}
            >
              <div className="overflow-hidden">
                <Link href={project.liveWebsite} target="_blank">
                  <Image
                    src={project.src}
                    height={175}
                    width={350}
                    alt={project.title}
                    className="object-cover w-full h-[175px] rounded-md hover:scale-110 hover:grayscale ease-out duration-500"
                  />
                </Link>
              </div>
              <div className="py-3 text-white text-sm">
                <div>
                  {/* <p>{inView.toString()}</p> */}
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-lg">{project.title}</p>
                    {/* <Link href={project.github} target="_blank">
                      <p className="text-[#514E6D] text-sm hover:text-white duration-300">
                        GitHub
                      </p>
                    </Link> */}
                  </div>

                  <p className="mt-1 text-sm">{project.description}</p>

                  <ToolBubbles tools={project.tools} />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Projects;
