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
              desc: "A refreshing salad made with crisp lettuce, fresh cucumber, cherry tomatoes, green bell peppers, and a light olive oil and lemon dressing. Perfect for a healthy start to your day or as a light meal.",
            },
            {
              img: "https://i.ibb.co.com/DSczKTW/paneer-imag.jpg",
              title: "Paneer Tikka",
              desc: "Soft cubes of paneer marinated in a blend of yogurt and aromatic Indian spices, then grilled to perfection. Served with a sprinkle of fresh coriander and a wedge of lemon for an authentic taste.",
            },
            {
              img: "https://i.ibb.co.com/XrYJYWcX/veggie-wrap.jpg",
              title: "Veggie Wrap",
              desc: "A healthy and delicious wrap filled with fresh spinach, bell peppers, carrots, cucumber, and hummus. Lightly seasoned and rolled in a whole wheat tortilla, perfect for a quick lunch or snack.",
            },
            {
              img: "https://i.ibb.co.com/B2433BSk/veg-pasta.jpg",
              title: "Veggie Pasta",
              desc: "Al dente penne pasta tossed with sautéed zucchini, mushrooms, cherry tomatoes, and bell peppers, coated in a light garlic and olive oil sauce. Garnished with fresh basil and a sprinkle of Parmesan.",
            },
            {
              img: "https://i.ibb.co.com/b5ZNK9Tc/green-muxed-salad.jpg",
              title: "Mixed Garden Salad",
              desc: "A vibrant mix of fresh garden vegetables including lettuce, spinach, carrots, radishes, and cherry tomatoes, topped with crunchy nuts and a tangy vinaigrette. A wholesome salad for any time of the day.",
            },
            {
              img: "https://i.ibb.co.com/7JGHzGGT/veg-soup.jpg",
              title: "Veggie Soup",
              desc: "A warm, comforting soup made with a medley of seasonal vegetables, simmered with herbs and spices. Perfect to enjoy as a starter or a light meal on a cozy evening.",
            },
            {
              img: "https://i.ibb.co.com/GQqV8hRy/veg-roast.jpg",
              title: "Roasted Vegetables",
              desc: "Fresh vegetables such as carrots, zucchini, bell peppers, and broccoli tossed in olive oil, garlic, and herbs, then oven-roasted to bring out natural flavors. Crispy on the edges and tender inside.",
            },
            {
              img: "https://i.ibb.co.com/MkYMW1qh/veg-Burger.jpg",
              title: "Veggie Burger",
              desc: "A hearty burger made with a flavorful vegetable patty, served with fresh lettuce, tomatoes, onions, and a special sauce, all sandwiched in a toasted bun. A satisfying vegetarian alternative to a classic burger.",
            },
            {
              img: "https://i.ibb.co.com/RTf4yQHL/veg-Fry.jpg",
              title: "Vegetable Stir Fry",
              desc: "Quick and colorful stir-fry with broccoli, bell peppers, carrots, and snow peas, tossed in a light soy-ginger sauce. Healthy, fast, and packed with flavor, perfect with rice or noodles.",
            },
            {
              img: "https://i.ibb.co.com/mVTryrbn/veg-sandwich.jpg",
              title: "Veg Sandwich",
              desc: "Layers of fresh cucumber, tomatoes, lettuce, and cheese stacked between slices of whole wheat bread, lightly toasted and spread with a creamy herb dressing. A wholesome and easy-to-eat sandwich.",
            },
            {
              img: "https://i.ibb.co.com/PBF5wmm/veg-curry.jpg",
              title: "Veg Curry",
              desc: "A rich and hearty curry made with a mix of seasonal vegetables simmered in a tomato and coconut-based sauce, seasoned with traditional spices. Best served with rice or flatbread for a complete meal.",
            },
            {
              img: "https://i.ibb.co.com/4ZNXwd2G/veg-pizza.jpg",
              title: "Veggie Pizza",
              desc: "A classic pizza topped with tomato sauce, mozzarella cheese, and a colorful assortment of fresh vegetables including bell peppers, mushrooms, onions, and olives. Baked to perfection with a crispy crust.",
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
