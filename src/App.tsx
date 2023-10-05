import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Navbar } from "./components/Navbar";
import { Blog } from "./pages/Blog";
import { Article } from "./pages/Article";
import { About } from "./pages/About";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
