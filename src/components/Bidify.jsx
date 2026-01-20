// 

/*new 2026 version of layout */
import bidifyDesktop from "../images/Bidify-desktop.jpg";
import react from "../images/React.png";
import javascript from "../images/Javascript.png";
import css from "../images/Css.png";
import api from "../images/Api.png";
import html from "../images/Html.png";
import vite from "../images/Vite.png";
import bootstrap from "../images/Bootstrap.jpg";

const Bidify = () => {
  return (
    <section className="project-section container my-5">

      <div className="row align-items-center">

        {/* LEFT — PROJECT IMAGE */}
        <div className="col-lg-6 mb-4 mb-lg-0">
          <img
            src={bidifyDesktop}
            alt="Bidify auction platform"
            className="img-fluid rounded shadow-sm"
          />
        </div>

        {/* RIGHT — PROJECT INFO */}
        <div className="col-lg-6">

          <h2 className="mb-2">Bidify</h2>

          <p className="fw-semibold mb-3">
            Online auction platform built with React.
          </p>

          <p className="text-muted">
            Users can create auction listings, bid with credits,
            track bid history, and manage their profile.
            Non-registered users may browse listings.
          </p>

          {/* TECH STACK */}
          <div className="d-flex flex-wrap gap-2 my-4">

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

          {/* FEATURES */}
          <h5 className="mt-4">Key features</h5>
          <ul className="mt-2">
            <li>User authentication (register / login / logout)</li>
            <li>Credit-based bidding system</li>
            <li>Create and manage auction listings</li>
            <li>Bid history tracking</li>
            <li>Search functionality</li>
          </ul>

          {/* LINKS */}
          <div className="d-flex gap-4 mt-4">
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
    </section>
  );
};

export default Bidify;
