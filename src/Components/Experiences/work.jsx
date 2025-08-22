import React from "react";
import "../Experiences/work.css";
import { 
  FaFacebookF, 
  FaQuora, 
  FaAirbnb, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaStar,
  FaCode,
  FaUsers,
  FaRocket
} from "react-icons/fa";

const experiences = [
  {
    company: "Facebook",
    role: "Software Engineer",
    date: "June 2018 – Present",
    location: "Menlo Park, CA",
    description: [
      "Built scalable frontend systems using React and TypeScript",
      "Integrated Facebook APIs and GraphQL for data management",
      "Led development of new features with 10M+ daily active users",
      "Mentored junior developers and conducted code reviews",
      "Optimized application performance by 40%",
    ],
    icon: <FaFacebookF />,
    color: "#1877F2",
    gradient: "linear-gradient(135deg, #1877F2 0%, #42A5F5 100%)",
    achievements: ["Performance Award", "Innovation Grant"],
    technologies: ["React", "TypeScript", "GraphQL", "Node.js"],
    impact: "10M+ users"
  },
  {
    company: "Quora",
    role: "Front-End Developer",
    date: "May 2017 – May 2018",
    location: "Mountain View, CA",
    description: [
      "Redesigned user dashboard UI improving user engagement by 25%",
      "Worked with React and Redux for state management",
      "Implemented responsive design for mobile and desktop platforms",
      "Collaborated with UX designers to create intuitive interfaces",
      "Reduced page load time by 30% through optimization",
    ],
    icon: <FaQuora />,
    color: "#B92B27",
    gradient: "linear-gradient(135deg, #B92B27 0%, #E74C3C 100%)",
    achievements: ["Best UI Award", "Team Player"],
    technologies: ["React", "Redux", "JavaScript", "CSS3"],
    impact: "25% engagement increase"
  },
  {
    company: "Airbnb",
    role: "Software Engineer Intern",
    date: "Jan 2015 – Sep 2015",
    location: "San Francisco, CA",
    description: [
      "Improved booking interface performance and user experience",
      "Collaborated with design and backend teams on feature development",
      "Implemented A/B testing for new booking flow features",
      "Developed reusable component library for the design system",
      "Contributed to codebase with 100+ commits and 15+ PRs",
    ],
    icon: <FaAirbnb />,
    color: "#FF5A5F",
    gradient: "linear-gradient(135deg, #FF5A5F 0%, #FF8A80 100%)",
    achievements: ["Intern of the Year", "Innovation Award"],
    technologies: ["JavaScript", "React", "Python", "Django"],
    impact: "15+ features shipped"
  },
];

const Experience = () => {
  return (
    <section className="experience-section" id="work">
      <div className="experience-container">
        <div className="experience-header-section">
          <h2 className="experience-title">
            <span className="title-icon">💼</span>
            Professional Experience
          </h2>
          <p className="experience-subtitle">
            My journey through the tech industry, building impactful solutions and growing as a developer
          </p>
        </div>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div className={`experience-card ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
              <div className="card-content">
                <div className="card-header" style={{ background: exp.gradient }}>
                  <div className="company-icon">
                    {exp.icon}
                  </div>
                  <div className="company-info">
                    <h3 className="company-name">{exp.company}</h3>
                    <div className="role-info">
                      <h4 className="role">{exp.role}</h4>
                      <div className="impact-badge">
                        <FaRocket className="rocket-icon" />
                        {exp.impact}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="card-body">
                  <div className="meta-info">
                    <div className="meta-item">
                      <FaCalendarAlt className="meta-icon" />
                      <span>{exp.date}</span>
                    </div>
                    <div className="meta-item">
                      <FaMapMarkerAlt className="meta-icon" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <div className="description">
                    <h5>Key Responsibilities:</h5>
                    <ul>
                      {exp.description.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="technologies">
                    <h5>Technologies Used:</h5>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, idx) => (
                        <span className="tech-tag" key={idx}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {exp.achievements.length > 0 && (
                    <div className="achievements">
                      <h5>Achievements:</h5>
                      <div className="achievement-tags">
                        {exp.achievements.map((achievement, idx) => (
                          <span className="achievement-tag" key={idx}>
                            <FaStar className="star-icon" />
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
        
        <div className="experience-footer">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-icon">
                <FaCode />
              </div>
              <div className="stat-number">3</div>
              <div className="stat-label">Companies</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <FaUsers />
              </div>
              <div className="stat-number">10M+</div>
              <div className="stat-label">Users Impacted</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <FaRocket />
              </div>
              <div className="stat-number">15+</div>
              <div className="stat-label">Features Shipped</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
