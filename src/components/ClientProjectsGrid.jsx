import { Link } from "react-router-dom";

import therapistImg from "../images/Terepauta.jpg";
import printingImg from "../images/Karika.png";

const clientProjects = [
  {
    title: "Therapist website",
    subtitle:
      "A calm and trustworthy website designed to present services clearly and make it easy for visitors to get in touch.",
    image: therapistImg,
    path: "#",
  },
  {
    title: "Printing company website",
    subtitle:
      "A clear and practical website presenting the company's services and making important information easy to find.",
    image: printingImg,
    path: "#",
  },
  {
    title: "Band website",
    subtitle:
      "Website project for a rock band, focused on presenting the band, music and upcoming activities.",
    image: null,
    path: "#",
  },
];

export default function ClientProjectsGrid() {
  return (
    <div className="projects-grid">
      {clientProjects.map((project) => (
        <Link
          key={project.title}
          to={project.path}
          className="project-tile"
        >
          <div className="image-wrapper">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
              />
            ) : (
              <div className="client-project-placeholder">
                <span>COMING SOON</span>
              </div>
            )}
          </div>

          <div className="project-info">
            <h5>{project.title}</h5>
            <p>{project.subtitle}</p>

            {project.path !== "#" && (
              <span>View project →</span>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}