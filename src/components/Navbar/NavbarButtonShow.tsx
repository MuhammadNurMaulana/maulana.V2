import { HiHomeModern } from "react-icons/hi2";

interface Show extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
}

export const NavbarButtonShow: React.FC<Show> = ({ isOpen, ...rest }) => {
  return (
    <div className="group dark:text-white">
      <h1 className={`text-xs font-semibold font-mono absolute top-14 opacity-0 group-hover:opacity-100 duration-300 transition-all left-10`}>{isOpen ? "Click For Hide Menu" : "Click For Show Menu"} </h1>
      <button className="hidden lg:block text-3xl" {...rest}>
        <HiHomeModern />
      </button>
    </div>
  );
};
