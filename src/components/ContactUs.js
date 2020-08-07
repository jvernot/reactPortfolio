import React from "react";
const ContactUs = (props) => {
  let resumeData = props.resumeData;
  return (
    <section id="contact">
      <div className="row section-head">
        <div className="ten columns">
          <p className="lead">
            Feel free to reach out if you want to discuss work opportunities, or
            just want to chat!
          </p>
        </div>
      </div>
      <div className="row">
        <aside className="eigth columns footer-widgets">
          <div className="widget">
            <h4>
              Email me:
              <a
                href={` mailto: ${resumeData.email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {` ${resumeData.email}`}
              </a>
            </h4>
          </div>
          <div className="widget">
            <h4>
              Message me on LinkedIn:
              <a
                href={` mailto: ${resumeData.linkedinId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {` ${resumeData.linkedinId}`}
              </a>
            </h4>
          </div>
          <div className="widget">
            <h4>
              Check out my code:
              <a
                href={` mailto: ${resumeData.github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {` ${resumeData.github}`}
              </a>
            </h4>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ContactUs;
