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
      className="radial-gradient flex flex-col justify-center items-center py-8"
    >
      <h2 className="text-5xl font-bold text-center py-4 text-white sticky top-0 z-10 w-full backdrop-blur">
        Projects
      </h2>
      <ul className="min-w-[50%] max-w-[90%] lg:max-w-[50%] m-auto grid gap-10 grid-cols-1 xl:grid-cols-2 py-8 overflow-hidden">
        {ProjectsData.map((project) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const { ref, inView } = useInView({
            threshold: 0.15,
            triggerOnce: true,
          });

          return (
            <li
              className={`card bg-slate-400/10 backdrop-blur p-4 rounded-lg shadow-2xl ${
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
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-bold">{project.title}</p>
                  <Link href={project.github}>
                    <p className="text-blue-600 text-sm hover:text-blue-900">
                      GitHub
                    </p>
                  </Link>
                  </div>
                  
                  <p className="mt-1">{project.description}</p>

                  <ToolBubbles tools={project.tools} />

                </div>
                <Link href={project.liveWebsite}>
                  <button className="mt-4 py-2 w-full bg-blue-800 hover:bg-blue-900 rounded-sm font-semibold">
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
