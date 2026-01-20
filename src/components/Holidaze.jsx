import holidazeDesktop from "../images/Holidaze-desktop.jpg";
import holidazeMobile from "../images/Holidaze-mobile-sm.jpg";
import tailwind from "../images/Tailwind.png";
import adobe from "../images/Adobe.png";
import vite from "../images/Vite.png";
import react from "../images/React.png";
import javascript from "../images/Javascript.png";
import css from "../images/Css.png";
import api from "../images/Api.png";
import html from "../images/HTML.jpg";

const Holidaze = () => {
  return (
    <section className="project-section holidaze container">
      <span class="border-bottom">
      <div className="row align-items-center mb-5">
        <div className="col-lg-5 col-md-12 d-flex flex-column justify-content-between">
          <h1>Holidaze</h1>
          <p>A modern booking platform for holiday rentals.</p>
          <h5>Project Overview</h5>
          <div className="mx-5">
            <p className="text-start">
              <strong>Customers</strong>– Search, view, and book accommodations.
            </p>
            <p className="text-start">
              <strong>Venue Managers</strong>– Register, manage listings, and
              handle bookings.
            </p>
          </div>

          <a
            href="https://holidaze-rentopia.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-decoration-underline mb-3 d-block"
          >
            Visit Project →
          </a>
          <a href="https://github.com/borikokeny/Holidaze-Project-Exam-2" target="_blank"
            rel="noopener noreferrer" className="text-primary text-decoration-underline mb-3 d-block">Visit GitHub repo →</a>
          <img src={holidazeMobile} alt="mobileview" className="w-50 mb-3" />
        </div>
        <div className="col-lg-5 col-md-12 d-flex flex-column align-items-center">
          <div className="image-container mb-3">
            <img
              src={holidazeDesktop}
              alt="desktop view"
              className="w-100 img-fluid"
            />
          </div>

          <h3 className="mb-3">Key Features</h3>

          <h5 className="mt-2">Customer Features</h5>
          <ul className="text-start ps-3">
            <li>Browse and search for venues</li>
            <li>View venue details and availability</li>
            <li>Register and book accommodations</li>
            <li>Manage upcoming bookings</li>
          </ul>

          <h5 className="mt-2">Venue Manager Features</h5>
          <ul className="text-start ps-3">
            <li>Register and manage venues</li>
            <li>Validate and delete venues</li>
            <li>View bookings for owned venues</li>
          </ul>

          <h5 className="mt-2">User Authentication</h5>
          <ul className="text-start ps-3">
            <li>Register / Login / Logout</li>
            <li>Validate user avatar</li>
          </ul>
        </div>
        <div
          className="col-lg-2 col-md-12 d-flex flex-wrap dev-elements dev"
          id="dev-elements"
        >
          <img src={tailwind} className="col-6 col-lg-12 mb-2 px-2 img-fluid" />
          <img src={react} className="col-6 col-lg-12 mb-3 px-3 img-fluid" />
          <img src={css} className="col-6 col-lg-12 mb-3 px-2 img-fluid" />
          <img src={api} className="col-6 col-lg-12 mb-3 px-2 img-fluid" />
          <img src={adobe} className="col-6 col-lg-12 mb-3 px-3 img-fluid" />
          <img src={vite} className="col-6 col-lg-12 mb-3 px-2 img-fluid" />
          <img src={html} className="col-6 col-lg-12 mb-3 px-2 img-fluid" />
          <img src={javascript} className="col-6 col-lg-12 px-2 img-fluid" />
        </div>
      </div>
      </span>
    </section>
  );
};

export default Holidaze;
