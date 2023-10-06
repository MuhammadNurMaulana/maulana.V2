interface MenuProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  showMenu: boolean;
}

export const NavbarButtonMenu: React.FC<MenuProps> = ({ showMenu, ...rest }) => {
  return (
    <button className={`flex flex-col gap-1 lg:hidden`} {...rest}>
      <span className={`w-6 h-[3px] bg-slate-900 dark:bg-white transition-all duration-300 ${showMenu ? "rotate-45 translate-y-[7px]" : ""}`} />
      <span className={`w-6 h-[3px] bg-slate-900 dark:bg-white transition-all duration-300 ${showMenu ? "opacity-0" : ""}`} />
      <span className={`w-6 h-[3px] bg-slate-900 dark:bg-white transition-all duration-300 ${showMenu ? "-rotate-45 -translate-y-[7px]" : ""}`} />
    </button>
  );
};
