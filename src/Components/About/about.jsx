import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">
            <span role="img" aria-label="user">👨‍💻</span>
            About Me
          </h2>
          <p className="about-subtitle">
            A brief introduction to my journey as a frontend developer and tech enthusiast.
          </p>
        </div>
        <div className="about-card">
          <p>
            Hello! I'm <strong>Shubham Nirmal</strong>, a passionate Frontend Developer focused on building
            clean, responsive, and user-friendly web applications using modern technologies.
          </p>
          <p>
            I specialize in <strong>React.js</strong>, and have hands-on experience with tools like
            JavaScript, HTML, CSS, Git, and modern UI/UX principles. I enjoy turning complex problems
            into simple, beautiful designs.
          </p>
          <p>
            When I'm not coding, I love exploring new tech, contributing to projects, and constantly
            learning to grow as a developer.
          </p>
          <div className="skills-title">Skills:</div>
          <ul className="skills-list">
            <li>React.js</li>
            <li>JavaScript</li>
            <li>HTML5 & CSS3</li>
            <li>Git & GitHub</li>
            <li>Responsive Design</li>
            <li>Tailwind / Bootstrap</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
