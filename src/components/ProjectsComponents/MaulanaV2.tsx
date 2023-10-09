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
    </ContainerPages>
  );
};
