import React from "react";
import Link from "next/link";
import Image from "next/image";

import Banner from "../../../public/main_banner.png";

const MainBanner = () => {
  return (
    <section>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Before they sold out
            <div className="hidden lg:inline-block">tacos are yummy tacos</div>
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            sunt, nesciunt facilis iste accusamus autem numquam sint tempore
            ipsam a sequi eos. Cum assumenda reiciendis, quidem beatae tempore
            quibusdam. Itaque.
          </p>
          <div className="flex justify-center">
            <Link href="/signin" passHref>
              <p className="inline-flex text-white bg-yellow-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Sign-In
              </p>
            </Link>
            <Link href="/signin" passHref>
              <p className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                Shop Now
              </p>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src={Banner}
            height={300}
            width={550}
          />
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
