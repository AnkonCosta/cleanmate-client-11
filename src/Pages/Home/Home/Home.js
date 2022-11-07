import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import AboutServices from "./AboutServices/AboutServices";
import ChooseUs from "./ChooseUs/ChooseUs";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="max-w-screen-lg mx-auto ">
      <HomeBanner></HomeBanner>
      <Services></Services>
      <ChooseUs></ChooseUs>
      <AboutServices></AboutServices>
    </div>
  );
};

export default Home;
