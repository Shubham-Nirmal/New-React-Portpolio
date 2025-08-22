import React, { useState, useEffect } from "react";
import "./navbar.css";
import portfolioLogo from "../../assets/Namelogo.png";
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaBriefcase, FaGraduationCap, FaFolder, FaFileAlt, FaEnvelope } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking on a link
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.devfolio-navbar')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const navItems = [
    { href: "#about", label: "About", icon: <FaUser /> },
    { href: "#skills", label: "Skills", icon: <FaCode /> },
    { href: "#work", label: "Experience", icon: <FaBriefcase /> },
    { href: "#education", label: "Education", icon: <FaGraduationCap /> },
    { href: "#projects", label: "Projects", icon: <FaFolder /> },
    // { href: "#resume", label: "Resume", icon: <FaFileAlt /> },
    { href: "#contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className={`devfolio-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="devfolio-navbar-container">
        <div className="devfolio-logo">
          <a href="/" onClick={handleNavClick}>
            <img
              src={portfolioLogo}
              alt="Portfolio Logo"
              className="logo-image"
            />
          </a>
        </div>

        <ul className={`devfolio-nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              <a 
                href={item.href} 
                onClick={handleNavClick}
                className="nav-link"
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="cta-button" onClick={() => window.location.href = "#contact"}>
            <FaEnvelope />
            <span>Hire Me</span>
          </button>
          
          <div
            className={`devfolio-hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />
      )}
    </nav>
  );
}

export default Navbar;

