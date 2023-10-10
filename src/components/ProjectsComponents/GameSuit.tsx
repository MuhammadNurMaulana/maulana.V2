import { useEffect } from "react";
import { ContainerPages } from "../ContainerPages";
import { ProjectHeader } from "./ProjectHeader";

export const GameSuit = () => {
  useEffect(() => {
    document.title = "Projects | GameSuit";
  }, []);
  const tech = [
    {
      src: "/images/icons8-html5-100.png",
      name: "HTML",
    },
    {
      src: "/images/icons8-css-100.png",
      name: "CSS",
    },
    {
      src: "/images/icons8-javascript-100.png",
      name: "Javascript",
    },
  ];
  return (
    <ContainerPages>
      <ProjectHeader
        title="GameSuit Javanese"
        desc="A game website built with html,css,javascript"
        source_code="https://github.com/MuhammadNurMaulana/MuhammadNurMaulana.github.io"
        live_demo="https://muhammadnurmaulana.github.io"
        img="/images/project1.png"
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
