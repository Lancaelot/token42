import React from "react";
import Navbar from "./component/Navbar/Navbar";
import { RBanner } from "./component/Banner/RippleBanner";
import About from "./component/About";
import Roadmap from "./component/Roadmap";
import Statistics from "./component/Portfolio/ListingStatistics";
import Quotes from "./component/Testimonial/Testimonial";
import Listing from "./component/Clientslogo";
import Footer from "./component/Footer";
import jhonData from "./component/jhonData";

export const Home = () => (
  <div className="body_wrapper">
    <Navbar mainlogo="logo2.png" stickylogo="logo.png" />
    {/* <ParticlesBanner jhonData={jhonData}/> */}
    <RBanner
      jhonData={jhonData}
      bClass="banner_shap"
      imag="man.jpg"
      textLeft="text-left"
    />
    <About aClass="about_area" jhonData={jhonData} />
    <Roadmap wClass="work_area" jhonData={jhonData} />
    <Statistics />
    <Quotes />
    <Listing />
    <Footer jhonData={jhonData} />
  </div>
);
