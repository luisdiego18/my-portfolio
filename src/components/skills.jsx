import React from "react";
import "../assets/styles/skills.css";

const Skills = () => {
  return (
    <div id="skills" className="my-section-2">
      <div className="container">
        <div>
          <h2 className="skills-header">Tech Skills</h2>
          <div className="skills-separator"></div>
        </div>
        <div className="row">
          <div className="col-skills col-25">
            <div className="skill-item">
              <h4>Frontend</h4>
              <ul>
                <li>Javascript</li>
                <li>React.js</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>
          <div className="col-skills col-25">
            <div className="skill-item">
              <h4>Backend</h4>
              <ul>
                <li>Java</li>
                <li>Spring Boot</li>
                <li>C#</li>
                <li>ASP.NET</li>
                <li>Node.js</li>
              </ul>
            </div>
          </div>
          <div className="col-skills col-25">
            <div className="skill-item">
              <h4>Data Analysis</h4>
              <ul>
                <li>SQL</li>
                <li>MS Excel</li>
                <li>Tableau</li>
                <li>Power BI</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
          <div className="col-skills col-25">
            <div className="skill-item">
              <h4>Other</h4>
              <ul>
                <li>AWS Practitioner</li>
                <li>Wordpress</li>
                <li>Salesforce Admin</li>
                <li>NICE IEX</li>
                <li>Agile Methodology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
