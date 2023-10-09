import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Navbar } from "./components/Navbar";
import { Blog } from "./pages/Blog";
import { Article } from "./pages/Article";
import { About } from "./pages/About";
import { MaulanaV2Pages } from "./components/ProjectsComponents/MaulanaV2";
import { RrieMarket } from "./components/ProjectsComponents/RrieMarket";
import { PersonalWebsite } from "./components/ProjectsComponents/PersonalWebsite";
import { GameSuit } from "./components/ProjectsComponents/GameSuit";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blog />} />
        <Route path="articles" element={<Article />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/maulana-v2" element={<MaulanaV2Pages />} />
        <Route path="projects/rire-nfts-marketplace" element={<RrieMarket />} />
        <Route path="projects/personal-website" element={<PersonalWebsite />} />
        <Route path="projects/gamesuit" element={<GameSuit />} />
      </Routes>
    </>
  );
}

export default App;
