import { useEffect, useState } from "react";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Error loading reviews:", err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-green-600">
        All Reviews
      </h2>

      {reviews.length === 0 ? (
        <p className="text-center text-gray-500">No reviews yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="bg-white shadow-lg rounded-xl p-4 border hover:shadow-xl transition"
            >
              <img
                src={review.photo}
                alt={review.foodName}
                className="rounded-lg w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mt-3">{review.foodName}</h3>
              <p className="text-gray-600">
                {review.restaurantName} — {review.location}
              </p>
              <p className="mt-2 text-yellow-500 font-semibold">
                ⭐ {review.rating}/5
              </p>
              <p className="mt-2 text-gray-700">{review.reviewText}</p>
              <p className="text-sm text-gray-400 mt-3">
                Posted by: {review.userEmail}
              </p>
              <p className="text-xs text-gray-400">
                {new Date(review.date).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllReviews;
