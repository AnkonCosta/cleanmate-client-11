import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../Home/Home/Services/ServiceCard";

const AllServices = () => {
  document.title = " Services";

  const [services, setServices] = useState([]);
  // spinner loader
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch(`https://service-review-server-blush.vercel.app/services`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setServices(data);
          setLoader(false);
        } else {
          setLoader(true);
        }
      });
  }, []);

  if (loader) {
    return (
      <div className="w-full md:max-w-screen-lg mx-auto bg-white h-96 flex justify-center items-center">
        <button className="btn loading btn-outline border border-green-600">
          loading....
        </button>
      </div>
    );
  }
  return (
    <div className="w-full md:max-w-screen-lg mx-auto bg-white ">
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
