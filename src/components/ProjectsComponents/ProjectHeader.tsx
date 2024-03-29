import { Link } from "react-router-dom";
import { ArrowBack } from "./ArrowBack";
import { FaGithub, FaReact } from "react-icons/fa";
import { Tech } from "../../types/items";

interface HeaderProps {
  title: string;
  desc: string;
  source_code: string;
  live_demo: string;
  img: string;
  tech: Tech;
}

export const ProjectHeader: React.FC<HeaderProps> = ({ title, desc, source_code, live_demo, img, tech }) => {
  return (
    <div>
      <div className="border-b-2 border-slate-600 border-dashed pb-8">
        <ArrowBack to="/project" />
        <h1 className="text-2xl font-mono font-semibold mt-8 mb-2">{title}</h1>
        <p className="font-semibold text-lg">{desc}</p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between my-2">
        <div className="flex gap-2 items-center my-3">
          <h1 className="font-semibold text-lg">Tech Stack :</h1>
          {tech.map((item) => (
            <img src={item.src} alt={item.name} className="w-[25px] h-[25px]" />
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link to={source_code} className="flex items-center gap-2 text-lg group" target="_blank">
            <FaGithub />
            <h1 className="font-bold text-green-500 group-hover:text-green-700">Source Code</h1>
          </Link>
          <h1> | </h1>
          <Link to={live_demo} className="flex items-center gap-2 text-lg group" target="_blank">
            <FaReact />
            <h1 className="font-bold text-green-500 group-hover:text-green-700">Live Demo</h1>
          </Link>
        </div>
      </div>

      <div className="overflow-hidden w-full group">
        <img src={img} alt="Personal Website" className="group-hover:scale-110 transition-all duration-1000" />
      </div>
    </div>
  );
};
