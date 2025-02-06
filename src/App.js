import React from 'react';
import Header from './components/Header/Header.js';
import About from './components/About/About.js';
import Skills from './components/Skills/Skills.js';
import Projects from './components/Project/Project.js';
import Resume from './components/Resume/Resume.js';
import Contact from './components/Contact/Contact.js';
import Certifications from './components/Certifications/Certifications.js';
import Internships from './components/Internships/Internships.js';
import Education from './components/Education/Education.js';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Internships />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
