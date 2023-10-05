import { HiHomeModern } from "react-icons/hi2";
import { useState } from "react";
import { ContainerNavbar } from "./ContainerNavbar";
import { NavbarHeader } from "./NavbarHeader";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const showNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ContainerNavbar>
      <div className="group">
        <h1 className="text-xs font-semibold font-mono absolute top-14 opacity-0 group-hover:opacity-100 duration-300 transition-all ">{isOpen ? "Click For Hide Menu" : "Click For Show Menu"} </h1>
        <button className="hidden lg:block text-3xl" onClick={showNavbar}>
          <HiHomeModern />
        </button>
      </div>

      <div className="bg-slate-300 px-8 flex-col flex gap-8 rounded-lg border-b border-slate-800">
        <NavbarHeader isOpen={`${isOpen ? "flex" : "lg:hidden"}`} setIsOpen={showNavbar} />
      </div>
    </ContainerNavbar>
  );
};
