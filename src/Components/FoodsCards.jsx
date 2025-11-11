import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";
const FoodsCards = ({ food }) => {
  const {
    _id,
    photo,
    foodName,
    restaurantName,
    restaurantLocation,
    reviewerName,
    rating,
  } = food;

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300">
      <img src={photo} alt={foodName} className="w-full h-70 object-cover" />

      <div className="p-4 space-y-2 text-left">
        <h3 className="font-semibold text-lg">{foodName}</h3>
        <p className="text-gray-900 text-lg">{restaurantName}</p>
        <p className="text-gray-900 text-lg">{restaurantLocation}</p>

        <p className="font-medium text-gray-800 mt-2">{reviewerName}</p>

        <div className="mt-3 flex flex-col items-start gap-2">
          <div className="flex items-center gap-1 text-yellow-500 font-semibold">
            <span className="text-base">{rating}</span>
            <CiStar className="text-2xl" />
          </div>
          <Link to={`/latest-foods/${_id}`}>
            <button className="px-6 py-2 rounded-md bg-[#F6C85F] text-black font-semibold hover:brightness-90 transition">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodsCards;
