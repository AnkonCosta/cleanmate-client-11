import React, { useContext } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const AddServices = () => {
  const { user } = useContext(AuthContext);
  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const img = form.photoURL.value;
    const price = form.price.value;
    const more = form.more.value;
    console.log(title, description, img, price, more);
    const service = {
      description,
      img,
      title,
      more,
      price,
    };

    fetch(`http://localhost:5000/services`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire("Congratulations!", "User created successfully.", "success");
        form.reset();
      })
      .catch((err) => toast.error(`${err}`));
  };

  return (
    <div className="bg-white max-w-screen-lg mx-auto p-5">
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Service Details
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Use this fields to add your services .
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleAddService}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Service Name
                      </label>
                      <input
                        type="text"
                        name="title"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full  sm:text-sm border border-green-600 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Price
                      </label>
                      <input
                        type="text"
                        name="price"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-green-600 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <input
                        type="email"
                        defaultValue={user?.email}
                        readOnly
                        name="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-green-600 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        for="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        PhotoURL
                      </label>
                      <input
                        type="text"
                        name="photoURL"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-green-600 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-6 my-5">
                    <div className="col-span-6 sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Description
                      </label>
                      <textarea
                        name="description"
                        className="textarea border border-green-600 textarea-bordered"
                        placeholder="Description"
                      ></textarea>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">
                        More Description
                      </label>
                      <textarea
                        name="more"
                        className="textarea border border-green-600 textarea-bordered"
                        placeholder="More"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
