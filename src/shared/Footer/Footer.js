import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../src/assets/logo/logo2.png";
import me from "../../../src/assets/logo/me.png";

const Footer = () => {
  return (
    <div className="max-w-screen-lg mx-auto  bg-green-900">
      <footer className="footer p-10 text-base-content">
        <div>
          <img className="" src={logo} alt="" />
          <p className="text-xl text-white">
            CleanMate
            <br />
            Providing reliable cleaning since 2017
          </p>
        </div>
        <div>
          <span className="font-bold text-white text-xl">Services</span>
          <Link to="/" className="text-white font-light">
            Branding
          </Link>
          <Link to="/" className="text-white font-light">
            Design
          </Link>
          <Link to="/" className="text-white font-light">
            Marketing
          </Link>
          <Link to="/" className="text-white font-light">
            Advertisement
          </Link>
        </div>
        <div>
          <span className="font-bold text-white text-xl">Company</span>
          <Link to="/" className="text-white font-light">
            About us
          </Link>
          <Link to="/" className="text-white font-light">
            Contact
          </Link>
          <Link to="/" className="text-white font-light">
            Jobs
          </Link>
          <Link to="/" className="text-white font-light">
            Press kit
          </Link>
        </div>
        <div>
          <span className="font-bold text-white text-xl">Legal</span>
          <Link to="/" className="text-white font-light">
            Terms of use
          </Link>
          <Link to="/" className="text-white font-light">
            Privacy policy
          </Link>
          <Link to="/" className="text-white font-light">
            Cookie policy
          </Link>
        </div>
      </footer>
      <p className="text-center text-white py-5">
        <code>
          All rights reserved by{" "}
          <a
            className="tooltip"
            data-tip="Redirect to LinkedIn Profile"
            href="https://www.linkedin.com/in/ankoncosta/"
            target="_blank"
          >
            Ankon Costa
          </a>
        </code>
      </p>
    </div>
  );
};

export default Footer;
