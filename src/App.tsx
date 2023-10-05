import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
