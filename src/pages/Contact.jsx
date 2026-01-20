// import React from "react";
// import { TiSocialLinkedinCircular } from "react-icons/ti";
// import { MdOutlineAlternateEmail } from "react-icons/md";
// import { PiFacebookLogoBold } from "react-icons/pi";
// import { TiSocialGithubCircular } from "react-icons/ti";

// export default function Contact() {
//   return (
//     <section id="contact" className="full-height d-flex flex-wrap align-items-center justify-content-start mt-5 mb-5 ms-5">
//       <div className="ms-5 d-flex flex-column align-items-start gap-3 text-start icon-list">
//               <a href="https://www.linkedin.com/in/bori-kokeny-7070008a/" target="_blank">
//               <TiSocialLinkedinCircular className="icons p-1 fs-1" /> LinkedIN
//               </a>
//               <a href="https://github.com/borikokeny" target="_blank">
//               <TiSocialGithubCircular className="icons p-1 fs-1" /> GitHub
//               </a>
//               <a href="https://www.facebook.com/bori.kokeny" target="_blank">
//               <PiFacebookLogoBold className="icons p-1 fs-1" /> Facebook
//               </a>
//               <a href="mailto: bori@minerali.hu" target="_blank">
//               <MdOutlineAlternateEmail className="icons p-1 fs-1" /> bori@minerali.hu
//               </a>
//             </div>
//     </section>
//   );
// }

import { Link } from "react-router-dom";

import bidifyImg from "../images/Bidify-desktop.jpg";
import holidazeImg from "../images/Holidaze-desktop.jpg";
import jimsImg from "../images/Jims-desktop.jpg";

const projects = [
  {
    title: "Bidify",
    subtitle: "Online auction platform",
    image: bidifyImg,
    path: "/projects/bidify",
  },
  {
    title: "Holidaze",
    subtitle: "Holiday booking platform",
    image: holidazeImg,
    path: "/projects/holidaze",
  },
  {
    title: "Jim’s Convenience",
    subtitle: "React e-commerce store",
    image: jimsImg,
    path: "/projects/jims",
  },
];

export default function ProjectsGrid() {
  return (
    <section className="container my-5">

      <header className="mb-5 text-center">
        <h2 className="mb-2">Projects</h2>
        <p className="text-muted">
          Selected frontend development work
        </p>
      </header>

      <div className="projects-grid">

        {projects.map((project) => (
          <Link
            key={project.title}
            to={project.path}
            className="project-tile"
          >
            <div className="image-wrapper">
              <img
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="project-info">
              <h5>{project.title}</h5>
              <p>{project.subtitle}</p>
              <span>View case study →</span>
            </div>
          </Link>
        ))}

      </div>
    </section>
  );
}
