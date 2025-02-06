import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import C1 from './UJC.jpg';
import C2 from './UMI.jpg';
import C3 from './PBM.jpg';
import './Certifications.styles.css';

const certifications = [
  {
    title: 'Java',
    thumbnail: C1,
    file: C1,
  },
  {
    title: 'Product and Brand Management',
    thumbnail: C3,
    file: C3,
  },
  {
    title: 'MERN Stack',
    thumbnail: C2,
    file: C2,
  },
];

const Certifications = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-back",
      once: false,
      offset: 100,
      delay: 100,
    });
  }, []);

  return (
    <section id="certifications">
      <h2>Course Certifications</h2>
      <div className="certifications-container">
        {certifications.map((cert, index) => {
          let aosEffect = '';
          if (cert.title === 'Java') {
            aosEffect = 'fade-up-right';
          } else if (cert.title === 'Product and Brand Management') {
            aosEffect = 'fade-up';
          } else if (cert.title === 'MERN Stack') {
            aosEffect = 'fade-up-left';
          }

          return (
            <div className="cert-card" key={index} data-aos={aosEffect}>
              <img src={cert.thumbnail} alt={`${cert.title} thumbnail`} />
              <h3>{cert.title}</h3>
              <a href={cert.file} download>
                <button>Download Certificate</button>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Certifications;
