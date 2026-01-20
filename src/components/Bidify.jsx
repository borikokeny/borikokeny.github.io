import bidifyDesktop from "../images/Bidify-desktop.jpg";
import bidifyTablet from "../images/Bidify-tablet.jpg";
import bootstrap from "../images/Bootstrap.jpg";
import adobe from "../images/Adobe.png";
import vite from "../images/Vite.png";
import react from "../images/React.png";
import javascript from "../images/Javascript.png";
import css from "../images/Css.png";
import api from "../images/Api.png";
import html from "../images/Html.png";

const Bidify = () => {
  return (
    <section className="project-section bidify container">
    <span class="border-bottom">
      <div className="row mt-1 mb-5">
      {/* <h4>I am a <strong>Front-End Developer</strong> with over 20 years of experience in product development,
      purchasing, and business development.</h4>
      <h3>Here are the <strong>projects</strong> I was working on lately:</h3> */}
        <div className="col-5 me-3">
          <h1 className="mb-3">Bidify</h1>
          <p className="text-start mx-3">
            An online auction platform where users can buy and sell items
            through bidding.
          </p>
          <h5>Project Overview</h5>
          <p className="text-start mx-3">
            Bidify is a React-based auction platform that allows users to
            create, list, and bid on auctions. Upon registration, users receive
            1000 credits to participate in auctions. Non-registered users can
            browse listings, while registered users can fully engage in the
            auction process.
          </p>
          <img src={bidifyDesktop} alt="desktop" className="w-100" />
        </div>
        <div className="col-5">
          <div className="image-container">
            <img src={bidifyTablet} alt="desktop" className="w-75 pb-3 mt-3" />
          </div>
          <h5>Key Features</h5>
          <ul className="text-start mt-3">
            <li> User authentication (register/login/logout)</li>
            <li>Profile management (update avatar, view total credits)</li>
            <li>
              Create and manage auction listings (title, images, deadline,
              description)
            </li>
            <li>Bid on listings and view bid history</li>
            <li> Search for listings</li>
          </ul>
          <a
            href="https://bidify-auction.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-decoration-underline mb-3 d-block"
          >
            Visit Project →
          </a>
          <a href="https://github.com/borikokeny/semester-project-2-resit" target="_blank"
            rel="noopener noreferrer" className="text-primary text-decoration-underline mb-3 d-block">Visit GitHub repo →</a>    
        </div>
        <div
          className="col-lg-1 col-md-12 d-flex flex-wrap justify-content-center mt-3 mt-xxl-5 pt-xxl-5"
          id="dev-elements"
        >
          <img src={api} className="col-6 col-lg-12 mb-2 px-2 img-fluid" />
          <img src={react} className="col-6 col-lg-12 mb-3 px-2 img-fluid" />
          <img src={css} className="col-6 col-lg-12 mb-3 px-2 img-fluid" />
          <img src={adobe} className="col-6 col-lg-12 mb-3 px-2 img-fluid" />
          <img
            src={bootstrap}
            className="col-6 col-lg-12 mb-3 px-2 img-fluid"
          />
          <img src={vite} className="col-6 col-lg-12 mb-3 px-2 img-fluid" />
          <img src={html} className="col-6 col-lg-12 mb-3 px-2 img-fluid" />
          <img
            src={javascript}
            className="col-6 col-lg-12 mb-3 px-2 img-fluid"
          />
        </div>
      </div>
      </span>
    </section>
  );
};

export default Bidify;
