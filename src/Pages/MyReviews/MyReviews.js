import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import MyReviewCard from "./MyReviewCard";

const MyReviews = () => {
  document.title = " My Reviews";
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("serviceToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data);
      });
  }, [user?.email, logOut]);

  // delete
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure want to cancel this order?");
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount === 1) {
            toast.success("Deleted Successfully.");
            const remaining = reviews.filter((rvw) => rvw._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  return (
    <div className="max-w-screen-lg pb-10 bg-white mx-auto ">
      <div>
        <h1 className="font-bold font-serif p-5">/Reviews</h1>
      </div>
      {reviews?.length !== 0 ? (
        <div className="grid md:grid-cols-2 gap-5 p-5">
          {reviews.map((review) => (
            <MyReviewCard
              key={review._id}
              handleDelete={handleDelete}
              review={review}
            ></MyReviewCard>
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
      <Toaster />
    </div>
  );
};

export default MyReviews;
