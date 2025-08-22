import React, { useState } from "react";
import portfolioLogo from "../../assets/Namelogo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full shadow-md shadow-gray-600 fixed top-0 z-50 bg-black shadow-md font-poppins">
      <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap p-4 md:p-5">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img
              src={portfolioLogo}
              alt="Portfolio Logo"
              className="h-14 md:h-20 w-auto mr-2"
            />
            <span className="font-bold text-xl md:text-2xl text-white">
              Portfolio
            </span>
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:items-center md:space-x-8">
          {[
            ["#about", "About"],
            ["#skills", "Skills"],
            ["#work", "Work Experiences"],
            ["#education", "Education"],
            ["#", "Projects"],
            ["#resume", "Resume"],
            ["#contact", "Contact Me"],
          ].map(([href, label]) => (
            <li key={label}>
              <a
                href={href}
                className="text-white hover:text-blue-400 transition-colors duration-300 font-medium"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger (Mobile) */}
        <div
          className="flex flex-col cursor-pointer md:hidden space-y-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </div>

        {/* Mobile Menu */}
        <ul
          className={`md:hidden w-full bg-black transition-all duration-500 ease-in-out overflow-hidden ${
            menuOpen ? "max-h-96 py-4" : "max-h-0"
          }`}
        >
          {[
            ["#about", "About"],
            ["#skills", "Skills"],
            ["#work", "Work Experiences"],
            ["#education", "Education"],
            ["#", "Projects"],
            ["#resume", "Resume"],
            ["#contact", "Contact Me"],
          ].map(([href, label]) => (
            <li key={label} className="text-center py-2">
              <a
                href={href}
                className="text-white hover:text-blue-400 transition-colors duration-300 block font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
