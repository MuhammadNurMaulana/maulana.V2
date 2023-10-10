import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

interface ArrowProps {
  to: string;
}

export const ArrowBack: React.FC<ArrowProps> = ({ to }) => {
  return (
    <Link to={to} className="flex gap-2 items-center text-2xl font-mono font-semibold group max-w-max">
      <IoArrowBackCircleOutline />
      <h1 className="group-hover:translate-x-2 duration-500 transition-all">Back</h1>
    </Link>
  );
};
