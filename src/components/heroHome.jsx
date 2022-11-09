import React from "react";
import "../assets/styles/heroHome.css";

const HeroHome = () => {
  return (
    <div id="home" className="hero-home">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="hh-item">
              <p> Web and Software Developer</p>
              <h1>Luis Diego Hernandez</h1>
              <p>3 years of experience</p>
              <button>Contact Me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
