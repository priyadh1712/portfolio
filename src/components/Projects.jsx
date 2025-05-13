import React from "react";
import dataProjects from "../assets/projects/pro";

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-light duration-700 dark:bg-[#03001C]"
    >
      <h2 className="text-6xl text-center text-black dark:text-white font-bold">
        Projects
        <hr className="w-24 h-1 mx-auto my-6 bg-name rounded border-0"></hr>
      </h2>

      {/* <div className="flex justify-end">
        <div className="circle md:w-[450px] md:h-[450px] w-[200px] h-[250px]"></div>
      </div> */}
      <div className="py-24">
        <div className="flex mx-10 md:flex-row flex-col flex-wrap">
          {dataProjects.map((project) => {
            return (
              <div
                data-aos="fade-up"
                key={project.id}
                className="dark:text-light m-3 rounded-lg text-dark text-center mx-auto p-4"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-lg group"
                >
                  <div className="relative">
                    <img
                      className="rounded-lg drop-shadow-2xl project-image transition-all duration-500 ease-in-out transform group-hover:scale-105 group-hover:shadow-xl"
                      src={project.image}
                      alt={project.name}
                      width="300"
                      height="200"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <span className="text-white font-bold">View Project →</span>
                    </div>
                  </div>
                </a>
                <div className="p-2">
                  <h1 className="text-xl py-2 font-bold">{project.name}</h1>
                  <div className="dark:text-dark rounded-md px-3 py-1 dark:bg-light text-light bg-dark font-bold">
                    {project.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
