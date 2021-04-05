import React, { Component } from "react";
import Sectiontitle from "../Banner/Sectiontitle";
import BlogItems from "../Blog/BlogItems";
import Reveal from "react-reveal/Reveal/";
class Tokenomics extends Component {
  render() {
    return (
      <section className="blog_area" id="tokenomics">
        <div className="container">
          <Sectiontitle
            Title="Tokenomics"
            TitleP="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          />
          <Reveal effect="fadeInUp" duration={1000}>
            Coming soon
          </Reveal>
        </div>
      </section>
    );
  }
}
export default Tokenomics;
