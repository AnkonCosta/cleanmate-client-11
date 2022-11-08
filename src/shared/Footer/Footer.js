import React from "react";
import logo from "../../../src/assets/logo/clean.png";

const Footer = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <footer className="footer p-10 bg-green-900 text-base-content">
        <div>
          <img className="" src={logo} alt="" />
          <p className="text-xl text-white">
            CleanMate
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className="font-bold text-white text-xl">Services</span>
          <a href=" " className="text-white font-light">
            Branding
          </a>
          <a href=" " className="text-white font-light">
            Design
          </a>
          <a href=" " className="text-white font-light">
            Marketing
          </a>
          <a href=" " className="text-white font-light">
            Advertisement
          </a>
        </div>
        <div>
          <span className="font-bold text-white text-xl">Company</span>
          <a href=" " className="text-white font-light">
            About us
          </a>
          <a href=" " className="text-white font-light">
            Contact
          </a>
          <a href=" " className="text-white font-light">
            Jobs
          </a>
          <a href=" " className="text-white font-light">
            Press kit
          </a>
        </div>
        <div>
          <span className="font-bold text-white text-xl">Legal</span>
          <a href=" " className="text-white font-light">
            Terms of use
          </a>
          <a href=" " className="text-white font-light">
            Privacy policy
          </a>
          <a href=" " className="text-white font-light">
            Cookie policy
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
