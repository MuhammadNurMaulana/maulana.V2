import { useEffect } from "react";
import { ContainerPages } from "../components/ContainerPages";

export const About = () => {
  useEffect(() => {
    document.title = "Maulana Personal | About";
  }, []);
  return <ContainerPages>About</ContainerPages>;
};
