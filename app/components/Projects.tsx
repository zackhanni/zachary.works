import ProjectsData from "./ProjectsData";
import Image from "next/image";

function Projects() {
  return (
    <section className="">
      <div className="flex flex-wrap">
        {ProjectsData.map((project) => {
          return (
            <div className="w-[350] h-[470]" key={project.title}>
              <Image
                src={project.src}
                height={400}
                width={100}
                alt={project.title}
                layout="responsive"
                className="w-24 h-16"
                // style={{
                //   width: 350,
                //   height: 200,
                // }} 
              />
              <div className="information">
                <p>{project.title}</p>
                <p>{project.description}</p>
                <button className="p-4 bg-black text-white">Button</button>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
