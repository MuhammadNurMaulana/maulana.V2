import { useEffect } from "react";
import { ContainerPages } from "../components/ContainerPages";
import { HeaderPages } from "../components/HeaderPages";
import { AboutParagraph } from "../components/AboutComponents/AboutParagraph";
import { AboutResume } from "../components/AboutComponents/AboutResume";

export const About = () => {
  useEffect(() => {
    document.title = "Maulana Personal | About";
  }, []);
  return (
    <ContainerPages>
      <HeaderPages title="About">A short story about introducing myself</HeaderPages>

      <AboutParagraph />

      <AboutResume />
    </ContainerPages>
  );
};
