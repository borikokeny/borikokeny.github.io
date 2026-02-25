export default function Home() {
  return (
    <section className="main-content hero d-flex align-items-center">
      <div className="container">
        <h1 className="display-3 fw-bold mt-5">
          B<span className="accent">o</span>ri Kokeny
        </h1>
        <h2 className="fw-light mt-3">Business-aware Front-End Developer</h2>

        <p className="mt-4 lead">
          I design and build structured digital products with a strategic
          perspective.
        </p>

        <div className="mt-4 d-flex gap-4">
          <a href="/projects" className="btn btn-dark">
            View Projects
          </a>

          <a href="/contact" className="btn btn-outline-dark">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
