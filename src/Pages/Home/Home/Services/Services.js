import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/home/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="service-section-bg  py-8">
      <h1 className="text-3xl text-center font-bold">OUR CLEANING SERVICES</h1>
      <p className="text-sm text-center font-semibold mt-4">
        Do you wish you had more free time? We can make it happen!
      </p>

      <div className="grid md:grid-cols-3 gap-10 py-12 mx-5">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="text-center">
        <Link to="/services">
          <button className="border font-semibold py-2 px-6 rounded border-green-600 hover:bg-green-600 hover:text-white">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
