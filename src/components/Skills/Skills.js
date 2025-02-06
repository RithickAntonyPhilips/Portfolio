import React from "react";
import "./Skills.styles.css";
import JS from "./LOGO/JS.png"
import HTML from "./LOGO/HTML.png"
import CSS from "./LOGO/CSS.png"
import ReactLogo from "./LOGO/React.png"
import Node from "./LOGO/Node.png"
import MongoDB from "./LOGO/MongoDB.png"
import Express from "./LOGO/Express.png"
import Photoshop from "./LOGO/Photoshop.png"
import AfterEffect from "./LOGO/After effects.png"
import Figma from "./LOGO/Figma.png"
import Ai from "./LOGO/Illustrator.png"



const skills = [
  { name: "JavaScript", logo: JS },
  { name: "HTML", logo: HTML },
  { name: "CSS", logo: CSS },
  { name: "React", logo: ReactLogo },
  { name: "Node.js", logo: Node },
  { name: "Express", logo: Express },
  { name: "MongoDB", logo: MongoDB },
  { name: "Photoshop", logo: Photoshop },
  { name: "After Effects", logo: AfterEffect },
  { name: "Figma", logo: Figma },
  { name: "Illustrator", logo: Ai },
];

const Skills = () => (
  <section id="skills">
    <h2>Skills</h2>
    <div className="skills-container">
      <div className="skills-slider">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.logo} alt={skill.name} title={skill.name} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
