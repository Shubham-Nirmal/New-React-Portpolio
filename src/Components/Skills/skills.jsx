import React from "react";
import "./Skills.css";
import img from "../../assets/skills.png";
import { FaHtml5, FaCss3Alt, FaSass, FaJs, FaReact, FaNodeJs, FaSwift, FaNpm, FaDatabase, FaAws, FaPython, FaDocker } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, label: "html-5" },
  { name: "CSS3", icon: <FaCss3Alt />, label: "css3" },
  { name: "Sass", icon: <FaSass />, label: "sass" },
  { name: "JavaScript", icon: <FaJs />, label: "JavaScript" },
  { name: "ReactJS", icon: <FaReact />, label: "reactjs" },
  { name: "NodeJS", icon: <FaNodeJs />, label: "nodejs" },
  { name: "Swift", icon: <FaSwift />, label: "swift" },
  { name: "NPM", icon: <FaNpm />, label: "npm" },
  { name: "SQL", icon: <FaDatabase />, label: "sql-database" },
];

const moreSkills = [
  { name: "AWS", icon: <FaAws />, label: "aws" },
  { name: "Firebase", icon: <SiFirebase />, label: "firebase" },
  { name: "Python", icon: <FaPython />, label: "python" },
  { name: "Docker", icon: <FaDocker />, label: "docker" },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40 }}>
        {/* Left - Image */}
        <div className="skills-image-wrapper" style={{ flex: "0 0 40%" }}>
          <img src={img} alt="Skills" className="skills-image" />
        </div>
        {/* Right - Content */}
        <div className="skills-content" style={{ flex: 1, textAlign: "left" }}>
          <h2 style={{ color: "#111", fontWeight: 700, fontSize: "2.5rem", marginBottom: 10 }}>
            When I Do 
          </h2>
          <p>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
          <div className="skills-logos" style={{ margin: "30px 0 10px 0" }}>
            <div className="skills-logos-row">
              {skills.map((skill, idx) => (
                <div key={idx} className="skills-logo-item">
                  <span className="skills-logo-icon">{skill.icon}</span>
                  <div className="skills-logo-label">{skill.label}</div>
                </div>
              ))}
            </div>
            <div className="skills-logos-row">
              {moreSkills.map((skill, idx) => (
                <div key={idx} className="skills-logo-item">
                  <span className="skills-logo-icon">{skill.icon}</span>
                  <div className="skills-logo-label">{skill.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="skills-highlights" style={{ marginTop: 40 }}>
            <p>
              <span className="skills-bolt">⚡</span>
              <span className="skills-highlight-text">
                Develop highly interactive Front end / User Interfaces for your web and mobile applications
              </span>
            </p>
            <p>
              <span className="skills-bolt">⚡</span>
              <span className="skills-highlight-text">
                Progressive Web Applications ( PWA ) in normal and SPA Stacks
              </span>
            </p>
            <p>
              <span className="skills-bolt">⚡</span>
              <span className="skills-highlight-text">
                Integration of third party services such as Firebase/ AWS / Digital Ocean
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
