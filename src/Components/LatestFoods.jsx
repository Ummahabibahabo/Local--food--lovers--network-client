import React, { use } from "react";
import FoodsCards from "./FoodsCards";
import { Link } from "react-router";

const LatestFoods = ({ latestFoodModalsPromise }) => {
  const foods = use(latestFoodModalsPromise);
  console.log(foods);

  return (
    <div className=" text-center my-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Featured Reviews</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-7">
        {foods.map((food) => (
          <FoodsCards key={food._id} food={food}></FoodsCards>
        ))}
      </div>

      <div className="mt-8">
        <Link
          to={"/allReviews"}
          className="px-6 py-2 rounded-md bg-[#F6C85F] text-black font-semibold hover:brightness-90 transition"
        >
          {" "}
          Show All
        </Link>
      </div>
    </div>
  );
};

export default LatestFoods;
