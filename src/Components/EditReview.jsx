import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate, useParams } from "react-router";

const EditReview = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    foodName: "",
    photo: "",
    restaurantName: "",
    location: "",
    rating: "",
    reviewText: "",
  });

  const [loading, setLoading] = useState(false);

  // Fetch review data on mount
  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    fetch(
      `https://local-food-lovers-network-foodie-se.vercel.app/reviews/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setForm({
          foodName: data.foodName || "",
          photo: data.photo || "",
          restaurantName: data.restaurantName || "",
          location: data.location || "",
          rating: data.rating?.toString() || "",
          reviewText: data.reviewText || "",
        });
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [user, navigate, id]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.rating) {
      alert("Please enter a rating");
      return;
    }

    setLoading(true);

    fetch(
      `https://local-food-lovers-network-foodie-se.vercel.app/reviews/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, rating: parseFloat(form.rating) }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        alert(data.message || "Review updated successfully!");
        navigate("/my-reviews");
      })
      .catch((err) => {
        console.error("Update error:", err);
        alert("Error updating review");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Edit Review</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {["foodName", "photo", "restaurantName", "location"].map((field) => (
          <input
            key={field}
            name={field}
            placeholder={field.replace(/([A-Z])/g, " $1")}
            value={form[field]}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
        ))}

        <input
          name="rating"
          type="number"
          placeholder="Rating (1-5)"
          min="1"
          max="5"
          step="0.1"
          value={form.rating}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <textarea
          name="reviewText"
          placeholder="Write your review..."
          value={form.reviewText}
          onChange={handleChange}
          rows="5"
          className="border p-2 rounded"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-60"
        >
          {loading ? "Updating..." : "Update Review"}
        </button>
      </form>
    </div>
  );
};

export default EditReview;
