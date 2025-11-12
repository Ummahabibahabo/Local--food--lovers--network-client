import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { toast } from "react-toastify";
import { FiSearch } from "react-icons/fi"; // import search icon

const AllReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [search, setSearch] = useState(""); // search input
  const [searchTimeout, setSearchTimeout] = useState(null);

  // Fetch reviews from server
  const fetchReviews = async (query = "") => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:3000/reviews?search=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      setReviews(data.sort((a, b) => new Date(b.date) - new Date(a.date)));
    } catch (error) {
      console.error("Failed to fetch reviews:", error);
      toast.error("Failed to fetch reviews!");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  useEffect(() => {
    if (!user) return;
    const fetchFavorites = async () => {
      const res = await fetch(
        `http://localhost:3000/favorites/user/${encodeURIComponent(user.email)}`
      );
      const data = await res.json();
      setFavoriteIds(data.map((fav) => fav.reviewId));
    };
    fetchFavorites();
  }, [user]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (searchTimeout) clearTimeout(searchTimeout);

    const timeout = setTimeout(() => {
      fetchReviews(value);
    }, 500);
    setSearchTimeout(timeout);
  };

  const handleAddFavorite = async (review) => {
    if (!user) return toast.warning("⚠️ Please login first!");
    if (favoriteIds.includes(review._id))
      return toast.warning("⚠️ Already in favorites!");

    const favorite = {
      userEmail: user.email,
      reviewId: review._id,
      foodName: review.foodName,
      restaurantName: review.restaurantName,
      location: review.location,
      rating: review.rating,
      photo: review.photo,
      date: new Date().toISOString(),
    };

    try {
      const res = await fetch("http://localhost:3000/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(favorite),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("✅ Added to favorites!");
        setFavoriteIds((prev) => [...prev, review._id]);
      } else {
        toast.warning(data.message || "Already in favorites");
      }
    } catch (error) {
      console.error("Failed to add favorite:", error);
      toast.error("Failed to add favorite!");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading reviews...</p>;

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      {/* Search Bar with icon */}
      <div className="mb-6 flex justify-center">
        <div className="relative w-full md:w-1/2">
          <FiSearch
            className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search by food name..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">
            No reviews found.
          </p>
        ) : (
          reviews.map((review) => (
            <div
              key={review._id}
              className="border rounded-xl p-4 flex flex-col bg-white shadow hover:shadow-lg transition"
            >
              <img
                src={review.photo}
                alt={review.foodName}
                className="h-48 w-full object-cover mb-3 rounded"
              />
              <h3 className="font-bold text-lg">{review.foodName}</h3>
              <p>{review.restaurantName}</p>
              <p className="text-gray-600">{review.location}</p>
              <p className="text-yellow-500 font-medium">⭐ {review.rating}</p>
              <p className="text-gray-500 text-sm">
                {new Date(review.date).toLocaleString()}
              </p>
              <button
                onClick={() => handleAddFavorite(review)}
                disabled={favoriteIds.includes(review._id)}
                className={`mt-3 px-4 py-2 rounded-md font-semibold transition ${
                  favoriteIds.includes(review._id)
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#F6C85F] hover:brightness-95 text-black"
                }`}
              >
                {favoriteIds.includes(review._id)
                  ? " Added"
                  : " Add to Favorites"}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllReviews;
