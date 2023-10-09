import { useEffect } from "react";
import { ContainerPages } from "../components/ContainerPages";

export const Blog = () => {
  useEffect(() => {
    document.title = "Maulana Personal | Blog";
  }, []);
  return <ContainerPages>Blog</ContainerPages>;
};
