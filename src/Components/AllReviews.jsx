// import { useEffect, useState } from "react";
// import { CiStar } from "react-icons/ci";

import { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";

// const AllReviews = () => {
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3000/foods")
//       .then((res) => res.json())
//       .then((data) => {
//         const sortedData = data.sort(
//           (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//         );
//         setReviews(sortedData);
//       });
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-3xl font-bold mb-6 text-center">All Reviews</h2>
//       <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
//         {reviews.map((review) => (
//           <div
//             key={review._id}
//             className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300"
//           >
//             <img
//               src={review.photo}
//               alt={review.foodName}
//               className="w-full h-64 object-cover"
//             />
//             <div className="p-4 space-y-2 text-left">
//               <h3 className="font-semibold text-lg">{review.foodName}</h3>
//               <p className="text-gray-900 text-lg">{review.restaurantName}</p>
//               <p className="text-gray-900 text-lg">
//                 {review.restaurantLocation}
//               </p>
//               <p className="font-medium text-gray-800 mt-2">
//                 {review.reviewerName}
//               </p>
//               <div className="mt-3 flex items-center gap-2 text-yellow-500 font-semibold">
//                 <span className="text-base">{review.rating}</span>
//                 <CiStar className="text-2xl" />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllReviews;

// import { useEffect, useState } from "react";
// import { CiStar } from "react-icons/ci";
// import { Link } from "react-router-dom"; // <-- corrected import

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/foods") // corrected API route
      .then((res) => res.json())
      .then((data) => {
        // Sort descending by createdAt
        const sortedData = data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setReviews(sortedData);
      })
      .catch((err) => console.error("Failed to fetch reviews:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">All Reviews</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {reviews.map((review) => (
          <div
            key={review._id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={review.photo}
              alt={review.foodName}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 space-y-2 text-left">
              <h3 className="font-semibold text-lg">{review.foodName}</h3>
              <p className="text-gray-900 text-lg">{review.restaurantName}</p>
              <p className="text-gray-900 text-lg">
                {review.restaurantLocation}
              </p>
              <p className="font-medium text-gray-800 mt-2">
                {review.reviewerName}
              </p>
              <div className="mt-3 flex items-center gap-2 text-yellow-500 font-semibold">
                <span className="text-base">{review.rating}</span>
                <CiStar className="text-2xl" />
              </div>

              {/* View Details Button */}
              <Link to={`/latest-foods/${review._id}`}>
                <button className="mt-3 px-6 py-2 rounded-md bg-[#F6C85F] text-black font-semibold hover:brightness-90 transition">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
