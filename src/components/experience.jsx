import React from "react";
import jobs from "../data/workExperience.json";
import "../assets/styles/experience.css";

const Experience = () => {
  return (
    <div id="experience" className="my-section-1">
      <div className="container">
        <div>
          <h2 className="exp-header">Work Experience</h2>
          <div className="exp-separator"></div>
        </div>
        <div className="row">
          {jobs.map((job) => (
            <div className="exp-item">
              <div key={job.id}>
                <h3>{job.title}</h3>
                <p>
                  {job.company}, {job.city}, {job.State}, {job.country} |{" "}
                  {job.startDate} - {job.endDate}
                </p>
                <ul>
                  {job.description.map((data) => (
                    <li key={data}>{data}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
