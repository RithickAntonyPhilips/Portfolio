import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Education.styles.css';

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const educationData = [
    { degree: 'Master of Computer Applications (MCA)', institution: 'J.J. College of Arts and Science (Autonomous), Pudukkottai', year: '2023 - 2025', animation: 'flip-up' },
    { degree: 'Bachelor of Computer Applications (BCA)', institution: 'Bishop Heber College (Autonomous), Trichy', year: '2020 - 2023', animation: 'flip-down' },
    { degree: 'HSC', institution: 'S.F.S. Matriculation of Higher Secondary School, Pudukkottai', year: '2019 - 2020', animation: 'flip-up' },
    { degree: 'SSLC', institution: 'S.F.S. Matriculation of Higher Secondary School, Pudukkottai', year: '2017 - 2018', animation: 'flip-down' },
  ];

  return (
    <div id="education" className='education'>
      <div className="education-container">
        <h2 className="education-title">Education</h2>
        {educationData.map((edu, index) => (
          <div key={index} data-aos={edu.animation} className="education-item">
            <h3>{edu.degree}</h3>
            <p>{edu.institution}</p>
            <p>{edu.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
