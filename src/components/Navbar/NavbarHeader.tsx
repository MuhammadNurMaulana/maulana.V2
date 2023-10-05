interface NavbarHeaderProps {
  isOpen: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavbarHeader: React.FC<NavbarHeaderProps> = ({ isOpen }) => {
  return (
    <div className={`flex items-center flex-col gap-4 py-2 ${isOpen}`}>
      <div className="flex gap-1 items-center py-1 px-3 bg-white rounded-xl font-semibold text-sm">
        <div className="w-2 h-2 bg-green-800 rounded-full animate-ping" />
        <h1 className="text-sm font-mono font-semibold">Hire Me</h1>
      </div>
      <div>
        <div className="rounded-full w-[100px] h-[100px] bg-slate-600" />
      </div>
      <div className="relative">
        <img src="/images/verified.png" alt="verified" className="absolute -left-6 top-1" />
        <h1 className="text-lg font-semibold">Muhammad Nur Maulana</h1>
        <p className="">@maulana</p>
      </div>
    </div>
  );
};
