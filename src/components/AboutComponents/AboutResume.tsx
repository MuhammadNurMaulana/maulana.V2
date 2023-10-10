import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";
import resume2 from "../../resume/resume2.pdf";

export const AboutResume: React.FC = () => {
  return (
    <div className="pb-8  md:pb-[500px] pt-12">
      <Link to={resume2} target="_blank" rel="noopener noreferrer" className="border border-slate-600 py-3 px-5 rounded-lg text-lg font-mono font-semibold flex items-center gap-4 max-w-max group" title="Muhammad Nur Maulana Resume">
        <FiDownload />
        <h1 className="group-hover:translate-x-2 transition-[transform] duration-500">Download Resume</h1>
      </Link>
    </div>
  );
};
