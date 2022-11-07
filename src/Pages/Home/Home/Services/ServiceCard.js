import React from "react";
import "./ServiceCard.css";
import { FaCommentDollar } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  console.log(service);
  const { img, description, more, price, title, _id } = service;
  return (
    <div className="bg-white shadow-md ">
      <div className="text-center">
        {/* <img className="fluid mx-auto w-full" src={img} alt="Cleaning" /> */}
        <PhotoProvider>
          <PhotoView src={img}>
            <img className="fluid mx-auto w-full" src={img} alt="" />
          </PhotoView>
        </PhotoProvider>
      </div>
      <div className="text-center m-5">
        <h1 className="text-md font-bold">{title}</h1>
        <p className="font-serif my-3">{description.slice(0, 100)}.</p>

        <Link to={`/services/${_id}`}>
          <button className="btn btn-outline btn-primary">Button</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
