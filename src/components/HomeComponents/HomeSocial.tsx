import { Link } from "react-router-dom";
import { Items } from "../../types/items";

interface SocialLinkProps {
  items: Items;
}
export const HomeSocial: React.FC<SocialLinkProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-7 grid-rows-1 gap-4 mb-12">
      {items.map((item, index) => (
        <Link key={index} to={item.link} className="flex flex-col items-center bg-slate-200 dark:bg-slate-800 py-2 rounded-lg gap-2" target="_blank">
          {item.icon}
          <h1 className="text-sm font-semibold">{item.name}</h1>
        </Link>
      ))}
    </div>
  );
};
