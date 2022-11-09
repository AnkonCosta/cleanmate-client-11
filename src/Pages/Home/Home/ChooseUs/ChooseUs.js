import React from "react";
import kid from "../../../../assets/pictures/kid.jpg";

const ChooseUs = () => {
  return (
    <div className=" bg-white p-5 ">
      <h1 className="font-bold text-2xl text-center">WHY CHOOSE US?</h1>
      <p className="text-center mb-10 mt-6">
        Cleanmate operates in Ottawa and provides a variety of cleaning <br />
        services. Choose us because of our reputation for excellence
      </p>
      <div className="grid md:grid-cols-3 justify-evenly items-center">
        <div>
          <div className="md:text-end  my-10 mx-5">
            <h1 className="text-xl font-bold mb-3">SPARKLING CLEAN</h1>
            <p className="font-serif">
              We keep your home sparkling clean and germ free. Our disinfecting
              process kills 99% of common bacteria and viruses.
            </p>
          </div>
          <div className="md:text-end  my-10 mx-5">
            <h1 className="text-xl font-bold mb-3">LEADING TECHNOLOGIES</h1>
            <p className="font-serif">
              We use safe hospital-grade disinfectants, HEPA filtrations and
              microfiber cleaning cloths to reduce cross contamination.
            </p>
          </div>
        </div>
        <div>
          <img className="rounded-full" src={kid} alt="" />
        </div>
        <div>
          <div className="text-start my-10 mx-5">
            <h1 className="text-xl font-bold mb-3">SPARKLING CLEAN</h1>
            <p className="font-serif">
              We keep your home sparkling clean and germ free. Our disinfecting
              process kills 99% of common bacteria and viruses.
            </p>
          </div>
          <div className="text-start my-10 mx-5">
            <h1 className="text-xl font-bold mb-3">INSURED AND BONDED</h1>
            <p className="font-serif">
              Our cleaners are insured and bonded so no need to worry about your
              apartment, office or garden.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
