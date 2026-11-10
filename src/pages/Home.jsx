// export default function Home() {
//   return (
//     <section className="main-content hero d-flex align-items-center">
//       <div className="container">
//         <h1 className="display-3 fw-bold mt-5">
//           B<span className="accent">o</span>ri Kokeny
//         </h1>
//         <h2 className="fw-light mt-3">Business-aware Front-End Developer</h2>

//         <p className="mt-4 lead">
//           I design and build structured digital products with a strategic
//           perspective.
//         </p>

//         <div className="mt-4 d-flex gap-4">
//           <a href="/projects" className="btn btn-dark">
//             View Projects
//           </a>

//           <a href="/contact" className="btn btn-outline-dark">
//             Contact
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <p className="home-eyebrow">
          BORI KOKENY · PORTFOLIO
        </p>

        <h1 className="home-title">
          Product Development &amp; Design
        </h1>

        <h2 className="home-subtitle">
          From the first idea to a product ready for the market.
        </h2>

        <p className="home-description">
          I bring together more than 20 years of experience in
          product development, purchasing and production with
          a background in modern frontend development.

          My work spans creative concepts, product design,
          material selection, international sourcing and
          collaboration with suppliers. I enjoy turning ideas
          into tangible products — and bringing the same
          structured, user-focused thinking to digital products.
        </p>

        <div className="home-tags">
          <span>Product Development</span>
          <span>Product Design</span>
          <span>International Sourcing</span>
          <span>Digital Product Development</span>
        </div>

        <div className="home-links">
          <Link to="/projects">Selected Work <span>→</span></Link>
          <Link to="/about">About Me <span>→</span></Link>
        </div>
      </section>

      <section className="home-focus">
        <article className="home-focus-item">
          <p className="home-focus-label">01 · PHYSICAL PRODUCTS</p>
          <h2>From concept to production</h2>
          <p>
            Product concepts, collections, materials, sourcing,
            samples, quality, packaging and production follow-up.
          </p>
        </article>

        <article className="home-focus-item">
          <p className="home-focus-label">02 · DIGITAL PRODUCTS</p>
          <h2>Design thinking meets technology</h2>
          <p>
            User experience, information structure, visual design
            and frontend development using modern web technologies.
          </p>
        </article>
      </section>
    </div>
  );
}
