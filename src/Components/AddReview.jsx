// import React, { useState, useContext } from "react";
// import { AuthContext } from "../Components/AuthContext"; // লগইন ইউজার context
// import { useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router";

const AddReview = () => {
  const { user } = useContext(AuthContext); // Logged-in user
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    foodName: "",
    photo: "",
    restaurant: "",
    location: "",
    rating: "",
    reviewText: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      ...formData,
      userEmail: user.email, // logged-in user email
      date: new Date(), // current date
    };

    fetch("http://localhost:3000/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        data.insertedId &&
          (alert(" Review added successfully!"),
          setFormData({
            foodName: "",
            photo: "",
            restaurant: "",
            location: "",
            rating: "",
            reviewText: "",
          }),
          navigate("/my-reviews"));
      })
      .catch((err) => console.error("Error:", err));
  };

  return user ? (
    <div className="max-w-md mx-auto mt-8 bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Your Review</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="foodName"
          placeholder="Food Name"
          className="border p-2 rounded"
          value={formData.foodName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="photo"
          placeholder="Food Image URL"
          className="border p-2 rounded"
          value={formData.photo}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="restaurant"
          placeholder="Restaurant Name"
          className="border p-2 rounded"
          value={formData.restaurant}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="border p-2 rounded"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="rating"
          placeholder="Star Rating (1-5)"
          className="border p-2 rounded"
          min="1"
          max="5"
          value={formData.rating}
          onChange={handleChange}
          required
        />
        <textarea
          name="reviewText"
          placeholder="Write your review..."
          className="border p-2 rounded"
          rows="4"
          value={formData.reviewText}
          onChange={handleChange}
          required
        ></textarea>

        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Submit Review
        </button>
      </form>
    </div>
  ) : (
    navigate("/login")
  );
};

export default AddReview;
