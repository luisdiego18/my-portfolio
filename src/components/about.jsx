import React from "react";
import "../assets/styles/about.css";

const About = () => {
  return (
    <div id="about" className="my-section-1">
      <div className="container">
        <div>
          <h2 className="about-header">About Me</h2>
          <div className="about-separator"></div>
        </div>
        <div className="row">
          <div className="col col-50">
            <div className="about-item">
              <h3>Luis Diego Hernandez</h3>
              <p>
                Enthusiastic Web and Software Developer with a strong
                educational background in programming. Always learning new
                skills and keeping up to date with new technologies. Productive
                in both team-based and self-managed projects. With over 3 years
                of experience with Javascript, Java, Spring Boot, SQL, noSQL,
                MongoDB, VueJs, ReactJs, NodeJs ASP.Net, C#, HTML, CSS
                programming languages and frameworks, I am a talented and
                self-driven web designer using WordPress. Experience in
                identifying, analyzing and reporting trends with SQL, MS Excel,
                and PowerBI.
              </p>
            </div>
          </div>
          <div className="col col-50">
            <div className="about-item">
              <h3>Education</h3>
              <ul>
                <li>Web And Software Developer</li>
                <span>
                  Waukesha Area Technical College, Pewaukee, WI | 2020 - Present
                </span>
                <li>English As A Second Language</li>
                <span>European Academy, Managua, Nicaragua | 2009 - 2010 </span>
                <li>Business Administration</li>
                <span>
                  University Of Managua, Managua, Nicaragua | 2003 - 2008{" "}
                </span>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
