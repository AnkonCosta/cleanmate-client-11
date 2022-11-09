import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const ReviewCard = ({ service }) => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);
  // load reviews data
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?serviceId=${service?._id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [service?._id]);

  return (
    <div className="">
      {reviews.length !== 0 ? (
        <>
          {reviews.map((review) => (
            <div
              key={review._id}
              className="flex justify-center relative top-1/3"
            >
              {/* <!-- This is an example component --> */}
              <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
                <div className="relative flex gap-4">
                  <img
                    src={review?.img}
                    className="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
                    alt=""
                    loading="lazy"
                  />

                  <div className="flex flex-col w-full">
                    <div className="flex flex-row justify-between">
                      <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">
                        {review.displayName}
                      </p>
                      <a className="text-gray-500 text-xl" href="# ">
                        <i className="fa-solid fa-trash"></i>
                      </a>
                    </div>
                    <p className="text-gray-400 text-sm">
                      20 April 2022, at 14:88 PM
                    </p>
                  </div>
                </div>
                <p className="-mt-4 text-gray-500">{review.comment}</p>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          <div className="max-w-screen-lg mx-auto bg-white h-96 flex justify-center items-center">
            <h2 className="flex text-green-500 font-bold text-xl justify-center">
              This service is not reviewed yet.
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default ReviewCard;
