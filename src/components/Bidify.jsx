import { Link, useLocation } from "react-router-dom";
import { projects } from "../data/projectsData";
import bidifyDesktop from "../images/Bidify-desktop.jpg";
import react from "../images/React.png";
import javascript from "../images/Javascript.png";
import css from "../images/Css.png";
import api from "../images/Api.png";
import html from "../images/Html.png";
import vite from "../images/Vite.png";
import bootstrap from "../images/Bootstrap.jpg";

const Bidify = () => {
  const location = useLocation();

  const currentIndex = projects.findIndex((p) => p.path === location.pathname);

  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];
  
  return (
    <section className="project-section d-flex justify-content-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="image-wrapper w-100">
              <img
                src={bidifyDesktop}
                alt="Bidify auction platform"
                className="img-fluid rounded shadow-sm mb-3 object-fit-cover"
              />
            </div>
          </div>

          <div className="col-lg-6 d-flex">
            <div className="project-content w-100">
              <h2 className="mb-2">Bidify</h2>

              <p className="fw-semibold mb-1">
                Online auction platform built with React.
              </p>

              <p className="text-muted">
                Users can create auction listings, bid with credits, track bid
                history, and manage their profile. Non-registered users may
                browse listings.
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
                  <img src={api} alt="API" /> REST API
                </span>

                <span className="tech-badge">
                  <img src={css} alt="CSS" /> CSS
                </span>

                <span className="tech-badge">
                  <img src={bootstrap} alt="Bootstrap" /> Bootstrap
                </span>

                <span className="tech-badge">
                  <img src={html} alt="HTML" /> HTML
                </span>
              </div>

              <h5 className="mt-1">Key features</h5>
              <ul className="mt-2">
                <li>User authentication (register / login / logout)</li>
                <li>Credit-based bidding system</li>
                <li>Create and manage auction listings</li>
                <li>Bid history tracking</li>
                <li>Search functionality</li>
              </ul>

              <div className="d-flex gap-4 mt-1">
                <a
                  href="https://bidify-auction.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fw-semibold text-decoration-none"
                >
                  Live demo →
                </a>

                <a
                  href="https://github.com/borikokeny/semester-project-2-resit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fw-semibold text-decoration-none"
                >
                  GitHub →
                </a>
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
              ) : (
                <div />
              )}

              <Link to="/projects" className="text-muted text-decoration-none">
                All projects
              </Link>

              {nextProject ? (
                <Link to={nextProject.path} className="text-decoration-none">
                  {nextProject.title} →
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bidify;
