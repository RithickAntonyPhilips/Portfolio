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
          an ambitious and detail-oriented student with excellent analytical and problem-solving abilities. 
          I am eager to work in a competitive environment where I can grow, contribute, and refine my skills.
        </p>
      </div>
    </section>
  );
};

export default About;
