import React, { Component } from "react";

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    console.log(resumeData.aboutme);
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br></br>
                  <a
                    href={`mailto: ${resumeData.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {resumeData.email}
                  </a>
                  <br></br>
                  <a
                    href={resumeData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github Profile
                  </a>
                  <br></br>
                  <a
                    href={resumeData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
