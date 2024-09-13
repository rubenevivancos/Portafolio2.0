import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Components/Home/home';
import AboutMe from './Components/AboutMe/aboutMe';
import Projects from './Components/Projects/projects';
import Experience from './Components/Experience/experience';
import Skills from './Components/Skills/skills';
import Resume from './Components/Resume/resume';
import Contact from './Components/Contact/contact';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutMe" element={<AboutMe/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;