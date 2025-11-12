import React from "react";
import HeroSlider from "../Components/HeroSlider";
import LatestFoods from "../Components/LatestFoods";
import Vegetarian from "../Components/Vegetarian";
const latestFoodModalsPromise = fetch(
  "http://localhost:3000/latest-foods"
).then((res) => res.json());

const Home = () => {
  return (
    <div>
      <HeroSlider></HeroSlider>
      <LatestFoods
        latestFoodModalsPromise={latestFoodModalsPromise}
      ></LatestFoods>
      <Vegetarian></Vegetarian>
    </div>
  );
};

export default Home;
