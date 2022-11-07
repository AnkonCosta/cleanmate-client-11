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
        <div className="">
          <div>
            <h1 className="text-2xl  font-bold">Service Overview</h1>
            <p className="font-serif font-light mt-5">{description}</p>
          </div>
          <div className="mt-6">
            <h1 className="text-2xl  font-bold">We Gurantee</h1>
            <p className="font-serif font-light mt-5">{more}</p>
          </div>
        </div>
        <div className="">
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

      {/* another section  */}
      <section>
        <div className="grid grid-cols-2 items-center content-center">
          <div>
            <div className="max-w-lg shadow-md">
              <form action="" className="w-full p-4">
                <div className="mb-2">
                  <label for="comment" className="text-lg text-gray-600">
                    Add a comment
                  </label>
                  <textarea
                    className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
                    name="comment"
                    placeholder=""
                  ></textarea>
                </div>
                <button className="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded">
                  Comment
                </button>
              </form>
            </div>
          </div>
          <div>
            {/* <!-- component --> */}
            <div className="flex justify-center relative top-1/3">
              {/* <!-- This is an example component --> */}
              <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
                <div className="relative flex gap-4">
                  <img
                    src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png"
                    className="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
                    alt=""
                    loading="lazy"
                  />
                  <div className="flex flex-col w-full">
                    <div className="flex flex-row justify-between">
                      <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">
                        COMMENTOR
                      </p>
                      <a className="text-gray-500 text-xl" href="#">
                        <i className="fa-solid fa-trash"></i>
                      </a>
                    </div>
                    <p className="text-gray-400 text-sm">
                      20 April 2022, at 14:88 PM
                    </p>
                  </div>
                </div>
                <p className="-mt-4 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br />
                  Maxime quisquam vero adipisci beatae voluptas dolor ame.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
