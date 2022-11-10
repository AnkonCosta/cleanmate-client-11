import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../Home/Home/Services/ServiceCard";

const AllServices = () => {
  document.title = " Services";
  const services = useLoaderData();
  const [loader, setLoader] = useState(true);

  return (
    <div className="max-w-screen-lg mx-auto bg-white ">
      <h1 className="text-xl font-serif font-bold mx-5">/Services/</h1>
      <div className="grid md:grid-cols-3 gap-10 py-12 mx-5">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
