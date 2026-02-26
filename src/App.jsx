import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

import BidifyPage from "./pages/project-pages/BidifyPage";
import HolidazePage from "./pages/project-pages/HolidazePage";
import JimsPage from "./pages/project-pages/JimsPage";

export default function App() {
  return (
    <Routes>

      <Route element={<Layout />}>

        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/projects/bidify" element={<BidifyPage />} />
        <Route path="/projects/holidaze" element={<HolidazePage />} />
        <Route path="/projects/jims" element={<JimsPage />} />

      </Route>

    </Routes>
  );
}
