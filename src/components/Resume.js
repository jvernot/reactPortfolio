import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Resume = (props) => {
  let resumeData = props.resumeData;
  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {resumeData.education &&
            resumeData.education.map((item) => {
              return (
                <div key={item.UniversityName} className="row item">
                  <div className="twelve columns">
                    <h3>{item.UniversityName}</h3>
                    <p className="info">
                      {item.specialization}
                      <span>&bull;</span>{" "}
                      <em className="date">
                        {item.MonthOfPassing} {item.YearOfPassing}
                      </em>
                    </p>
                    <p>{item.Achievements}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {resumeData.work &&
            resumeData.work.map((item) => {
              return (
                <div key={item.CompanyName} className="row item">
                  <div className="twelve columns">
                    <h3>{item.CompanyName}</h3>
                    <p className="info">
                      {item.specialization}
                      <span>&bull;</span>{" "}
                      <em className="date">
                        {item.MonthOfLeaving} {item.YearOfLeaving}
                      </em>
                    </p>
                    <p>{item.Achievements}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>My skills include:</p>

          <FontAwesomeIcon
            icon={["fab", "html5"]}
            size="10x"
            style={{ marginRight: 40 }}
          />

          <FontAwesomeIcon
            icon={["fab", "css3"]}
            size="10x"
            style={{ marginRight: 40 }}
          />

          <FontAwesomeIcon
            icon={["fab", "js"]}
            size="10x"
            style={{ marginRight: 40 }}
          />

          <FontAwesomeIcon
            icon={["fab", "react"]}
            size="10x"
            style={{ marginRight: 40, marginLeft: 40 }}
          />

          <FontAwesomeIcon
            icon={["fab", "node"]}
            size="10x"
            style={{ marginRight: 40 }}
          />

          <p>Others include: Express.js, Handlebars.js, MySQL, and MongoDB</p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
