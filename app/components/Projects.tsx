import ProjectsData from "./ProjectsData";
import Image from "next/image";

function Projects() {
  return (
    <section id="projects" className="py-16 bg-slate-100">
      <div className="max-w-[90%] md:max-w-[1200] m-auto grid gap-10 pb-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {ProjectsData.map((project) => {
          return (
            <div className="project-card bg-slate-300 p-4" key={project.title}>
              <Image
                src={project.src}
                height={150}
                width={300}
                alt={project.title}
                className="object-cover w-full"
              />
              <div className="">
                <p className="text-3xl font-bold">{project.title}</p>
                <p className="py-4">{project.description}</p>
                <div className="buttons flex justify-between">
                  <button className="p-4 bg-black text-white">Live Site</button>
                  <button className="p-4 bg-black text-white">View Code</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
