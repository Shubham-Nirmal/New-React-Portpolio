import React from "react";
import img from "../../assets/skills.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaNodeJs,
  FaNpm,
  FaDatabase,
  FaAws,
  FaPython,
  FaDocker,
  FaJava,
  FaServer,
} from "react-icons/fa";
import { SiFirebase, SiTailwindcss, SiExpress, SiC, SiDaisyui } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Sass", icon: <FaSass /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "ReactJS", icon: <FaReact /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "DaisyUI", icon: <SiDaisyui /> },
  { name: "NodeJS", icon: <FaNodeJs /> },
  { name: "ExpressJS", icon: <SiExpress /> },
  { name: "NPM", icon: <FaNpm /> },
  { name: "SQL", icon: <FaDatabase /> },
];

const moreSkills = [
  { name: "AWS", icon: <FaAws /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "C", icon: <SiC /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Client-Server Architecture", icon: <FaServer /> },
  { name: "Application Flow", icon: <FaServer /> },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-black text-gray-200 py-16 px-6 md:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left - Image */}
        <div className="flex justify-center md:justify-start md:w-2/5">
          <img
            src={img}
            alt="Skills"
            className="max-w-xs md:max-w-md rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          />
        </div>

        {/* Right - Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            When I Do
          </h2>
          <p className="text-gray-400 text-lg">
            CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
          </p>

          {/* Skills Grid */}
          <div className="mt-8">
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center w-20 p-3 rounded-xl bg-gray-900 hover:bg-gray-800 hover:scale-110 shadow-md transition-transform cursor-pointer"
                >
                  <span className="text-4xl text-blue-400 mb-2">{skill.icon}</span>
                  <p className="text-sm text-gray-300">{skill.name}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6">
              {moreSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center w-24 p-3 rounded-xl bg-gray-900 hover:bg-gray-800 hover:scale-110 shadow-md transition-transform cursor-pointer"
                >
                  <span className="text-4xl text-green-400 mb-2">{skill.icon}</span>
                  <p className="text-sm text-gray-300 text-center">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="mt-10 space-y-4">
            <p className="flex items-start text-gray-300 text-lg">
              <span className="text-yellow-400 text-xl mr-2">⚡</span>
              Develop highly interactive Front end / User Interfaces for your web and mobile applications
            </p>
            <p className="flex items-start text-gray-300 text-lg">
              <span className="text-yellow-400 text-xl mr-2">⚡</span>
              Progressive Web Applications ( PWA ) in normal and SPA Stacks
            </p>
            <p className="flex items-start text-gray-300 text-lg">
              <span className="text-yellow-400 text-xl mr-2">⚡</span>
              Integration of third-party services such as Firebase / AWS / Digital Ocean
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
