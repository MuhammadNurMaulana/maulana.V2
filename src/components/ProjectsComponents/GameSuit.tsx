import { useEffect } from "react";
import { ContainerPages } from "../ContainerPages";

export const GameSuit = () => {
  useEffect(() => {
    document.title = "Projects | GameSuit";
  }, []);
  return (
    <ContainerPages>
      <div>GameSuit</div>
    </ContainerPages>
  );
};
