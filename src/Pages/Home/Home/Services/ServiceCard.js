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
        <div className=" content-between">
          <h1 className="text-md font-bold">{title}</h1>
        </div>
        <p className="font-serif my-3">{description.slice(0, 100)}.</p>

        <div className="flex justify-evenly mx-auto w-full">
          <Link className="tooltip" data-tip={`$ ${price}`}>
            <button className="border font-semibold py-2 px-6 rounded border-green-600 bg-green-600 text-white">
              Price: ${price}
            </button>
          </Link>
          <Link to={`/services/${_id}`}>
            <button className="border font-semibold py-2 px-6 rounded border-green-600 hover:bg-green-600 hover:text-white">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
