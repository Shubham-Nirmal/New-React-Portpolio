import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import Landing from "../src/Components/Landingpage/landing.jsx"
import Navbar from "../src/Components/Navbar/navbar.jsx"
import Skills from "../src/Components/Skills/skills.jsx" 
import Experiences from "../src/Components/Experiences/work.jsx"
import Contact from './Components/Contact/contact.jsx'
import About from './Components/About/about.jsx'
import Education from '../src/Components/Education/education.jsx'
import Project from '../src/Components/Project/project.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Landing />
    <Skills />
    <About />
    <Education />
    <Experiences />
    <Project />
    <Contact />
  </StrictMode>,
)
