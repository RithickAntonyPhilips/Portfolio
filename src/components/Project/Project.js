import React from 'react';
import "./Project.styles.css";
import IMG1 from "./image/Prabha_Makeovers.png";


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Makeup Artist Website',
      description: 'A website for Makeup Artist.',
      image: IMG1, 
    },

  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div>
        {projects.map((project, index) => (
          <div
            key={project.id}
            data-aos={index % 2 === 0 ? "fade-up" : "zoom-in-left"}
          >
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <img src={project.image} alt={project.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;