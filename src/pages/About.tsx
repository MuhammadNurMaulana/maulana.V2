import { useEffect } from "react";
import { ContainerPages } from "../components/ContainerPages";
import { Link } from "react-router-dom";
import resume2 from "../resume/resume2.pdf";
import { FiDownload } from "react-icons/fi";

export const About = () => {
  useEffect(() => {
    document.title = "Maulana Personal | About";
  }, []);
  return (
    <ContainerPages>
      <div className="border-b-2 border-dashed border-slate-400 pb-8">
        <h1 className="text-2xl font-mono font-bold">About</h1>
        <p className="font-semibold">A short story about introducing myself</p>
      </div>
      <p className="my-8 text-lg">
        Hi, I'm Muhammad Nur Maulana. I am a frontend developer and I am proficient in programming languages such as Java, JavaScript, and TypeScript. In web development, I have experience in HTML, CSS, JavaScript, Tailwind, Bootstrap,
        Chakra, React and TypeScript.
      </p>
      <p className="text-lg">
        I am committed to delivering leading-edge solutions that meet and exceed company expectations. My problem-solving skills and attention to detail allow me to tackle complex challenges and drive innovation in every project I work on.
      </p>
      <p className="text-lg my-8">
        In addition, I also have good communication skills that enable me to work effectively in a team. I always strive to learn and develop new skills to stay up-to-date with the latest technology. I believe that with dedication and hard
        work, we can achieve great results
      </p>
      <div className="pb-8 md:pb-[500px] lg:pb-36">
        <Link to={resume2} target="_blank" rel="noopener noreferrer" className="border border-slate-600 py-3 px-5 rounded-lg text-lg font-mono font-semibold flex items-center gap-4 max-w-max group" title="Muhammad Nur Maulana Resume">
          <FiDownload />
          <h1 className="group-hover:translate-x-2 transition-[transform] duration-500">Download Resume</h1>
        </Link>
      </div>
    </ContainerPages>
  );
};
