import { useEffect } from "react";
import { ContainerPages } from "../components/ContainerPages";
import { HeaderPages } from "../components/HeaderPages";
import { Link } from "react-router-dom";
import blogs from "../service/blogs.json";

export const Blog = () => {
  useEffect(() => {
    document.title = "Maulana Personal | Blog";
  }, []);
  return (
    <ContainerPages>
      <HeaderPages title="Blogs">A collection of blogs about the development of technology</HeaderPages>

      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-8">
        {blogs.map((blog, index) => (
          <Link to={blog.link} key={index} className="my-12 text-xl font-semibold group">
            <h1 className="pb-8 group-hover:text-green-600 transition-colors duration-500">{blog.title}</h1>
            <img src={blog.src} alt={blog.title} className="rounded-lg" />
          </Link>
        ))}
      </div>
    </ContainerPages>
  );
};
