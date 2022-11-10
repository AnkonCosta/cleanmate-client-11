import userEvent from "@testing-library/user-event";
import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Update = () => {
  const storedReview = useLoaderData();
  const { user } = useContext(AuthContext);
  //   console.log(review);
  const [review, setReview] = useState({});
  const handleUpdateReview = (e) => {
    e.preventDefault();
    console.log(review);

    fetch(`http://localhost:5000/reviews/${storedReview?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount !== 0) {
          toast.success("Review Updated Successfully.");
          console.log(data);
        }
      });
  };

  const handleInputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newReview = { ...review };
    newReview[field] = value;
    setReview(newReview);
  };
  return (
    <div className="max-w-screen-lg mx-auto bg-white">
      <Toaster></Toaster>
      <div className="max-w-lg shadow-md">
        <h1 className="text-xl font-semibold p-5">
          Hi, <span className="text-green-600">{user?.displayName}</span> here
          you can update your review.
        </h1>
        <form onSubmit={handleUpdateReview} className="w-full p-4">
          <label className="block mb-2">
            <span className="text-green-600 font-semibold">Update Review</span>
            <textarea
              onChange={handleInputChange}
              name="comment"
              defaultValue={storedReview?.comment}
              className="block w-full mt-1 border border-green-600 p-5 rounded"
              rows="7"
              cols="80"
            ></textarea>
          </label>
          <button className="px-3 py-2 text-sm text-blue-100 bg-green-700 rounded">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
