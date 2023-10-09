interface HeaderProps {
  title: string;
  children: React.ReactNode;
}

export const HeaderPages: React.FC<HeaderProps> = ({ children, title }) => {
  return (
    <div className="border-b-2 border-dashed border-slate-400 pb-8">
      <h1 className="text-2xl font-mono font-bold">{title}</h1>
      <p className="font-semibold">{children}</p>
    </div>
  );
};
