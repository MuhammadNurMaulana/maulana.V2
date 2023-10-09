import { Link } from "react-router-dom";
import { ContainerPages } from "../ContainerPages";
import { ArrowBack } from "./ArrowBack";
import { FaGithub, FaReact } from "react-icons/fa";

export const MaulanaV2Pages = () => {
  const tech = [
    {
      src: "/images/icons8-vite-100.png",
      name: "Vite",
    },
    {
      src: "/images/icons8-tailwindcss-100.png",
      name: "Tailwind CSS",
    },
    {
      src: "/images/icons8-typescript-100.png",
      name: "Typescript",
    },
    {
      src: "/images/icons8-react-100.png",
      name: "React",
    },
    {
      src: "/images/vercel.png",
      name: "Vercel",
    },
  ];
  return (
    <ContainerPages>
      <div>
        <div className="border-b-2 border-slate-600 border-dashed pb-8">
          <ArrowBack />
          <h1 className="text-2xl font-mono font-semibold mt-8 mb-2">Maulana V2</h1>
          <p className="font-semibold text-lg">A personal website built with some powerful technologies</p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between my-2">
          <div className="flex gap-2 items-center my-3">
            <h1 className="font-semibold text-lg">Tech Stack :</h1>
            {tech.map((item) => (
              <img src={item.src} alt={item.name} className="w-[25px] h-[25px]" />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link to={"https://github.com/MuhammadNurMaulana/maulana.V2"} className="flex items-center gap-2 text-lg" target="_blank">
              <FaGithub />
              <h1 className="font-bold">Source Code</h1>
            </Link>
            <h1> | </h1>
            <Link to={"https://maulana-v2.vercel.app"} className="flex items-center gap-2 text-lg" target="_blank">
              <FaReact />
              <h1 className="font-bold">Live Demo</h1>
            </Link>
          </div>
        </div>

        <div className="overflow-hidden w-full group">
          <img src="/images/project4.png" alt="Personal Website" className="group-hover:scale-110 transition-all duration-1000" />
        </div>
      </div>
    </ContainerPages>
  );
};
