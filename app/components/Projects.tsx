import ProjectsData from "./ProjectsData";
import Image from "next/image";
import "../components/ProjectsStyles.css";

function Projects() {
  // const observer = new IntersectionObserver(
  //   (entries) => {
  //     entries.forEach((entry) => {
  //       entry.target.classList.toggle("show", entry.isIntersecting);
  //       if (entry.isIntersecting) observer.unobserve(entry.target);
  //     });
  //   },
  //   {
  //     threshold: 0.75,
  //   }
  // );

  // const cards = document.querySelectorAll(".card")
  // cards.forEach(card => {
  //   observer.observe(card)
  // })

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
          return (
            <li
              className="card md:max-w-[350px] min-w-[300px] bg-slate-400/20 p-4 rounded-lg shadow-2xl"
              key={project.title}
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
                  <p className="text-2xl font-bold">{project.title}</p>
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
                  <button className="px-6 py-3 bg-black hover:bg-zinc-800 rounded-sm font-semibold">
                    Live Page
                  </button>
                  <button className="px-6 py-3 bg-black hover:bg-zinc-800 rounded-sm font-semibold">
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
