import { NavLink } from "react-router-dom";

interface Menu {
  showMenu: boolean;
  isOpen: boolean;
  items: {
    name: string;
    link: string;
    icon: JSX.Element;
  }[];
}
export const NavbarMenu: React.FC<Menu> = ({ items, isOpen, showMenu }) => {
  return (
    <div className={`p-2 lg:flex-col lg:flex gap-4 text-xl border-y border-slate-800 dark:border-slate-200 bg-white dark:bg-slate-900 ${showMenu ? "flex flex-col w-full absolute top-full" : "hidden"}`}>
      {items.map((item, index) => (
        <NavLink
          to={item.link}
          key={index}
          className={({ isActive }) => (isActive ? "bg-slate-200 dark:bg-slate-800 dark:text-white flex items-center gap-2 py-2 px-3 rounded-lg translate-x-1 duration-300" : "flex items-center gap-2 py-2 px-3 transition-all duration-300")}
        >
          {item.icon}
          <h1 className={`font-mono  font-semibold ${isOpen ? "flex" : "lg:hidden"}`}>{item.name}</h1>
        </NavLink>
      ))}
    </div>
  );
};
