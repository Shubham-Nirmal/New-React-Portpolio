import React from "react";
import profileImg from "../../assets/portfolio-logo.png";
import mern from "../../assets/mern.pdf";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Landing = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 lg:px-16 bg-gray-900 text-white gap-10">
      
      {/* Left Content */}
      <div className="flex-1 max-w-2xl text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Hi, I'm Shubham Nirmal 👋
        </h1>
        <p className="text-gray-300 leading-relaxed mb-6">
          A passionate Full Stack Developer with hands-on experience in building
          responsive and dynamic web and mobile applications.
          <br />
          <br />
          <strong>I specialize in:</strong>
          <br />
          <strong>Frontend:</strong> HTML, CSS, JavaScript, React.js
          <br />
          <strong>Backend & Database:</strong> Node.js, MySQL, MongoDB,
          Express.js, Python
          <br />
          <br />
          I love creating clean, scalable solutions and turning ideas into
          real-world applications that deliver great user experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
          <a
            href="#contact"
            className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-red-500 hover:text-white transition"
          >
            Contact Me
          </a>
          <a
            href={mern}
            download
            className="border-2 border-white px-6 py-2 rounded-full font-semibold text-white hover:bg-white hover:text-black transition"
          >
            Download Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center lg:justify-start gap-6 text-2xl">
          <a
            href="https://github.com/Shubham-Nirmal"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shubhamnirmal36/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.linkedin.com/in/shubhamnirmal36/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={profileImg}
          alt="Profile"
          className="w-56 md:w-72 lg:w-80 rounded-full border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default Landing;
