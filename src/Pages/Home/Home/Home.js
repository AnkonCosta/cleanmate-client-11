import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import AboutServices from "./AboutServices/AboutServices";
import ChooseUs from "./ChooseUs/ChooseUs";
import Services from "./Services/Services";

const Home = () => {
  document.title = "Home";
  return (
    <div className="w-full md:max-w-screen-lg  mx-auto ">
      <HomeBanner></HomeBanner>
      <Services></Services>
      <ChooseUs></ChooseUs>
      <AboutServices></AboutServices>
    </div>
  );
};

export default Home;
