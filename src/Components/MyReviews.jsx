import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    fetch(`http://localhost:3000/reviews/user/${user.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Error loading user reviews:", err));
  }, [user, navigate]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete?")) return;

    try {
      const res = await fetch(`http://localhost:3000/reviews/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (data.success) {
        setReviews(reviews.filter((r) => r._id !== id));
        toast.success(data.message || "Review deleted successfully!");
      } else {
        toast.error(data.message || "Delete failed.");
      }
    } catch (err) {
      console.error("Delete error:", err);
      toast.error("Error deleting review");
    }
  };

  return (
    <div className="my-16 bg-gradient-to-b from-[#F9FBF9] to-[#E6F2EB] py-12">
      <div className="max-w-5xl mx-auto mt-10">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-600">
          My Reviews
        </h2>
        {reviews.length === 0 ? (
          <p className="text-center text-gray-500">
            You haven’t added any reviews yet.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left">
              <thead className="bg-green-100">
                <tr>
                  <th className="p-2 border">Photo</th>
                  <th className="p-2 border">Food Name</th>
                  <th className="p-2 border">Restaurant Name</th>
                  <th className="p-2 border">Date</th>
                  <th className="p-2 border">Time</th>
                  <th className="p-2 border text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review) => {
                  const dateObj = new Date(review.date); // dateObj প্রতিটি row এর জন্য
                  return (
                    <tr key={review._id} className="hover:bg-gray-50">
                      <td className="p-2 border">
                        <img
                          src={review.photo}
                          alt={review.foodName}
                          className="w-16 h-16 rounded object-cover"
                        />
                      </td>
                      <td className="p-2 border">{review.foodName}</td>
                      <td className="p-2 border">{review.restaurantName}</td>
                      <td className="p-2 border">
                        {dateObj.toLocaleDateString()}
                      </td>
                      <td className="p-2 border">
                        {dateObj.toLocaleTimeString()}
                      </td>
                      <td className="p-2 border text-center space-x-2">
                        <button
                          onClick={() => navigate(`/edit-review/${review._id}`)}
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(review._id)}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyReviews;
