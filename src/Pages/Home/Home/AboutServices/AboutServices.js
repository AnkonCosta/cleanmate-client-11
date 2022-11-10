import React from "react";

const AboutServices = () => {
  return (
    <div className="py-12 p-5 w-full md:max-w-screen-lg bg-white">
      <div className="text-center my-12">
        <p className="text-2xl font-bold text-green-600">Speciality</p>
        <h2 className="text-5xl my-3 font-bold">Why This Service?</h2>
        <p className="mt-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda{" "}
          <br />
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 items-center justify-center gap-5 my-12 ">
        <div className="border-2  rounded-lg  p-10">
          <h4 className="text-xl font-semibold mt-3">Expert Person</h4>
        </div>
        <div className="border-2  rounded-lg  p-10">
          <h4 className="text-xl font-semibold mt-3">Digital Machanie</h4>
        </div>
        <div className="border-2 bg-green-800 text-white rounded-lg  p-10">
          <h4 className="text-xl font-semibold mt-3">Satisfied</h4>
        </div>
        <div className="border-2  rounded-lg  p-10">
          <h4 className="text-xl font-semibold mt-3">Money Back</h4>
        </div>
        <div className="border-2  rounded-lg  p-10">
          <h4 className="text-xl font-semibold mt-3">
            Online <br />
            service
          </h4>
        </div>
        <div className="border-2  rounded-lg  p-10">
          <h4 className="text-xl font-semibold mt-3">
            Reasonable <br />
            Price
          </h4>
        </div>
      </div>
    </div>
  );
};

export default AboutServices;
