import React from "react";
import "./landing.css";
import profileImg from "../../assets/portfolio-logo.png";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Landing = () => {
  return (
    <div className="landing-section">
      <div className="landing-content">
        <span>landing-content landing-content</span>
        <h1>Hi, I'm Shubham Nirmal 👋</h1>
        <p>
          A passionate Full Stack Developer with hands-on experience in building responsive and dynamic web and mobile applications.<br /><br />
          <strong>I specialize in:</strong><br />
          <strong>Frontend:</strong> HTML, CSS, JavaScript, React.js<br />
          <strong>Backend & Database:</strong> Node.js, MySQL, MongoDB , Express.js, Python<br /><br />
          I love creating clean, scalable solutions and turning ideas into real-world applications that deliver great user experiences.
        </p>
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
