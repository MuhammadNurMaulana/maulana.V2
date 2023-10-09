import { useEffect } from "react";
import { ContainerPages } from "../ContainerPages";
import { ProjectHeader } from "./ProjectHeader";

export const RrieMarket = () => {
  useEffect(() => {
    document.title = "Projects | RireNFTs Marketplace";
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
        title="RireNfts Marketplace"
        desc="Official website of RireNFTs, a company operating in the NFT Marketplace"
        source_code="https://github.com/MuhammadNurMaulana/Website_NFTs"
        live_demo="https://rire-nft.vercel.app"
        img="/images/project3.png"
      >
        {tech.map((item) => (
          <img src={item.src} alt={item.name} className="w-[25px] h-[25px]" />
        ))}
      </ProjectHeader>

      <div>
        <h1 className="text-2xl font-mono font-bold mt-8 mb-4">Introduction</h1>
        <p className="text-lg font-semibold">
          RireNFTs Marketplace is an NFT website that features an attractive look and beautiful design. I built this website completely frontend without a backend. I used various advanced and modern technologies and tools such as React, a
          JavaScript library for building user interfaces; Tailwind, a highly customisable CSS framework; TypeScript, a programming language that is a superset of JavaScript and adds static typing; Vite, a faster and lighter authoring tool;
          Vercel, a deployment platform for front-end applications and serverless functions; and GitHub, a software development platform that facilitates collaboration.
        </p>
      </div>
    </ContainerPages>
  );
};
