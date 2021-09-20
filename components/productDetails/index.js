import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Button from "../button";

const ProductDetails = (props) => {

  return (
    <div className="flex flex-col items-center justify-center w-full lg:pt-10">
      <div className="background: linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 20%, rgb(38, 191, 163) 20%, rgb(38, 191, 163) 100%);">
        <div className="w-full overflow-hidden bg-white lg:p-8 max-w-screen-2xl lg:shadow-outer lg:rounded-3xl">
          <div className="flex w-full">
            <div className="relative w-full pr-1 lg:w-7/12 round-2xl">
              {/* insert image here */}
              <div className="">
                <Image
                  src={props.image}
                  width={400}
                  height={400}
                  alt={props.product_title}
                />
              </div>
            </div>
            <div className="flex-wrap items-center justify-center hidden w-5/12 lg:flex">
              {/* insert image here */}
              <div className="flex flex-col flex-wrap py-5 lg:py-6">
                <div className="w-full px-4 lg:px-0">
                  <h1 className="mb-2 text-2xl font-bold lg:text-base">
                    {props.product_title}
                  </h1>
                  <h2 className="text-base font-bold lg:text-2xl text-yellow-400">
                    P{props.regular_price}
                  </h2>
                  <p className="text-sm åleading-loose lg:leading-extra-loose lg:text-base">
                    {props.description}
                  </p>
                </div>
                <div className="mt-8">
                  <Button>Add to Cart</Button>
                  <Link href="/cart" passHref>
                    <p className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                      Order Now
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
