import React from "react";

const Porfolio = (props) => {
  let resumeData = props.resumeData;

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Recent Projects.</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {resumeData.portfolio &&
              resumeData.portfolio.map((item) => {
                console.log(item.appurl);
                return (
                  <div className="columns portfolio-item" key={item.name}>
                    <h3>{item.name}</h3>
                    <img
                      src={item.imgurl}
                      alt="project"
                      style={{ width: 250, height: 150 }}
                    ></img>
                    <p>{item.description}</p>
                    <a
                      href={item.appurl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See the App
                    </a>
                    <br></br>
                    <a
                      href={item.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See the Repo
                    </a>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Porfolio;
