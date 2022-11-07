import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { img, title, description, _id, price, more } = service;
  return (
    <div className="bg-white max-w-screen-lg mx-auto">
      <div
        className="hero h-96"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="hero-content text-center text-neutral-content">
          <h1 className="mb-5 text-5xl font-bold text-white">{title}</h1>
        </div>
        <div className="hero-overlay bg-opacity-50"></div>
      </div>

      <div className="grid md:grid-cols-2 p-5 gap-10">
        <div>
          <div>
            <h1 className="text-2xl  font-bold">Service Overview</h1>
            <p className="font-serif font-light mt-5">{description}</p>
          </div>
          <div className="mt-6">
            <h1 className="text-2xl  font-bold">We Gurantee</h1>
            <p className="font-serif font-light mt-5">{more}</p>
          </div>
        </div>
        <div className="shadow">
          <div className="">
            <div className="">
              <h1 className="text-2xl  font-bold">Our Mission</h1>
              <p className="font-serif  font-light mt-5">
                Founded in 1995 we became one of the leading providers of
                residential and commercial cleaning solutions in Canada and
                United States. Our mission is to: Deliver high quality and
                consistent services. Use environmentall friendly cleaning
                products. Provide stable jobs with resonable wages. Concentrate
                our resources on maintaining standards. Make you an extremely
                satisfied customer.
              </p>
            </div>
            <div className="text-center">
              <h1 className="btn btn-success  mt-5">Price: ${price}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
