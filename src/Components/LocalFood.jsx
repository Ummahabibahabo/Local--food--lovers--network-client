import React from "react";

const LocalFood = () => {
  return (
    <div className="my-16 bg-gradient-to-b from-[#F9FBF9] to-[#E6F2EB] py-12">
      <section className="text-center px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-[#1E5037]">
          Why Choose Local Food?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              image: "https://i.ibb.co.com/BHsC3qGZ/healthy.png",
              title: "Healthy",
              text: "Fresh and nutrient-rich meals.",
            },
            {
              image: "https://i.ibb.co.com/0pK2LcLj/affordable.png",
              title: "Affordable",
              text: "Save money by buying local.",
            },
            {
              image: "https://i.ibb.co.com/3y3TdH36/support.jpg",
              title: "Support Farmers",
              text: "Empower local producers.",
            },
            {
              image: "https://i.ibb.co.com/qYVkCbb5/affordable-image.jpg",
              title: "Eco-Friendly",
              text: "Reduce food transport waste.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              {/* <div className="text-5xl mb-3">{item.image}</div> */}
              <img src={item.image} />
              <h3 className="text-xl font-semibold text-[#1E5037] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LocalFood;
