import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import ChooseUs from "./ChooseUs/ChooseUs";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="max-w-screen-lg mx-auto ">
      <HomeBanner></HomeBanner>
      <Services></Services>
      <ChooseUs></ChooseUs>
    </div>
  );
};

export default Home;
