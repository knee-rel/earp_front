import React from "react";
import CTA from "./cta";
import Instructions from "./instructions";
import MainBanner from "./main_banner";
import Promos from "./promos";

const Home = () => {
  return (
    <div>
      <MainBanner />
      <Promos />
      <Instructions />
      <CTA />
    </div>
  );
};

export default Home;
