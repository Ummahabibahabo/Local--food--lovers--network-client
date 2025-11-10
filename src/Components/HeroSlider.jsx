import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import food1 from "../assets/food1.jpeg";
import food2 from "../assets/food2.jpeg";
import food3 from "../assets/food3.jpeg";
import food4 from "../assets/food4.jpeg";
import food5 from "../assets/food5.jpeg";

const HeroSlider = () => {
  const slides = [
    {
      img: food1,
      title: "Discover the Best Food",
      text: "Explore delicious food from all around the world",
    },
    {
      img: food2,
      title: "Taste the World",
      text: "Find amazing dishes near you",
    },
    { img: food3, title: "Fresh & Healthy", text: "Eat well, live well" },
    {
      img: food4,
      title: "Top Rated Restaurants",
      text: "Handpicked by food lovers",
    },
    {
      img: food5,
      title: "Delicious Starts Here",
      text: "Your food adventure awaits",
    },
  ];

  return (
    <div className="bg-[#123D3A] text-white relative">
      <Swiper
        modules={[Navigation, Pagination]}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        allowTouchMove={true}
        className="h-[500px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 h-full bg-[#123D3A]">
              {/* Text Section */}
              <div className="text-center md:text-left max-w-lg space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold">
                  {slide.title}
                </h1>
                <p className="text-gray-200">{slide.text}</p>
                <button className="px-4 py-2 rounded-md bg-[#F6C85F] text-black font-medium hover:brightness-95 transition">
                  Get Started
                </button>
              </div>

              {/* Image Section */}
              <div className="mt-6 md:mt-0">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-[320px] md:w-[420px] rounded-lg shadow-lg border border-green-500"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
