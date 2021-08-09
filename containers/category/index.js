import React from "react";
import Card from "./card";

import drink from '../../public/drink.png'
import food from '../../public/food.png'
import dessert from '../../public/dessert.png'

const data = [
  {
    id: "f1",
    image: food,
    caption: "Food",
    description: "All variety of Mexican Food Available Today",
  },
  {
    id: "f2",
    image: drink,
    caption: "Drinks",
    description: "With unlimited refills for the first hour",
  },
  {
    id: "f3",
    image: dessert,
    caption: "Desserts",
    description: "Served with a special Mexican sauce",
  },
];

const Category = () => {
  return (
    <div className="flex flex-col h-full py-12 bg-white lg:py-20 md:py-16">
      <div className="z-10 px-8 lg:px-24 md:px-16">
        <p className="py-5 text-4xl font-bold text-center font-fredoka md:text-left">
          The best Mexican Restaurant
        </p>
        <p className="text-center md:text-left">
          Buy from this exclusive restaurant today!
        </p>
      </div>
      <div className="relative flex flex-wrap items-center justify-center px-8 lg:px-24 md:px-16">
        <div
          className="absolute w-full bg-whitesmoke"
          style={{ height: "50%" }}
        />
        {data.map((value, key) => {
          return (
            <Card
              key={value.id}
              id={value.id}
              image={value.image}
              caption={value.caption}
              description={value.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Category;