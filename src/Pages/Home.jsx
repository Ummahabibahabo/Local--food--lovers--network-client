import React from "react";
import HeroSlider from "../Components/HeroSlider";
import LatestFoods from "../Components/LatestFoods";
const latestFoodModalsPromise = fetch("http://localhost:3000/lates-foods").then(
  (res) => res.json()
);

const Home = () => {
  return (
    <div>
      <HeroSlider></HeroSlider>
      <LatestFoods
        latestFoodModalsPromise={latestFoodModalsPromise}
      ></LatestFoods>
    </div>
  );
};

export default Home;
