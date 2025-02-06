import React from 'react';
import './Internships.styles.css';

const internships = [
  {
    title: 'Web Designing and Development',
    institute: 'Meck Teck Research Foundation',
    aos: 'fade-right',
  },
  {
    title: 'Graphic Designer Intern',
    institute: 'Code Alpha',
    aos: 'fade-left',
  },
  {
    title: 'Web Development Intern',
    institute: 'Cod Soft',
    aos: 'fade-right',
  },
  {
    title: 'Python Intern',
    institute: 'Fantasy Solutions',
    aos: 'fade-left',
  },
];

const Internships = () => (
  <section id="internships">
    <h2>Internships</h2>
    <div className="internships-container">
      {internships.map((internship, index) => (
        <div 
          className="internship-card" 
          key={index} 
          data-aos={internship.aos} 
        >
          <h3>{internship.title}</h3>
          <p>{internship.institute}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Internships;
