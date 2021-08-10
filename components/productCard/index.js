import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProductCard = (props) => {
  return (
    <Link
      key={props.id}
      href={`/menu-item/${encodeURIComponent(props.slug)}`}
      passHref
    >
      <div className="false shadow-lg cursor-pointer bg-gainsboro rounded-2xl animate--button m-6">
        <div className="relative w-full h-36 lg:h-48">
          <div className="object-cover w-full h-full rounded-t-2xl relative overflow-hidden">
            <Image src={props.image} width={300} height={300} alt={props.title} />
          </div>
          <div className="bg-white absolute bottom-0 left-0 px-4 py-1 mb-2 rounded-r-lg ">
            <p className="text-yellow-400 text-xs lg:text-sm font-bold">
              {props.category}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center p-1 bg-white lg:p-2 rounded-b-2xl">
          <div className="flex flex-col w-full">
            <div className="py-0 lg:py-1">
              <p className="text-sm font-bold text-gray line-clamp-1">
                {props.title}
              </p>
            </div>
            <div className="py-0 lg:py-1">
              <p className="text-sm text-gray line-clamp-1">
                {props.regular_price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
