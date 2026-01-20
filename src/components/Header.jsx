import { NavLink } from "react-router-dom";
import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed-top shadow-sm">
      <nav className="container navbar navbar-expand-md navbar-light bg-white">
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleNavbar} 
          aria-controls="navbarNav" 
          aria-expanded={isOpen} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className="nav-link mx-3"
                onClick={closeNavbar}
              >
                Home
              </NavLink>
              {/* <a href="#home" className="nav-link mx-3" onClick={closeNavbar}>Home</a> */}
            </li>
            <li className="nav-item">
              <NavLink
                to="/projects"
                className="nav-link mx-3"
                onClick={closeNavbar}
              >
                Projects
              </NavLink>
              {/* <a href="#projects" className="nav-link mx-3" onClick={closeNavbar}>Projects</a> */}
            </li>
            <li className="nav-item">
              <NavLink
              to="/about"
              className="nav-link mx-3"
              onClick={closeNavbar}
              >
               About
              </NavLink>
              {/* <a href="#about" className="nav-link mx-3" onClick={closeNavbar}>About me</a> */}
            </li>
            <li className="nav-item">
              <NavLink
              to="/contact"
              className="nav-link mx-3"
              onClick={closeNavbar}
              >
                Contact
              </NavLink>
              {/* <a href="#contact" className="nav-link mx-3" onClick={closeNavbar}>Contact me</a> */}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
