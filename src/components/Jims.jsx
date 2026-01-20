import jimsDesktop from "../images/Jims-desktop.jpg";
import jimsTablet from "../images/Jims-tbl.png";
import tailwind from "../images/Tailwind.png";
import adobe from "../images/Adobe.png";
import vite from "../images/Vite.png";
import react from "../images/React.png";
import javascript from "../images/Javascript.png";
import css from "../images/Css.png";
import api from "../images/Api.png";
import html from "../images/HTML.jpg";

const Jims = () => {
  return (
    <section className="project-section jims container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-between">
          <h1>Jim's Convenience</h1>
          <p>
            A fully functional e-commerce store with cart and checkout
            functionality.
          </p>
          <h5>Project Overview</h5>
          <p>
            Jim’s Convenience is a React-based online store with a smooth
            shopping experience, dynamic product pages, and secure checkout.
          </p>
          <img src={jimsDesktop} alt="desktop" className="mt-4 img-fluid" />
        </div>
        <div className="col-lg-5 col-md-12 d-flex flex-column align-items-center">
          <div className="image-container">
            <img
              src={jimsTablet}
              alt="tablet"
              className="w-75 pb-3 mt-3 img-fluid"
            />
          </div>
          <h5>Key Features</h5>
          <ul className="text-start mt-3">
            <li>
              <strong>Homepage</strong> – Product listings with live search
            </li>
            <li>
              <strong>Product Page</strong> – Detailed product view
            </li>
            <li>
              <strong>Shopping Cart</strong> – Add/remove items
            </li>
            <li>
              <strong>Checkout</strong> – Complete purchase
            </li>
          </ul>
         
            <a
              href="https://jimsconvenience.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-decoration-underline mb-3 d-block"
            >
              Visit Project →
            </a>
            <a href="https://github.com/borikokeny/Front-End-Frameworks_CA" target="_blank"
            rel="noopener noreferrer" className="text-primary text-decoration-underline mb-3 d-block">Visit GitHub repo →</a>
        </div>
        <div className="col-lg-1 col-md-12 d-flex flex-wrap justify-content-center mt-3 mt-xxl-5 pt-xxl-5" id="dev-elements">
          <img src={tailwind} className="col-6 col-lg-12 mb-2 px-2 img-fluid" />
          <img src={react} className="col-6 col-lg-12 mb-3 px-2 img-fluid" />
          <img src={css} className="col-6 col-lg-12 mb-3 px-2 img-fluid" />
          <img src={api} className="col-6 col-lg-12 mb-3 px-2 img-fluid" />
          <img src={adobe} className="col-6 col-lg-12 mb-3 px-2 img-fluid" />
          <img src={vite} className="col-6 col-lg-12 mb-3 px-2 img-fluid" />
          <img src={html} className="col-6 col-lg-12 mb-3 px-2 img-fluid" />
          <img
            src={javascript}
            className="col-6 col-lg-12 mb-3 px-2 img-fluid"
          />
        </div>
      </div>
    </section>
  );
};

export default Jims;
