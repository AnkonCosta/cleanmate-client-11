import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="max-w-screen-lg mx-auto ">
      <HomeBanner></HomeBanner>
      <Services></Services>
    </div>
  );
};

export default Home;
