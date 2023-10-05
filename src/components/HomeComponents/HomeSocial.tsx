import { Link } from "react-router-dom";

interface SocialLinkProps {
  items: {
    name: string;
    link: string;
    icon: JSX.Element;
  }[];
}
export const HomeSocial: React.FC<SocialLinkProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-9 grid-rows-1 gap-4">
      {items.map((item, index) => (
        <Link key={index} to={item.link} className="flex flex-col items-center bg-slate-200 dark:bg-slate-800 py-2 rounded-lg gap-2" target="_blank">
          {item.icon}
          <h1 className="text-sm font-semibold">{item.name}</h1>
        </Link>
      ))}
    </div>
  );
};
