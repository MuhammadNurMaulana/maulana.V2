interface ContainerProps {
  children: React.ReactNode;
}
export const ContainerPages: React.FC<ContainerProps> = ({ children }) => {
  return <div className="dark:bg-slate-900 absolute top-0 left-0 dark:text-white w-[100%] h-[2000px] lg:pl-[500px] pt-20 md:pt-28 px-8 lg:pt-12 lg:pr-16 text-justify">{children}</div>;
};
