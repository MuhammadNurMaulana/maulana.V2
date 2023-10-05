import { ButtonHTMLAttributes, useState } from "react";

interface NavbarHeaderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: string;

  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavbarHeader: React.FC<NavbarHeaderProps> = ({ isOpen }) => {
  const [change, setChange] = useState<boolean>(false);
  const changeToggleTheme = () => {
    setChange(!change);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div className={`flex items-center lg:flex-col gap-4 lg:py-2 ${isOpen}`}>
      <div className="hidden lg:block absolute top-0 left-0 w-full h-[18%] bg-[url(/images/city.jpg)] bg-cover bg-center -z-10 rounded-t-lg" />
      <div className="hidden lg:flex gap-2 items-center py-1 px-3 bg-white rounded-xl font-semibold text-sm">
        <div className="w-2 h-2 bg-green-800 rounded-full animate-ping" />
        <h1 className="text-sm font-mono font-semibold dark:text-slate-900">Hire Me</h1>
      </div>
      <div>
        <div className="rounded-full w-[40px] h-[40px] md:w-[65px] md:h-[65px] lg:w-[100px] lg:h-[100px] bg-slate-300 bg-[url(/images/my.png)] bg-cover bg-center" />
      </div>
      <div className="relative">
        <img src="/images/verified.png" alt="verified" className="absolute -right-6 lg:-left-6 lg:top-1 " />
        <h1 className="text-sm lg:text-lg font-serif font-bold ">Muhammad Nur Maulana</h1>
        <p className="font-serif hidden lg:block">@maulana</p>
        <button className={`w-20 p-1 bg-cover rounded-2xl lg:mt-4 bg-bottom  ${change ? "bg-[url(/images/retro.jpg)]" : "bg-[url(/images/car.jpg)]"}`} onClick={changeToggleTheme}>
          <div className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-white bg-cover bg-center ${change ? "animate-toRight" : "animate-toLeft"}`}>
            <div className={`w-3 h-3 rounded-full bg-white bg-cover bg-center ${change ? "animate-toRight" : "animate-toLeft"}`} />
          </div>
        </button>
      </div>
    </div>
  );
};
