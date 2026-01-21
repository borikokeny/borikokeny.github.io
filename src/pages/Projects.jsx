import ProjectsGrid from "../components/Projectsgrid";

export default function Projects() {
  return (
    <section className="container my-5">
      <h1 className="mb-2">Projects</h1>
      <p className="text-muted">
        Selected frontend development work.
      </p>

      <ProjectsGrid />
    </section>
  );
}


// import { Link } from "react-router-dom";

// import bidifyImg from "../images/Bidify-desktop.jpg";
// import holidazeImg from "../images/Holidaze-desktop.jpg";
// import jimsImg from "../images/Jims-desktop.jpg";

// const projects = [
//   {
//     title: "Bidify",
//     subtitle: "Online auction platform",
//     image: bidifyImg,
//     path: "/projects/bidify",
//   },
//   {
//     title: "Holidaze",
//     subtitle: "Holiday booking platform",
//     image: holidazeImg,
//     path: "/projects/holidaze",
//   },
//   {
//     title: "Jim’s Convenience",
//     subtitle: "React e-commerce store",
//     image: jimsImg,
//     path: "/projects/jims",
//   },
// ];

// export default function ProjectsGrid() {
//   return (
//     <section className="container my-5">

//       <header className="mb-5 text-center">
//         <h2 className="mb-2">Projects</h2>
//         <p className="text-muted"><strong>Selected frontend development work</strong>
          
//         </p>
//       </header>

//       <div className="projects-grid">

//         {projects.map((project) => (
//           <Link
//             key={project.title}
//             to={project.path}
//             className="project-tile"
//           >
//             <div className="image-wrapper">
//               <img
//                 src={project.image}
//                 alt={project.title}
//               />
//             </div>

//             <div className="project-info">
//               <h5>{project.title}</h5>
//               <p>{project.subtitle}</p>
//               <span>View case study →</span>
//             </div>
//           </Link>
//         ))}

//       </div>
//     </section>
//   );
// }




// import React from "react";
// import Welcome from "../components/Welcome";
// import Bidify from "../components/Bidify";
// import Holidaze from "../components/Holidaze";
// import Jims from "../components/Jims";

// export default function Projects() {
//   return (
//     <section id="projects" className="projects-container">
//     <Welcome />
//     <Bidify />
//     <Holidaze />
//     <Jims />
//   </section>
//   );
// }