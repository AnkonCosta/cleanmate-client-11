import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import MyReviewCard from "./MyReviewCard";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  console.log(user.email);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      })
      .catch((err) => console.log(err));
  }, [user?.email]);

  return (
    <div className="max-w-screen-lg pb-10 bg-white mx-auto ">
      <div>
        <h1 className="font-bold font-serif p-5">/Reviews</h1>
      </div>
      {reviews.length !== 0 ? (
        <div className="grid md:grid-cols-2 gap-5 p-5">
          {reviews.map((review) => (
            <MyReviewCard key={review._id} review={review}></MyReviewCard>
          ))}
        </div>
      ) : (
        <>
          <div className="max-w-screen-lg mx-auto bg-white h-96 flex justify-center items-center">
            <h2 className="flex text-green-500 font-bold text-xl justify-center">
              No Reviews were added by you.
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default MyReviews;
