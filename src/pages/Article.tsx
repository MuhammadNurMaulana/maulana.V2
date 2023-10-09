import { useEffect } from "react";
import { ContainerPages } from "../components/ContainerPages";

export const Article = () => {
  useEffect(() => {
    document.title = "Maulana Personal | Article";
  }, []);
  return <ContainerPages>Article</ContainerPages>;
};
