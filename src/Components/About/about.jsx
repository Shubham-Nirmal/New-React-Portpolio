import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
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

      <h3>Skills:</h3>
      <ul className="skills-list">
        <li>React.js</li>
        <li>JavaScript</li>
        <li>HTML5 & CSS3</li>
        <li>Git & GitHub</li>
        <li>Responsive Design</li>
        <li>Tailwind / Bootstrap</li>
      </ul>
    </section>
  );
};

export default About;
