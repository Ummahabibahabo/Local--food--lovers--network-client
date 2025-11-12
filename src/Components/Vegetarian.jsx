import React from "react";

const Vegetarian = () => {
  return (
    <div className="my-16 bg-gradient-to-b from-[#F9FBF9] to-[#E6F2EB] py-12">
      {/* Section 1: Popular Vegetarian Dishes */}
      <section className="text-center mb-20">
        <h2 className="text-4xl font-bold mb-10 text-[#1E5037]">
          Popular Vegetarian Dishes
        </h2>
        <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
          {[
            {
              img: "https://i.ibb.co.com/7F8H0Y2/green-salad-image.jpg",
              title: "Green Delight Salad",
              desc: "Fresh vegetables with olive oil and herbs.",
            },
            {
              img: "https://i.ibb.co.com/DSczKTW/paneer-imag.jpg",
              title: "Paneer Tikka",
              desc: "Soft-paneer cubes grilled with spices.",
            },
            {
              img: "https://i.ibb.co.com/XrYJYWcX/veggie-wrap.jpg",
              title: "Veggie Wrap",
              desc: "Healthy wrap filled with fresh veggies.",
            },
          ].map((dish, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <img
                src={dish.img}
                alt={dish.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-[#1E5037] mb-3">
                  {dish.title}
                </h3>
                <p className="text-gray-600 mb-5">{dish.desc}</p>
                <button className="bg-[#1E5037] text-white px-5 py-2 rounded-xl hover:bg-[#2E6B52] transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Vegetarian;
