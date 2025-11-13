import { useEffect, useState } from "react";
import { useParams } from "react-router";

const FoodDetails = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);

  useEffect(() => {
    fetch(
      `https://local-food-lovers-network-foodie-se.vercel.app/latest-foods/${id}`
    )
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, [id]);

  if (!food) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <img
        src={food.photo}
        alt={food.foodName}
        className="w-full h-90 object-cover rounded-lg"
      />
      <h2 className="text-2xl font-bold mt-4">{food.foodName}</h2>
      <p className="text-gray-700 mt-2">
        <strong>Restaurant:</strong> {food.restaurantName}
      </p>
      <p className="text-gray-700">
        <strong>Location:</strong> {food.restaurantLocation}
      </p>
      <p className="text-gray-700">
        <strong>Reviewer:</strong> {food.reviewerName}
      </p>
      <p className="text-yellow-600 font-semibold mt-2">
        ⭐ Rating: {food.rating}
      </p>
      <p className="mt-4 text-gray-800">{food.description}</p>
    </div>
  );
};

export default FoodDetails;
