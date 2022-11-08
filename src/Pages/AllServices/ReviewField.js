import React from "react";

const ReviewField = () => {
  return (
    <div>
      <div className="max-w-lg shadow-md">
        <form onSubmit={(e) => e.preventDefault()} className="w-full p-4">
          <div className="mb-2">
            <label for="comment" className="text-lg text-gray-600">
              Add Review
            </label>
            <textarea
              className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
              name="comment"
              placeholder="The service is ...."
            ></textarea>
          </div>
          <button className="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded">
            Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewField;
