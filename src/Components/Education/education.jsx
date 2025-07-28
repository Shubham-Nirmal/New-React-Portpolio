import React from "react";
import "../Education/education.css";
import { FaUniversity, FaGraduationCap, FaSchool } from "react-icons/fa";

const education = [
  {
    institute: "Dr. Babasaheb Ambedkar Marathwada University.",
    degree: "Bachelor of Engineering (Computer)",
    date: "2023– 2025",
    description: [
      "Secured 77.40% marks.",
      "Focused on Web Development.",
    ],
    icon: <FaUniversity />,
    color: "#4B8BF4",
  },
  {
    institute: "Maharashtra State Board",
    degree: "Higher Secondary School (12th)",
    date: "2021 – 2022",
    description: [
      "Stream: Science.",
      "Secured 74% marks.",
    ],
    icon: <FaGraduationCap />,
    color: "#FF5733",
  },
  {
    institute: "Maharashtra State Board",
    degree: "Secondary School (10th)",
    date: "2019 – 2020",
    description: [
      "Completed SSC with distinction.",
      "Secured 77.40% marks.",
    ],
    icon: <FaSchool />,
    color: "#28A745",
  },
];

const Education = () => {
  return (
    <section className="education-cards" id="education">
      <h2 className="education-title">Education</h2>
      <div className="education-grid">
        {education.map((edu, index) => (
          <div className="education-card" key={index}>
            <div
              className="education-header"
              style={{ backgroundColor: edu.color }}
            >
              <h3>{edu.institute}</h3>
              <div
                className="education-icon"
                style={{ backgroundColor: edu.color }}
              >
                {edu.icon}
              </div>
            </div>
            <div className="education-body">
              <h4>{edu.degree}</h4>
              <p className="education-date">{edu.date}</p>
              <p>    Mahatma Jyotiba Phule High School, Pishore. </p>
              <ul>
                {edu.description.map((point, idx) => (
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

export default Education;
