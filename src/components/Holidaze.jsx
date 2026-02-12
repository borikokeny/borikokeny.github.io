// import holidazeDesktop from "../images/Holidaze-desktop.jpg";
// import holidazeMobile from "../images/Holidaze-mobile-sm.jpg";
// import tailwind from "../images/Tailwind.png";
// import adobe from "../images/Adobe.png";
// import vite from "../images/Vite.png";
// import react from "../images/React.png";
// import javascript from "../images/Javascript.png";
// import css from "../images/Css.png";
// import api from "../images/Api.png";
// import html from "../images/HTML.jpg";

// const Holidaze = () => {
//   return (
//     <section className="project-section holidaze container">
//       <span class="border-bottom">
//       <div className="row align-items-center mb-5">
//         <div className="col-lg-5 col-md-12 d-flex flex-column justify-content-between">
//           <h1>Holidaze</h1>
//           <p>A modern booking platform for holiday rentals.</p>
//           <h5>Project Overview</h5>
//           <div className="mx-5">
//             <p className="text-start">
//               <strong>Customers</strong>– Search, view, and book accommodations.
//             </p>
//             <p className="text-start">
//               <strong>Venue Managers</strong>– Register, manage listings, and
//               handle bookings.
//             </p>
//           </div>

//           <a
//             href="https://holidaze-rentopia.netlify.app/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-primary text-decoration-underline mb-3 d-block"
//           >
//             Visit Project →
//           </a>
//           <a href="https://github.com/borikokeny/Holidaze-Project-Exam-2" target="_blank"
//             rel="noopener noreferrer" className="text-primary text-decoration-underline mb-3 d-block">Visit GitHub repo →</a>
//           <img src={holidazeMobile} alt="mobileview" className="w-50 mb-3" />
//         </div>
//         <div className="col-lg-5 col-md-12 d-flex flex-column align-items-center">
//           <div className="image-container mb-3">
//             <img
//               src={holidazeDesktop}
//               alt="desktop view"
//               className="w-100 img-fluid"
//             />
//           </div>

//           <h3 className="mb-3">Key Features</h3>

//           <h5 className="mt-2">Customer Features</h5>
//           <ul className="text-start ps-3">
//             <li>Browse and search for venues</li>
//             <li>View venue details and availability</li>
//             <li>Register and book accommodations</li>
//             <li>Manage upcoming bookings</li>
//           </ul>

//           <h5 className="mt-2">Venue Manager Features</h5>
//           <ul className="text-start ps-3">
//             <li>Register and manage venues</li>
//             <li>Validate and delete venues</li>
//             <li>View bookings for owned venues</li>
//           </ul>

//           <h5 className="mt-2">User Authentication</h5>
//           <ul className="text-start ps-3">
//             <li>Register / Login / Logout</li>
//             <li>Validate user avatar</li>
//           </ul>
//         </div>
//         <div
//           className="col-lg-2 col-md-12 d-flex flex-wrap dev-elements dev"
//           id="dev-elements"
//         >
//           <img src={tailwind} className="col-6 col-lg-12 mb-2 px-2 img-fluid" />
//           <img src={react} className="col-6 col-lg-12 mb-3 px-3 img-fluid" />
//           <img src={css} className="col-6 col-lg-12 mb-3 px-2 img-fluid" />
//           <img src={api} className="col-6 col-lg-12 mb-3 px-2 img-fluid" />
//           <img src={adobe} className="col-6 col-lg-12 mb-3 px-3 img-fluid" />
//           <img src={vite} className="col-6 col-lg-12 mb-3 px-2 img-fluid" />
//           <img src={html} className="col-6 col-lg-12 mb-3 px-2 img-fluid" />
//           <img src={javascript} className="col-6 col-lg-12 px-2 img-fluid" />
//         </div>
//       </div>
//       </span>
//     </section>
//   );
// };

// export default Holidaze;

/*Version 2026 */
import holidazeDesktop from "../images/Holidaze-desktop.jpg";
import holidazeMobile from "../images/Holidaze-mobile-sm.jpg";

import react from "../images/React.png";
import javascript from "../images/Javascript.png";
import tailwind from "../images/Tailwind.png";
import css from "../images/Css.png";
import api from "../images/Api.png";
import html from "../images/HTML.jpg";
import vite from "../images/Vite.png";
import adobe from "../images/Adobe.png";

const Holidaze = () => {
  return (
    <section className="project-section d-flex justify-content-center">

      <div className="row align-items-center flex-lg-row-reverse">

        {/* LEFT — PROJECT IMAGE */}
        <div className="col-lg-6 mb-4 mb-lg-0">

          <img
            src={holidazeDesktop}
            alt="Holidaze booking platform"
            className="img-fluid rounded shadow-sm mb-3"
          />

          {/* <img
            src={holidazeMobile}
            alt="Holidaze mobile view"
            className="img-fluid rounded shadow-sm w-50"
          /> */}

        </div>

        {/* RIGHT — PROJECT INFO */}
        <div className="col-lg-6">

          <h2 className="mb-2">Holidaze</h2>

          <p className="fw-semibold mb-3">
            Holiday accommodation booking platform built with React.
          </p>

          <p className="text-muted">
            Holidaze allows customers to search and book venues,
            while venue managers can create listings and manage bookings
            through a role-based interface.
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
            <li><strong>Customer role</strong> – browse, search and book venues</li>
            <li><strong>Venue manager role</strong> – create and manage listings</li>
            <li>Availability calendar and booking management</li>
            <li>Role-based authentication and permissions</li>
            <li>Profile and avatar validation</li>
            <li>Responsive mobile-first design</li>
          </ul>

          {/* LINKS */}
          <div className="d-flex gap-4 mt-4">
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
    </section>
  );
};

export default Holidaze;
