import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    foodName: "",
    photo: "",
    restaurantName: "",
    location: "",
    rating: "",
    reviewText: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.rating) {
      toast.error("Please enter a rating");
      return;
    }
    if (!user?.token) {
      toast.error("You must be logged in to add a review");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        "https://local-food-lovers-network-foodie-se.vercel.app/reviews",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({
            ...form,
            rating: parseFloat(form.rating),
            userEmail: user.email, // optional
          }),
        }
      );

      const data = await res.json();

      if (data.acknowledged || data.success) {
        toast.success(data.message || "Review added successfully!");
        navigate("/my-reviews");
      } else {
        toast.error(data.message || "Failed to add review");
      }
    } catch (err) {
      console.error("Add review error:", err);
      toast.error("Error adding review");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Review</h2>
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
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700 disabled:opacity-60"
        >
          {loading ? "Adding..." : "Add Review"}
        </button>
      </form>
    </div>
  );
};

export default AddReview;
