"use client";

import ProjectsData from "./ProjectsData";
import Image from "next/image";
import "../components/ProjectsStyles.css";
import { useInView } from "react-intersection-observer";

function Projects() {
  return (
    <section
      id="projects"
      className=" bg-black flex flex-col justify-center items-center"
    >
      <h2 className="text-5xl text-center font-bold py-16 text-white">
        Noteable Projects
      </h2>
      <ul className="max-w-[90%] md:max-w-[1200] m-auto grid gap-10 pb-20 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        
        {ProjectsData.map((project) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const { ref, inView } = useInView({
            threshold: 0.15,
            triggerOnce: true,
          });

          return (
            <li
              className={`card md:max-w-[350px] min-w-[300px] bg-slate-400/20 p-4 rounded-lg shadow-2xl ${
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
                  <p className="text-blue-600">View on github</p>
                  <p className="py-6">{project.description}</p>
                  <div className="flex flex-wrap pb-6">
                    {project.tools?.map((tool) => {
                      return (
                        <p
                          className="text-white bg-blue-800 rounded-full py-1 px-4 mx-1"
                          key={tool}
                        >
                          {tool}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <div id="project-buttons" className="flex justify-between">
                  <button className="py-2 w-full bg-blue-800 hover:bg-blue-900 rounded-sm font-semibold">
                    View Live Page
                  </button>
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
