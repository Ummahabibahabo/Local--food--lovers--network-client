import React from "react";
import HeroSlider from "../Components/HeroSlider";
import LatestFoods from "../Components/LatestFoods";
import Vegetarian from "../Components/Vegetarian";
import LocalFood from "../Components/LocalFood";
const latestFoodModalsPromise = fetch(
  "https://local-food-lovers-network-foodie-se.vercel.app/latest-foods"
).then((res) => res.json());

const Home = () => {
  return (
    <div>
      <HeroSlider></HeroSlider>
      <LatestFoods
        latestFoodModalsPromise={latestFoodModalsPromise}
      ></LatestFoods>
      <Vegetarian></Vegetarian>
      <LocalFood></LocalFood>
    </div>
  );
};

export default Home;
