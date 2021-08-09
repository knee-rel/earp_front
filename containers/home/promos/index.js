import React from "react";

const InfoBox = [
  {
    name: "Best Food Ever",
    moreText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ex, hic odio eos repudiandae dolor beatae magni enim at cupiditate omnis incidunt consequatur possimus? Commodi, obcaecati fuga. Facilis, vel libero!",
  },
  {
    name: "Irresistible",
    moreText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ex, hic odio eos repudiandae dolor beatae magni enim at cupiditate omnis incidunt consequatur possimus? Commodi, obcaecati fuga. Facilis, vel libero!",
  },
  {
    name: "Scrumptuous",
    moreText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ex, hic odio eos repudiandae dolor beatae magni enim at cupiditate omnis incidunt consequatur possimus? Commodi, obcaecati fuga. Facilis, vel libero!",
  },
];

const Promos = () => {
  return (
    <section className="text-gray-700 body-font border-t border-gray-200">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-yellow-400 tracking-widest font-medium title-font mb-1">
            EARP
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            The Best Mexican Food in Town Brought to the Philippines
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {InfoBox.map((value, key) => {
            <div className="p-4 md:w-1/3" key={key}>
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-400 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    {value.name}
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">{value.moreText}</p>
                  <a className="mt-3 text-yellow-400 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Promos;
