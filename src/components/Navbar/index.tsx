import { FaHornbill, FaGg, FaInnosoft, FaGripfire } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { useState } from "react";
import { ContainerNavbar } from "./ContainerNavbar";
import { NavbarHeader } from "./NavbarHeader";
import { NavbarButtonShow } from "./NavbarButtonShow";
import { NavbarMenu } from "./NavbarMenu";
import { NavbarFooter } from "./NavbarFooter";
import { NavbarButtonMenu } from "./NavbarButtonMenu";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [change, setChange] = useState<boolean>(false);

  const showNavbar = () => {
    setIsOpen(!isOpen);
  };

  const showMenuNav = () => {
    setShowMenu(!showMenu);
  };

  const changeToggleTheme = () => {
    setChange(!change);
    document.documentElement.classList.toggle("dark");
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
        <NavbarHeader isOpen={isOpen} change={change} onClick={changeToggleTheme} />

        <NavbarMenu items={navMenu} isOpen={isOpen} showMenu={showMenu} />

        <NavbarFooter isOpen={isOpen} />

        <NavbarButtonMenu showMenu={showMenu} onClick={showMenuNav} />
      </div>
    </ContainerNavbar>
  );
};
