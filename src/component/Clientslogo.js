import React, { Component } from "react";
import Clientsliders from "react-slick";
import Sectiontitle from "../component/Banner/Sectiontitle";

class Listing extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <section className="clients_logo_area" id="listing">
        <div className="container">
          <Sectiontitle Title="Listing" TitleP="Some text about listing" />
          <Clientsliders {...settings} className="clients_slider">
            <div className="item">
              <a href=".#">
                <img src={require("../image/1.png")} alt="" />
              </a>
            </div>
            <div className="item">
              <a href=".#">
                <img src={require("../image/2.png")} alt="" />
              </a>
            </div>
            <div className="item">
              <a href=".#">
                <img src={require("../image/3.png")} alt="" />
              </a>
            </div>
          </Clientsliders>
        </div>
      </section>
    );
  }
}
export default Listing;
