"use client";

import ProjectsData from "./ProjectsData";
import Link from "next/link";
import Image from "next/image";
import "../components/ProjectsStyles.css";
import { useInView } from "react-intersection-observer";

function Projects() {
  return (
    <section
      id="projects"
      className="radial-gradient flex flex-col justify-center items-center py-8"
    >
      <h2 className="text-5xl lg:text-7xl font-bold text-center py-4 text-white sticky top-0 z-10 w-full backdrop-blur">
        Notable Projects
      </h2>
      <ul className="max-w-[90%] md:max-w-[1200] m-auto grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-8 overflow-hidden">
        {ProjectsData.map((project) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const { ref, inView } = useInView({
            threshold: 0.15,
            triggerOnce: true,
          });

          return (
            <li
              className={`card md:max-w-[350px] min-w-[300px] bg-slate-400/10 backdrop-blur p-4 rounded-lg shadow-2xl ${
                inView ? "show" : "hide"
              }`}
              key={project.title}
              ref={ref}
            >
              <Image
                src={project.src}
                height={175}
                width={350}
                alt={project.title}
                className="object-cover w-full h-[175px] rounded-sm"
              />
              <div className="py-3 text-white">
                <div>
                  {/* <p>{inView.toString()}</p> */}
                  <p className="text-2xl font-bold">{project.title}</p>
                  <Link href={project.github}>
                    <p className="text-blue-600 hover:text-blue-900">
                      View on github
                    </p>
                  </Link>
                  <p className="py-6">{project.description}</p>
                  <div className="flex flex-wrap pb-6">
                    {project.tools?.map((tool) => {
                      return (
                        <p
                          className="text-white bg-blue-800 rounded-full py-1 px-4 m-1"
                          key={tool}
                        >
                          {tool}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <Link href={project.liveWebsite}>
                  <button className="py-2 w-full bg-blue-800 hover:bg-blue-900 rounded-sm font-semibold">
                    View Live Page
                  </button>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Projects;
