interface ContainerProps {
  children: React.ReactNode;
}
export const ContainerPages: React.FC<ContainerProps> = ({ children }) => {
  return <div className="dark:bg-slate-900 absolute top-0 left-0 dark:text-white/80 w-[100%] lg:pl-[500px] pt-20 md:pt-28 px-8 lg:pt-12 lg:pr-16 text-justify text-slate-800 pb-20">{children}</div>;
};
