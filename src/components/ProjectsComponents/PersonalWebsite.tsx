import { useEffect } from "react";
import { ContainerPages } from "../ContainerPages";

export const PersonalWebsite = () => {
  useEffect(() => {
    document.title = "Projects | Personal Website";
  }, []);
  return (
    <ContainerPages>
      <div>PersonalWebsite</div>
    </ContainerPages>
  );
};
