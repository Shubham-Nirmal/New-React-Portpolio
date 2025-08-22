import React from "react";
import "../Education/education.css";
import { FaUniversity, FaGraduationCap, FaSchool, FaCalendarAlt, FaMapMarkerAlt, FaStar } from "react-icons/fa";

const education = [
  {
    institute: "Dr. Babasaheb Ambedkar Marathwada University",
    degree: "Bachelor of Engineering (Computer)",
    date: "2023 – 2025",
    location: " Chhatrapati Sambhajanagar, Maharashtra",
    description: [
      "Secured 79.00% marks with distinction",
      "Focused on Web Development and Software Engineering",
      // "Completed core subjects: Data Structures, Algorithms, Database Management",
      "Active member of Computer Science Club",
    ],
    icon: <FaUniversity />,
    color: "#4B8BF4",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    achievements: ["Dean's List", "Academic Excellence Award"],
    gpa: "8.5/10"
  },
  {
    institute: "Maharashtra State Board",
    degree: "Higher Secondary School (12th)",
    date: "2021 – 2022",
    location: "Pishore, Maharashtra",
    description: [
      "Stream: Science (Physics, Chemistry, Mathematics)",
      "Secured 74.40% marks in HSC examination",
      "Participated in Science Olympiad",
      // "Member of Science Club",
    ],
    icon: <FaGraduationCap />,
    color: "#FF5733",
    gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    achievements: ["Science Olympiad Participant"],
    gpa: "7.4/10"
  },
  {
    institute: "Maharashtra State Board",
    degree: "Secondary School (10th)",
    date: "2019 – 2020",
    location: "Pishore, Maharashtra",
    description: [
      "Completed SSC with distinction",
      "Secured 77.40% marks in board examination",
      // "School topper in Mathematics",
      "Active participant in extracurricular activities",
    ],
    icon: <FaSchool />,
    color: "#28A745",
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    achievements: ["School Topper", "Mathematics Excellence"],
    gpa: "7.7/10"
  },
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <div className="education-header-section">
          <h2 className="education-title">
            <span className="title-icon">🎓</span>
            Educational Journey
          </h2>
          <p className="education-subtitle" id="education ">
            My academic path that shaped my passion for technology and innovation
          </p>
        </div>
        
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div className={`education-card ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
              <div className="card-content">
                <div className="card-header" style={{ background: edu.gradient }}>
                  <div className="institute-icon">
                    {edu.icon}
                  </div>
                  <div className="institute-info">
                    <h3 className="institute-name">{edu.institute}</h3>
                    <div className="degree-info">
                      <h4 className="degree">{edu.degree}</h4>
                      <div className="gpa-badge">
                        <FaStar className="star-icon" />
                        {edu.gpa}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="card-body">
                  <div className="meta-info">
                    <div className="meta-item">
                      <FaCalendarAlt className="meta-icon" />
                      <span>{edu.date}</span>
                    </div>
                    <div className="meta-item">
                      <FaMapMarkerAlt className="meta-icon" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  
                  <div className="description">
                    <h5>Key Highlights:</h5>
                    <ul>
                      {edu.description.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {edu.achievements.length > 0 && (
                    <div className="achievements">
                      <h5>Achievements:</h5>
                      <div className="achievement-tags">
                        {edu.achievements.map((achievement, idx) => (
                          <span className="achievement-tag" key={idx}>
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="timeline-connector">
                <div className="connector-dot"></div>
                <div className="connector-line"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="education-footer">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">Educational Levels</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">77.4%</div>
              <div className="stat-label">Best Performance</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years of Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
