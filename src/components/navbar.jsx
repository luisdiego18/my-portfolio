import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="container">
          <div className="navbar-items">
            <Link
              className="navbar-logo"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              DIEGO
            </Link>
            <Link
              className="navbar-link"
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              About
            </Link>
            <Link
              className="navbar-link"
              to="skills"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Skills
            </Link>
            <Link
              className="navbar-link"
              to="experience"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Experience
            </Link>
            <Link
              className="navbar-link"
              to="projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Projects
            </Link>
            <button type="button">Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
