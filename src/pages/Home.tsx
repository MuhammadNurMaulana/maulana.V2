import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="dark:bg-slate-800 dark:text-white">
      <h1>Home</h1>
      <Link to="/about"></Link>
    </div>
  );
};
