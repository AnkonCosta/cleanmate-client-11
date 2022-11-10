import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../Home/Home/Services/ServiceCard";

const AllServices = () => {
  document.title = " Services";
  const services = useLoaderData();
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    if (services.length > 0) {
      setLoader(false);
    } else {
      setLoader(true);
    }

    // setTimeout(() => {
    //   setLoader(false);
    // }, services.length);
  }, [services.length]);

  return (
    <div className="w-full md:max-w-screen-lg mx-auto bg-white ">
      {loader ? (
        <>
          <div className="w-full md:max-w-screen-lg mx-auto bg-white h-96 flex justify-center items-center">
            <button className="btn loading btn-outline border border-green-600">
              loading....
            </button>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-xl font-serif font-bold mx-5">/Services/</h1>
          <div className="grid md:grid-cols-3 gap-10 py-12 mx-5">
            {services.map((service) => (
              <ServiceCard key={service._id} service={service}></ServiceCard>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AllServices;
