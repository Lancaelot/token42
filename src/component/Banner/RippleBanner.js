import React from "react";
import Reveal from "react-reveal/Reveal/";
import WaterWave from "react-water-wave";

export const RBanner = ({ jhonData, bClass, textLeft, imag }) => {
  return (
    <section id="home">
      <WaterWave
        strength={500}
        className={`banner_area ${bClass}`}
        style={{ width: "100%", height: "100%", backgroundSize: "cover" }}
        imageUrl={require("../../image/" + imag)}
      >
        {() => (
          <div className="container">
            <div className={`banner_content ${textLeft}`}>
              <Reveal effect="fadeInUp">
                <h5>The answer to</h5>
              </Reveal>
              <Reveal effect="fadeInUp" duration={1500}>
                <h2 className="wow fadeInLeft animated">Life the Universe</h2>
              </Reveal>
              <Reveal effect="fadeInUp" duration={2200}>
                <h4 className="wow fadeInUp anoimated">and everything....</h4>
              </Reveal>
              <ul className="list_style social_icon">
                {jhonData.socialLinks &&
                  jhonData.socialLinks.map((item) => {
                    return (
                      <li key={item.name}>
                        <a href={item.url}>
                          <i className={item.className}></i>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        )}
      </WaterWave>
    </section>
  );
};
