import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ReviewCard from "./ReviewCard";

const ReviewField = ({ service, user }) => {
  const handleAddReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const comment = form.review.value;
    const email = user?.email;
    const displayName = user?.displayName;
    const serviceId = service?._id;

    const review = {
      comment,
      email,
      serviceId,
      displayName,
      img: user?.photoURL,
    };

    // post to server
    fetch(`https://service-review-server-blush.vercel.app/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Review added successfully.");
        }
        // form.reset();
      })
      .catch((err) => toast.error(`${err.message}`));
  };

  return (
    <div>
      <div className="max-w-lg shadow-md">
        <form onSubmit={handleAddReview} className="w-full p-4">
          <div className="mb-2">
            <label htmlFor="comment" className="text-lg text-gray-600">
              Add Review
            </label>
            <textarea
              className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
              name="review"
              placeholder="The service is ...."
            ></textarea>
          </div>
          <button className="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded">
            Review
          </button>
        </form>
        <Toaster position="top-left" reverseOrder={false}></Toaster>
      </div>
    </div>
  );
};

export default ReviewField;
