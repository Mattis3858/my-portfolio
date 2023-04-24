import React, { Component } from "react";
export default class Portfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.(TBU)</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-thirds s-bgrid-thirds cf"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item, i) => {
                  return (
                    <div className="columns portfolio-item" key={i}>
                      <div className="item-wrap">
                        <a
                          href={`${item.url}`}
                          onClick={() => {
                            window.open(item.url);
                          }}
                        >
                          <img
                            src={`${item.imgurl}`}
                            className="item-img"
                            alt=""
                          />

                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <h1>
          Github: <a href="https://github.com/Mattis3858">Mattis3858</a>
        </h1>
      </section>
    );
  }
}
