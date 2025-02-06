import React, { useEffect } from 'react';
import './Resume.styles.css';
import resume from './RKR.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Resume = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
      offset: 100,
      delay: 100,
    });
  }, []);

  return (
    <section id="resume">
      <div data-aos="zoom-in" className="resume-container">
        <div data-aos="zoom-out">
          <h2 className="resume-title">My Resume</h2>
        </div>
        <div data-aos="zoom-out">
          <p className="resume-description">
            Download my resume to know more about my experience and skills.
          </p>
        </div>
        <div data-aos="zoom-out">
          <a href={resume} download className="resume-btn">
            Download My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
