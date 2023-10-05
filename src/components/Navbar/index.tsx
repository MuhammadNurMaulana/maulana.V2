import { HiHomeModern } from "react-icons/hi2";
import { FaHornbill, FaGg, FaInnosoft, FaGripfire } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { useState } from "react";
import { ContainerNavbar } from "./ContainerNavbar";
import { NavbarHeader } from "./NavbarHeader";
import { NavLink } from "react-router-dom";
import { NavbarButtonShow } from "./NavbarButtonShow";
import { NavbarMenu } from "./NavbarMenu";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const showNavbar = () => {
    setIsOpen(!isOpen);
  };

  const showMenuNav = () => {
    setShowMenu(!showMenu);
  };

  const navMenu = [
    {
      name: "Home",
      link: "/",
      icon: <AiOutlineHome />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: <FaGripfire />,
    },
    {
      name: "About",
      link: "/about",
      icon: <FaHornbill />,
    },
    {
      name: "Blog",
      link: "/blogs",
      icon: <FaGg />,
    },
    {
      name: "Article",
      link: "/articles",
      icon: <FaInnosoft />,
    },
  ];
  return (
    <ContainerNavbar>
      <NavbarButtonShow isOpen={isOpen} onClick={showNavbar} />

      <div className="lg:px-8 py-4 items-center justify-between w-full pr-4  lg:max-w-max lg:justify-start lg:items-start lg:flex-col flex flex-row gap-8 rounded-xl relative">
        <NavbarHeader isOpen={`${isOpen ? "flex" : "lg:hidden"}`} setIsOpen={showNavbar} />

        <NavbarMenu items={navMenu} isOpen={isOpen} showMenu={showMenu} />

        <footer className={`font-mono text-sm font-semibold hidden lg:block ${isOpen ? "flex" : "lg:hidden"}`}>
          <h1>
            &copy; 2023 with <span className="animate-pulse">❤️</span> by Maulana
          </h1>
        </footer>

        <button className={`flex flex-col gap-1 lg:hidden`} onClick={showMenuNav}>
          <span className={`w-6 h-[3px] bg-slate-900 dark:bg-white transition-all duration-300 ${showMenu ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`w-6 h-[3px] bg-slate-900 dark:bg-white transition-all duration-300 ${showMenu ? "opacity-0" : ""}`} />
          <span className={`w-6 h-[3px] bg-slate-900 dark:bg-white transition-all duration-300 ${showMenu ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>
    </ContainerNavbar>
  );
};
