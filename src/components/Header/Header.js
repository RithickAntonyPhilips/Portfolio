import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Header.styles.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      offset: 60,
      delay: 100,
    });
  }, []);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header>
      <div className="header-content">
        <div data-aos="fade-down">
          <h1>Rithick Antony Philips C S</h1>
        </div>
        <div data-aos="fade-down">
          <p>Web Developer</p>
        </div>
      </div>
      <nav>
        <ul>
          {[
            { name: "Home", id: "home" },
            { name: "Education", id: "education"},
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "projects" },
            { name: "Certifications", id: "certifications" },
            { name: "Internships", id: "internships" },
            { name: "Resume", id: "resume" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <div data-aos="fade-right" data-aos-delay={100 * (index + 1)} key={item.id}>
              <li>
                <a href={`#${item.id}`} onClick={(e) => handleScroll(e, item.id)}>
                  {item.name}
                </a>
              </li>
            </div>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
