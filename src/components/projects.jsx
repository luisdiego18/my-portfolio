import React from "react";
import projects from "../data/projects.json";
import "../assets/styles/projects.css";

const Projects = () => {
  return (
    <div id="projects" className="my-section-2">
      <div className="container">
        <div>
          <h2 className="project-header">My Projects</h2>
          <div className="separator"></div>
        </div>
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="project-item">
              <img
                src={require("../assets/images/Service-1-min.jpeg")}
                alt=""
              />
              <h4>{project.title}</h4>
              <p>{project.technologies}</p>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
