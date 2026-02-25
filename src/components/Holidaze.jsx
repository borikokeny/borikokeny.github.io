import { Link, useLocation } from "react-router-dom";
import { projects } from "../data/projectsData";
import holidazeDesktop from "../images/Holidaze-desktop.jpg";
import react from "../images/React.png";
import javascript from "../images/Javascript.png";
import tailwind from "../images/Tailwind.png";
import css from "../images/Css.png";
import api from "../images/Api.png";
import html from "../images/HTML.jpg";
import vite from "../images/Vite.png";
import adobe from "../images/Adobe.png";

const Holidaze = () => {
    const location = useLocation();

const currentIndex = projects.findIndex(
  (p) => p.path === location.pathname
);

const prevProject = projects[currentIndex - 1];
const nextProject = projects[currentIndex + 1];
  return (
    <section className="project-section d-flex justify-content-center holidaze">
      <div className="container">
        <div className="row align-items-stretch flex-lg-row-reverse">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="image-wrapper w-100">
              <img
                src={holidazeDesktop}
                alt="Holidaze booking platform"
                className="img-fluid rounded shadow-sm mb-3 object-fit-cover"
              />
            </div>
          </div>
          <div className="col-lg-6 d-flex">
            <div className="project-content w-100">
            <h2 className="mb-2">Holidaze</h2>

            <p className="fw-semibold mb-1">
              Holiday accommodation booking platform built with React.
            </p>

            <p className="text-muted">
              Holidaze allows customers to search and book venues, while venue
              managers can create listings and manage bookings through a
              role-based interface.
            </p>

            <div className="d-flex flex-wrap gap-2 my-1">
              <span className="tech-badge">
                <img src={react} alt="React" /> React
              </span>

              <span className="tech-badge">
                <img src={javascript} alt="JavaScript" /> JavaScript
              </span>

              <span className="tech-badge">
                <img src={vite} alt="Vite" /> Vite
              </span>

              <span className="tech-badge">
                <img src={tailwind} alt="Tailwind" /> Tailwind
              </span>

              <span className="tech-badge">
                <img src={api} alt="API" /> REST API
              </span>

              <span className="tech-badge">
                <img src={css} alt="CSS" /> CSS
              </span>

              <span className="tech-badge">
                <img src={html} alt="HTML" /> HTML
              </span>

              <span className="tech-badge">
                <img src={adobe} alt="Adobe XD" /> Adobe XD
              </span>
            </div>

            <h5 className="mt-1">Key features</h5>

            <ul className="mt-2">
              <li>
                <strong>Customer role</strong> – browse, search and book venues
              </li>
              <li>
                <strong>Venue manager role</strong> – create and manage listings
              </li>
              <li>Availability calendar and booking management</li>
              <li>Role-based authentication and permissions</li>
              <li>Profile and avatar validation</li>
              <li>Responsive mobile-first design</li>
            </ul>

            <div className="d-flex gap-4 mt-1">
              <a
                href="https://holidaze-rentopia.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="fw-semibold text-decoration-none"
              >
                Live demo →
              </a>

              <a
                href="https://github.com/borikokeny/Holidaze-Project-Exam-2"
                target="_blank"
                rel="noopener noreferrer"
                className="fw-semibold text-decoration-none"
              >
                GitHub →
              </a>
            </div>
          </div>
        </div>
        </div>
        <div className="row">
<hr className="my-5" />

<div className="project-navigation d-flex justify-content-between align-items-center">

  {prevProject ? (
    <Link to={prevProject.path} className="text-decoration-none">
      ← {prevProject.title}
    </Link>
  ) : <div />}

  <Link to="/projects" className="text-muted text-decoration-none">
    All projects
  </Link>

  {nextProject ? (
    <Link to={nextProject.path} className="text-decoration-none">
      {nextProject.title} →
    </Link>
  ) : <div />}

</div>
        </div>
      </div>
            
    </section>
  );
};

export default Holidaze;