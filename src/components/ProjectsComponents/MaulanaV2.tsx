import { ContainerPages } from "../ContainerPages";
import { ProjectHeader } from "./ProjectHeader";

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
      <ProjectHeader title="Maulana V2" desc="A personal website built with some powerful technologies" source_code="https://github.com/MuhammadNurMaulana/maulana.V2" live_demo="https://maulana-v2.vercel.app" img="/images/project4.png">
        {tech.map((item) => (
          <img src={item.src} alt={item.name} className="w-[25px] h-[25px]" />
        ))}
      </ProjectHeader>

      <div>
        <h1 className="text-2xl font-mono font-bold mt-8 mb-4">Introduction</h1>
        <p className="text-lg font-semibold">
          I have created this portfolio website. In the process, I used various advanced and modern technologies and tools such as React, a JavaScript library for building user interfaces; Tailwind, a highly customizable CSS framework;
          TypeScript, a programming language that is a superset of JavaScript and adds static typing; Vite, a faster and lighter build tool; Vercel, a deployment platform for front-end applications and serverless functions; and GitHub, a
          software development platform that facilitates collaboration. I have used all of these to create a responsive, interactive, and user-friendly portfolio website.
        </p>
      </div>
    </ContainerPages>
  );
};
