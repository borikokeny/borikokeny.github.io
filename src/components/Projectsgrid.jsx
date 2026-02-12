import { Link } from "react-router-dom";

import bidifyImg from "../images/Bidify-desktop.jpg";
import holidazeImg from "../images/Holidaze-desktop.jpg";
import jimsImg from "../images/Jims-desktop.jpg";
import hidakImg from "../images/Hidak.jpg";

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
  //  {
  //   title: "Hidak",
  //   subtitle: "Mentalhealth Studio",
  //   image: hidakImg,
  //   path: "/projects/hidak",
  // },
];

export default function ProjectsGrid({ limit }) {
  const visibleProjects = limit
    ? projects.slice(0, limit)
    : projects;

  return (
    <div className="projects-grid">
      {visibleProjects.map((project) => (
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
  );
}
