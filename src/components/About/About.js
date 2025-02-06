import React, { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import profileImage from './2024.png';
import "./About.styles.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      offset: 60,
      delay: 100,
    });
  }, []); 

  return (
    <section id="about">
      <div data-aos="zoom-in">
        <img src={profileImage} alt="Your profile" />
      </div>
      <div data-aos="fade-up">
        <p>
          Hi, I'm Rithick Antony Philips C S<br />
          Highly organized and proactive student with excellent communication skills and a strong work
          ethic. I am an energetic fresher who is a self-starter, eager to learn new skills, and I am currently looking forward to working in a creative and competitive environment.
        </p>
      </div>
    </section>
  );
};

export default About;
