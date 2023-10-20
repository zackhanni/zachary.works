import ProjectsData from "./ProjectsData";
import Image from "next/image";

function Projects() {
  return (
    <section id="projects" className=" bg-slate-300 flex flex-col justify-center items-center">
      <h2 className="text-5xl text-center font-bold py-16">Noteable Projects</h2>
      <ul className="max-w-[90%] md:max-w-[1200] m-auto grid gap-10 pb-20 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {ProjectsData.map((project) => {
          return (
            <li
              id="project-card"
              className="md:max-w-[350px] min-w-[300px] bg-slate-400 p-4 rounded-lg shadow-2xl"
              key={project.title}
            >
              <Image
                src={project.src}
                height={175}
                width={350}
                alt={project.title}
                className="object-cover w-full h-[175px] rounded-sm"
              />
              <div className="py-4">
                <div>
                  <p className="text-2xl font-bold">{project.title}</p>
                  <p className="pb-4">{project.description}</p>
                </div>
                <div id="project-buttons" className="flex justify-between">
                  <button className="px-6 py-3 bg-black hover:bg-zinc-800 text-white rounded-sm font-semibold">
                    Live Page
                  </button>
                  <button className="px-6 py-3 bg-black hover:bg-zinc-800 text-white rounded-sm font-semibold">
                    View Code
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
