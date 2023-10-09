import { ContainerPages } from "../ContainerPages";
import { ArrowBack } from "./ArrowBack";

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
        <ArrowBack />
        <h1>Maulana V2</h1>
        <p>A personal website built with some powerful technologies</p>

        <div>
          <h1>Tech Use :</h1>
          {tech.map((item) => (
            <img src={item.src} alt={item.name} className="w-[25px] h-[25px]" />
          ))}
        </div>
      </div>
    </ContainerPages>
  );
};
