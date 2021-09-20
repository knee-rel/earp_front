import React from "react";
import Instructions from "./instructions";
import MainBanner from "./main_banner";
import Promos from "./promos";

const Home = () => {
  return (
    <div>
      <MainBanner />
      <Promos />
      <Instructions />
    </div>
  );
};

export default Home;
