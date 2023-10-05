import { HiHomeModern } from "react-icons/hi2";
import { FaHornbill, FaGg, FaInnosoft, FaGripfire } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { useState } from "react";
import { ContainerNavbar } from "./ContainerNavbar";
import { NavbarHeader } from "./NavbarHeader";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const showNavbar = () => {
    setIsOpen(!isOpen);
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
      <div className="group dark:text-white">
        <h1 className={`text-xs font-semibold font-mono absolute top-14 opacity-0 group-hover:opacity-100 duration-300 transition-all left-10`}>{isOpen ? "Click For Hide Menu" : "Click For Show Menu"} </h1>
        <button className="hidden lg:block text-3xl" onClick={showNavbar}>
          <HiHomeModern />
        </button>
      </div>

      <div className="px-8 py-4 lg:flex-col flex flex-row gap-8 rounded-xl relative">
        <NavbarHeader isOpen={`${isOpen ? "flex" : "lg:hidden"}`} setIsOpen={showNavbar} />

        <div className="p-2 flex-col flex gap-4 text-xl border-b border-t border-slate-800">
          {navMenu.map((item, index) => (
            <NavLink
              to={item.link}
              key={index}
              className={({ isActive }) =>
                isActive ? "bg-slate-200 dark:bg-slate-800 dark:text-white flex items-center gap-2 py-2 px-3 rounded-lg translate-x-1 duration-300" : "flex items-center gap-2 py-2 px-3 transition-all duration-300"
              }
            >
              {item.icon}
              <h1 className={`font-mono  font-semibold ${isOpen ? "flex" : "lg:hidden"}`}>{item.name}</h1>
            </NavLink>
          ))}
        </div>

        <footer className={`font-mono text-sm font-semibold ${isOpen ? "flex" : "lg:hidden"}`}>
          <h1>
            &copy; 2023 with <span className="animate-pulse">❤️</span> by Maulana
          </h1>
        </footer>
      </div>
    </ContainerNavbar>
  );
};
