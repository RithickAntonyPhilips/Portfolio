import React from 'react';
import './Contact.styles.css';
import 'aos/dist/aos.css';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => (
    <section id="contact">
      <h2>Contact</h2>
      <p>Email: antonyphilips995@gmail.com</p>
      <p>Phone: +91 90036 83033</p>

      <div className="social-icons">
          <a href="https://www.instagram.com/_antony__philips___" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon instagram" />
          </a>


          <a href="https://github.com/RithickAntonyPhilips" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon github" />
          </a>
          <a href="https://www.linkedin.com/in/rithickantonyphilips13" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon linkedin" />
          </a>
      </div>
    </section>
  );

export default Contact;
