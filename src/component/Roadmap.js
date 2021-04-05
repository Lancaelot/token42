import React, { Component } from "react";
import Sectiontitle from "./Banner/Sectiontitle";
import Fade from "react-reveal/Fade";

class Roadmap extends Component {
  render() {
    let jhonData = this.props.jhonData;
    var { wClass } = this.props;
    return (
      <section className={`${wClass}`} id="roadmap">
        <div className="container">
          <Sectiontitle
            Title="Let's talk about our future path:"
            TitleP="Our journey begins now!"
          />
          <Fade bottom cascade duration={1000}>
            <div className="row">
              {jhonData.service &&
                jhonData.service.map((item) => (
                  <div
                    className={
                      item.id === 1
                        ? "col-lg-4 col-sm-6 gradient-border worker-card"
                        : "col-lg-4 col-sm-6"
                    }
                    key={item.id}
                  >
                    <div
                      className="work_item wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <i className={item.iconName}></i>
                      <a href=".#">
                        <h2 className="t_color">{item.serviceTitle}</h2>
                      </a>
                      <p>{item.sDetails}</p>
                    </div>
                  </div>
                ))}
            </div>
          </Fade>
        </div>
      </section>
    );
  }
}

export default Roadmap;
