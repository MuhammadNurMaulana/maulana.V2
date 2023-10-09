interface NavbarProps {
  children: React.ReactNode;
}
export const ContainerNavbar: React.FC<NavbarProps> = ({ children }) => {
  return <div className="flex w-full lg:items-start lg:w-[30rem] lg:justify-end lg:pt-4 gap-8 fixed z-50 top-0 left-0 dark:text-white/80 bg-white text-slate-800 dark:bg-slate-900">{children}</div>;
};
