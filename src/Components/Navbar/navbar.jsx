import React, { useState, useEffect } from "react";
import portfolioLogo from "../../assets/Namelogo.png";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaGraduationCap,
  FaFolder,
  FaFileAlt,
  FaEnvelope,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking on a link
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest(".devfolio-navbar")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className="w-full shadow-md shadow-gray-600 fixed top-0 z-50 bg-black font-poppins">
      <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap p-2 md:p-3">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img
              src={portfolioLogo}
              alt="Portfolio Logo"
              className="h-6 md:h-12 w-auto mr-2"
            />
            <span className="font-bold text-lg md:text-xl text-white">
              Portfolio
            </span>
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:items-center md:space-x-6">
          {[
            ["#about", "About"],
            ["#skills", "Skills"],
            ["#work", "Work Experiences"],
            ["#education", "Education"],
            ["#", "Projects"],  
            ["#contact", "Contact Me"],
          ].map(([href, label]) => (
            <li key={label}>
              <a
                href={href}
                className="text-white hover:text-blue-400 transition-colors duration-300 font-medium text-sm md:text-base"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger (Mobile) */}
        <div
          className="flex flex-col cursor-pointer md:hidden space-y-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>

        {/* Mobile Menu */}
        <ul
          className={`md:hidden w-full bg-black transition-all duration-500 ease-in-out overflow-hidden ${
            menuOpen ? "max-h-80 py-3" : "max-h-0"
          }`}
        >
          {[
            ["#about", "About"],
            ["#skills", "Skills"],
            ["#work", "Work Experiences"],
            ["#education", "Education"],
            ["#", "Projects"],
            ["#contact", "Contact Me"],
          ].map(([href, label]) => (
            <li key={label} className="text-center py-1.5">
              <a
                href={href}
                className="text-white hover:text-blue-400 transition-colors duration-300 block font-medium text-sm"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />
      )}
    </nav>
  );
}

export default Navbar;
