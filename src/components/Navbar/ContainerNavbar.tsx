interface NavbarProps {
  children: React.ReactNode;
}
export const ContainerNavbar: React.FC<NavbarProps> = ({ children }) => {
  return <div className="flex items-start w-[30rem] justify-end pt-20 gap-8 absolute top-0 left-0">{children}</div>;
};
