import React from "react";
import "../Experiences/work.css";
import { FaFacebookF, FaQuora, FaAirbnb } from "react-icons/fa";

const experiences = [
  {
    company: "Facebook",
    role: "Software Engineer",
    date: "June 2018 – Present",
    description: [
      "Built scalable frontend systems.",
      "Integrated Facebook APIs and GraphQL.",
    ],
    icon: <FaFacebookF />,
    color: "#1877F2",
  },
  {
    company: "Quora",
    role: "Front-End Developer",
    date: "May 2017 – May 2018",
    description: [
      "Redesigned user dashboard UI.",
      "Worked with React and Redux.",
    ],
    icon: <FaQuora />,
    color: "#B92B27",
  },
  {
    company: "Airbnb",
    role: "Software Engineer Intern",
    date: "Jan 2015 – Sep 2015",
    description: [
      "Improved booking interface performance.",
      "Collaborated with design and backend team.",
    ],
    icon: <FaAirbnb />,
    color: "#FF5A5F",
  },
];

const Experience = () => {
  return (
    <section className="experience-cards" id="experience">
      <h2 className="experience-title">Experiences</h2>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div
              className="experience-header"
              style={{ backgroundColor: exp.color }}
            >
              <h3>{exp.company}</h3>
              <div
                className="experience-icon"
                style={{ backgroundColor: exp.color }}
              >
                {exp.icon}
              </div>
            </div>
            <div className="experience-body">
              <h4>{exp.role}</h4>
              <p className="experience-date">{exp.date}</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <ul>
                {exp.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
