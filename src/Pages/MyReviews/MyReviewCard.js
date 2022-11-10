import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UpdateModal from "./UpdateModal";

const MyReviewCard = ({ review, handleDelete }) => {
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${review.serviceId}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, [review.serviceId]);
  return (
    <div>
      <div>
        <div className="">
          <div className="flex justify-center relative top-1/3">
            {/* <!-- This is an example component --> */}
            <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
              <div className="relative flex gap-4">
                <img
                  src={service.img}
                  className="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
                  alt=""
                  loading="lazy"
                />
                <div className="flex flex-col w-full">
                  <div className="flex flex-row justify-between">
                    <p className="relative text-xl whitespace-nowrap truncate overflow-hidden"></p>
                    <a className="text-gray-500 text-xl" href=" #">
                      <i className="fa-solid fa-trash"></i>
                    </a>
                  </div>
                  <p className="font-semibold text-sm">{service?.title}</p>
                </div>
              </div>
              <p className="-mt-4 text-gray-500">{review?.comment}</p>
              <div className="card-actions items-center justify-end">
                <Link to={`/update/${review._id}`}>
                  <div className="badge badge-outline">Edit</div>
                </Link>
                {/* <UpdateModal onClick={`/reviews/${review._id}`}></UpdateModal> */}
                <div
                  onClick={() => handleDelete(review._id)}
                  className="badge badge-outline"
                >
                  Delete
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviewCard;
