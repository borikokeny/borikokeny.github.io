// 

/*Jim's 2026 layout version */
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
  return (
    <section className="project-section my-5 d-flex justify-content-center">
<div >
<div className="row align-items-center flex-lg-row-reverse">

        {/* RIGHT — PROJECT IMAGE */}
        <div className="col-lg-6 mb-4 mb-lg-0">
          <img
            src={jimsDesktop}
            alt="Jim's Convenience e-commerce store"
            className="img-fluid rounded shadow-sm"
          />
        </div>

        {/* LEFT — PROJECT INFO */}
        <div className="col-lg-6">

          <h2 className="mb-2">Jim&apos;s Convenience</h2>

          <p className="fw-semibold mb-3">
            Fully functional e-commerce store built with React.
          </p>

          <p className="text-muted">
            A smooth shopping experience with dynamic product pages,
            live search, shopping cart functionality, and checkout flow.
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

          {/* FEATURES */}
          <h5 className="mt-4">Key features</h5>
          <ul className="mt-2">
            <li>Live product search</li>
            <li>Product detail pages</li>
            <li>Shopping cart (add / remove items)</li>
            <li>Checkout flow</li>
            <li>Responsive design</li>
          </ul>

          {/* LINKS */}
          <div className="d-flex gap-4 mt-4">
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
      
    </section>
  );
};

export default Jims;
