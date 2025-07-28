import React from "react";
import "../Project/project.css";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Responsive personal portfolio built with React, showcasing skills and projects.",
    tech: ["React", "CSS", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.com",
  },
  {
    title: "Weather App",
    description:
      "Real-time weather forecast app with location-based search using OpenWeatherMap API.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yourusername/weather-app",
    live: "",
  },
  {
    title: "E-Commerce Dashboard",
    description:
      "Admin panel to manage products, orders, and users. Implemented charts and filters.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/ecommerce-dashboard",
    live: "",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-icon">
              <FaCode />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="tech-stack">
              {project.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> Code
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
