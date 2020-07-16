import React, { Component } from "react";

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;

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
                      <p>{item.description}</p>
                      <a
                        href={item.appurl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        See the App
                      </a>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
