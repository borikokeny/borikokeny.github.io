import { Link, useLocation } from "react-router-dom";
import { projects } from "../data/projectsData";
import jimsDesktop from "../images/Jims-desktop.jpg";
import react from "../images/React.png";
import javascript from "../images/Javascript.png";
import tailwind from "../images/Tailwind.png";
import css from "../images/Css.png";
import api from "../images/Api.png";
import html from "../images/HTML.jpg";
import vite from "../images/Vite.png";
import adobe from "../images/Adobe.png";


const Jims = () => {
  const location = useLocation();

const currentIndex = projects.findIndex(
  (p) => p.path === location.pathname
);

const prevProject = projects[currentIndex - 1];
const nextProject = projects[currentIndex + 1];
  return (
    <section className="project-section jim my-5 d-flex justify-content-center">
      <div className="container">
        <div className="row align-items-stretch flex-lg-row-reverse">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="image-wrapper w-100">
              <img
                src={jimsDesktop}
                alt="Jim's Convenience e-commerce store"
                className="img-fluid rounded shadow-sm object-fit-cover"
              />
            </div>
          </div>
          <div className="col-lg-6 d-flex">
            <div className="project-content w-100">
              <h2 className="mb-2">Jim&apos;s Convenience</h2>

              <p className="fw-semibold mb-1">
                Fully functional e-commerce store built with React.
              </p>

              <p className="text-muted">
                A smooth shopping experience with dynamic product pages, live
                search, shopping cart functionality, and checkout flow.
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
                <li>Live product search</li>
                <li>Product detail pages</li>
                <li>Shopping cart (add / remove items)</li>
                <li>Checkout flow</li>
                <li>Responsive design</li>
              </ul>

              <div className="d-flex gap-4 mt-1">
                <a
                  href="https://jimsconvenience.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fw-semibold text-decoration-none"
                >
                  Live demo →
                </a>

                <a
                  href="https://github.com/borikokeny/Front-End-Frameworks_CA"
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

export default Jims;
