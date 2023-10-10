import { useEffect } from "react";
import { ContainerPages } from "../ContainerPages";
import { ProjectHeader } from "./ProjectHeader";

export const PersonalWebsite = () => {
  useEffect(() => {
    document.title = "Projects | Personal Website";
  }, []);

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
      src: "/images/icons8-javascript-100.png",
      name: "Javascript",
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
      <ProjectHeader
        title="Maulana Personal Website"
        desc="Personal website built with some powerful technologies"
        source_code="https://github.com/MuhammadNurMaulana/my-portoflio-new"
        live_demo="https://maulana-porto.vercel.app"
        img="/images/project2.png"
        tech={tech}
      />
      <div>
        <h1 className="text-2xl font-mono font-bold mt-8 mb-4">Introduction</h1>
        <p className="text-lg font-semibold">
          I created this personal website. In the process, I used various advanced and modern technologies and tools such as React, a JavaScript library for building user interfaces; Tailwind, a highly customizable CSS framework;
          TypeScript, a programming language that is a superset of JavaScript and adds static typing; Vite, a faster and lighter build tool; Vercel, a deployment platform for front-end applications and serverless functions; and GitHub, a
          software development platform that facilitates collaboration. I have used all of these to create a responsive, interactive, and user-friendly portfolio website.
        </p>
      </div>
    </ContainerPages>
  );
};
