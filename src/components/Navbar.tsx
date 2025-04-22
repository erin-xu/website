import React from "react";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import "../styles/Navbar.scss";

const sections = ["about", "experience", "projects", "resume"];

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("about");
  // let lastScrollY = 0;

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;
  //     setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100); // Show on scroll up or near top
  //     setLastScrollY(currentScrollY);

  //     let newActiveSection = "about";

  //     for (const section of sections) {
  //       const element = document.getElementById(section);
  //       if (element) {
  //         const rect = element.getBoundingClientRect();
  //         if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
  //           newActiveSection = section;
  //           console.log(newActiveSection)
  //           break;
  //         }
  //       }
  //     }

  //     setActiveSection(newActiveSection);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [lastScrollY]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Toggle visibility based on scroll position
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100); // Show on scroll up or near top
      setLastScrollY(currentScrollY);

      // Update active section based on scroll position
      let newActiveSection = activeSection; // Default section

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          console.log(element)
          const rect = element.getBoundingClientRect();
          // Check if the section is in the viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            newActiveSection = section;
            break;
          }
        }
      }

      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection); // Update active section
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, lastScrollY]);

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <nav className={`navbar ${isVisible ? "visible" : "hidden"}`}>
      {sections.map((section) => (
        section === "resume" ? (
          <a
            href={'/ErinXu_Resume.pdf'} target="_blank" rel="noopener noreferrer"
            className={`nav-item ${activeSection === section ? "active" : ""}`}
          >
            {section}
          </a>
        ) : (
          <Link
            key={section}
            to={section}
            smooth={true}
            duration={500}
            className={`nav-item ${activeSection === section ? "active" : ""}`}
            onClick={() => handleSectionClick(section)}
          >
            {section}
          </Link>
        )
      ))}
    </nav>
  );
};

export default Navbar;