import React from "react";
import { Link } from "react-router-dom";
import bg from "../../../assets/background/bg-2.jpg";

const HomeBanner = () => {
  return (
    <div
      className="hero h-96"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="hero-overlay w-full bg-opacity-30"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-semibold">
            ESTIMATE TOTAL COSTS OF HOUSE CLEANING
          </h1>
          <p className="mb-5 ">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to="/services">
            <button className="border font-semibold py-2 px-6 rounded border-green-600 hover:bg-green-600 hover:text-white">
              Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
