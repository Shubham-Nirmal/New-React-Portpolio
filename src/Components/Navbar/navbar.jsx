import React, { useState } from "react";
import "./navbar.css";
import portfolioLogo from "../../assets/Namelogo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="devfolio-navbar">
      <div className="devfolio-navbar-container">
        <div className="devfolio-logo">
          <a href="/">
            <img
              src={portfolioLogo}
              alt="Portfolio Logo"
              style={{ height: 90, verticalAlign: "middle", marginRight: 10 }}
            />
          
          </a>
        </div>
        <ul className={`devfolio-nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#work">Work Experiences</a></li>
          <li><a href="#education">Education</a></li>
          {/* <li><a href="#achievements">My Tech Stack</a></li> */}

          <li><a href="#">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
        <div
          className={`devfolio-hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

