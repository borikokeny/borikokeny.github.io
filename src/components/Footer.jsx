export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-title">Interested in working together?</p>

        <a href="mailto:bori@minerali.hu" className="footer-email">
          bori@minerali.hu
        </a>

        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/bori-kokeny-7070008a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <span className="divider">•</span>

          <a
            href="https://github.com/borikokeny"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>

        <p className="footer-copy">© {new Date().getFullYear()} Bori Kokeny</p>
      </div>
    </footer>
  );
}
