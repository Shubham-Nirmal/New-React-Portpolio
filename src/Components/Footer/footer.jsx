import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import profileImg from "../../assets/Namelogo.png";
import "./footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-main">
      <div className="footer-col profile">
        <h2>SHUBHAM NIRMAL</h2>
        <p>Full Stack Developer passionate about scalable systems and real-world solutions.</p>
        <img src={profileImg} alt="Profile" className="footer-profile-img" />
      </div>
      <div className="footer-col about">
        <h3>About</h3>
        <p>Innovative developer with experience in modern web technologies, backend systems, and integrations.</p>
        <a href="/resume.pdf" className="footer-btn" download>View Resume</a>
      </div>
      <div className="footer-col connect">
        <h3>Connect</h3>
        <ul>
          <li><a href="https://github.com/Shubham-Nirmal" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a></li>
          <li><a href="https://www.linkedin.com/in/shubhamnirmal36/" target="_blank" rel="noreferrer">LinkedIn</a></li>
        </ul>
      </div>
      <div className="footer-col skills">
        <h3>Skills</h3>
        <div className="skills-list">
          <span>JavaScript</span>
          <span>React.js</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>MySQL</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>
      </div>
    </div>
    <hr />
    <div className="footer-bottom">
      <span>© {new Date().getFullYear()} Shubham Nirmal. All rights reserved.</span>
      <div className="footer-social">
        <a href="https://github.com/Shubham-Nirmal" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/shubhamnirmal36/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FaTwitter /></a>
      </div>
      <a href="#contact" className="hire-btn">Hire Me<br />Lets Talk</a>
    </div>
  </footer>
);

export default Footer;