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

      {/* Layout wrapper */}
      <Route element={<Layout />}>

        {/* main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* project pages */}
        <Route path="/projects/bidify" element={<BidifyPage />} />
        <Route path="/projects/holidaze" element={<HolidazePage />} />
        <Route path="/projects/jims" element={<JimsPage />} />

      </Route>

    </Routes>
  );
}


// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import { About, Contact, Home, Projects } from "./pages/index";

// export default function App() {
//   return (
//     <>
//       <Header />
//       <main data-bs-spy="scroll" data-bs-target="#navbar">
//         <Home />
//         <Projects />
//         <About />
//         <Contact />
//       </main>
//       <Footer />
//     </>
//   );
// }

// // import './App.css'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "../components/Layout";
// import { About, Contact, Home, Projects } from "../pages/index";

// export default function App() {
//   return (
//     <>
//       <BrowserRouter>
//       <Routes>
//       <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="Projects" element={<Projects />} />
//           <Route path="About" element={<About />} />
//           <Route path="Contact" element={<Contact />} />
//         </Route>
//       </Routes>

//       </BrowserRouter>
//       {/* <div className="card">
//         <button  className="btn btn-warning">

//         </button>
//       </div> */}
//     </>
//   );
// }
