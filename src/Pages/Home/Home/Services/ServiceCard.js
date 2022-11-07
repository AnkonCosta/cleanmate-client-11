import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  console.log(service);
  const { img, description, more, price, title } = service;
  return (
    <div className="bg-white shadow-md ">
      <div className="text-center">
        <img className="fluid mx-auto w-full" src={img} alt="Cleaning" />
      </div>
      <div className="text-center m-5">
        <h1 className="text-md font-bold">{title}</h1>
        <p className="font-serif my-3">{description.slice(0, 100)}.</p>
        <button className="btn btn-outline btn-primary">Button</button>
      </div>
    </div>
  );
};

export default ServiceCard;
