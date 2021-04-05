import React, { Component } from "react";
import Slider from "react-slick";

class TestimonialSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      autoplay: true,
      pauseOnHover: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings} className="testimonial_slider">
          <div className="item">
            <div className="author_img">
              <img src={require("../../image/slider2.png")} alt="" />
            </div>
            <h6>Douglas Adams</h6>
            <span>The Hitchhiker's Guide to the Galaxy</span>
            <p>
              “The answer to the great question...of Life, the Universe and
              Everything...is...forty-two.”
            </p>
          </div>
          <div className="item">
            <div className="author_img">
              <img src={require("../../image/slider2.png")} alt="" />
            </div>
            <h6>Douglas Adams</h6>
            <span>The Hitchhiker's Guide to the Galaxy</span>
            <p>
              “Space is big. Really big. You just won't believe how vastly,
              hugely, mind-bogglingly big it is. I mean, you may think it's a
              long way down the road to the chemist's, but that's just peanuts
              to space.”
            </p>
          </div>
          <div className="item">
            <div className="author_img">
              <img src={require("../../image/slider2.png")} alt="" />
            </div>
            <h6>Douglas Adams</h6>
            <span>The Hitchhiker's Guide to the Galaxy</span>
            <p>“Reality is frequently inaccurate.”</p>
          </div>
          <div className="item">
            <div className="author_img">
              <img src={require("../../image/slider2.png")} alt="" />
            </div>
            <h6>Douglas Adams</h6>
            <span>The Hitchhiker's Guide to the Galaxy</span>
            <p>“Don't Panic.”</p>
          </div>
          <div className="item">
            <div className="author_img">
              <img src={require("../../image/slider2.png")} alt="" />
            </div>
            <h6>Douglas Adams</h6>
            <span>The Hitchhiker's Guide to the Galaxy</span>
            <p>“Time is an illusion. Lunchtime doubly so.”</p>
          </div>
          <div className="item">
            <div className="author_img">
              <img src={require("../../image/slider2.png")} alt="" />
            </div>
            <h6>Douglas Adams</h6>
            <span>The Hitchhiker's Guide to the Galaxy</span>
            <p>“I'd far rather be happy than right any day.” </p>
          </div>
          <div className="item">
            <div className="author_img">
              <img src={require("../../image/slider2.png")} alt="" />
            </div>
            <h6>Douglas Adams</h6>
            <span>The Hitchhiker's Guide to the Galaxy</span>
            <p>
              “So once you do know what the question actually is, you'll know
              what the answer means.”
            </p>
          </div>
          <div className="item">
            <div className="author_img">
              <img src={require("../../image/slider2.png")} alt="" />
            </div>
            <h6>Douglas Adams</h6>
            <span>The Hitchhiker's Guide to the Galaxy</span>
            <p>
              “I don’t know what I’m looking for... I think it might be because
              if I knew I wouldn’t be able to look for them.”
            </p>
          </div>
          <div className="item">
            <div className="author_img">
              <img src={require("../../image/slider2.png")} alt="" />
            </div>
            <h6>Douglas Adams</h6>
            <span>The Hitchhiker's Guide to the Galaxy</span>
            <p>
              “Looking up into the night sky is looking into infinity—distance
              is incomprehensible and therefore meaningless.”
            </p>
          </div>
        </Slider>
      </div>
    );
  }
}
export default TestimonialSlider;
