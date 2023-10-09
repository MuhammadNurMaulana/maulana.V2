import { Link } from "react-router-dom";
import { ContainerPages } from "../components/ContainerPages";
import projects from "../service/projects.json";
import { useEffect } from "react";
import { HeaderPages } from "../components/HeaderPages";

export const Projects = () => {
  useEffect(() => {
    document.title = "Maulana Personal | Projects";
  }, []);
  return (
    <ContainerPages>
      <HeaderPages title="Projects">some projects I'm currently working on that are open source</HeaderPages>

      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4 mt-12 md:pb-40 lg:pb-12">
        {projects.map((project, index) => (
          <div key={index} className="rounded-xl overflow-hidden group">
            <Link to={project.link} className="relative">
              <img src={project.src} alt={project.name} />
              <div className="top-0 left-0 right-0 bottom-0 bg-slate-800/80 absolute text-white flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:duration-1000 group-hover:transition-all">
                View Project Here
              </div>
            </Link>
            <div className="h-[180px] bg-slate-100 dark:bg-slate-800 flex flex-col justify-between p-4">
              <div>
                <h1 className="font-mono font-bold text-xl transition-all duration-1000 group-hover:duration-1000 group-hover:transition-all group-hover:text-green-600 ">{project.name}</h1>
                <p className="mt-2 font-mono">{project.desc}</p>
              </div>
              <div className="flex gap-4 items-center">
                {project.tech.map((tech, index) => (
                  <img src={tech.src} alt={tech.name} className="w-[25px] h-[25px]" key={index} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ContainerPages>
  );
};
