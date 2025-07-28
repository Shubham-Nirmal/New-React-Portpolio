import React from "react";
import "./landing.css";
import profileImg from "../../assets/portfolio-logo.png";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Landing = () => {
  return (
    <div className="landing-section">
      <div className="landing-content">
        <h1>Hi all, I'm Shubham  👋 </h1>
        <p>A passionate Full Stack Software Developer 🚀 <br /> <br /> having an experience of building Web and Mobile <br /> <br />applications with JavaScript / Reactjs / Nodejs / <br /> <br /> React Native and some other cool libraries and <br /> <br /> frameworks.</p>

        <div className="landing-buttons">
          <a href="#contact" className="btn">Contact Me</a>
          <a href="/resume.pdf" className="btn btn-outline" download>Download Resume</a>
        </div>

        <div className="social-icons">
          <a href="https://github.com/Shubham-Nirmal" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/shubhamnirmal36/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://www.linkedin.com/in/shubhamnirmal36/" target="_blank" rel="noreferrer"><FaTwitter /></a>
        </div>
      </div>

      <div className="landing-image">
        <img src={profileImg} alt="Profile" />
      </div>


    </div>
    
  );
};

export default Landing;
