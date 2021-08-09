import React, { useState, useEffect } from "react";
import Link from "next/link";

const MainMenu = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Menu",
    url: "/menu",
  },
  {
    name: "Categories",
    url: "/categories",
  },
  {
    name: "Promos",
    url: "/promos",
  },
];

const Navbar = ({ transaparent, nav }) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
  }, []);

  return (
    <div
      className={`${transaparent ? "" : "bg-white"} ${
        nav && "bg-white shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div onClick={closeMobileMenu}>
              <a
                href="#"
                className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
              >
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M18 8.5H19C20.0609 8.5 21.0783 8.92143 21.8284 9.67157C22.5786 10.4217 23 11.4391 23 12.5C23 13.5609 22.5786 14.5783 21.8284 15.3284C21.0783 16.0786 20.0609 16.5 19 16.5H18"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 8.5H18V17.5C18 18.5609 17.5786 19.5783 16.8284 20.3284C16.0783 21.0786 15.0609 21.5 14 21.5H6C4.93913 21.5 3.92172 21.0786 3.17157 20.3284C2.42143 19.5783 2 18.5609 2 17.5V8.5Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 1.5V4.5"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 1.5V4.5"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 1.5V4.5"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span className="font-bold">Earp</span>
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              {MainMenu.map((value, key) => {
                return (
                  <Link key={key} href={value.url} passHref>
                    <div
                      className="w-full px-10 py-5 cursor-pointer animate--buton hover:text-yellow-500 transition duration-300"
                      onClick={closeMobileMenu}
                    >
                      {value?.name}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <a href="" className="py-5 px-3">
              Login
            </a>
            <a
              href=""
              className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
            >
              Signup
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <div className="mobile-menu hidden md:hidden" onClick={handleClick}> */}
      <div className="hidden md:hidden" onClick={handleClick}>
        <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-200" passHref>
          Features
        </Link>
        <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-200" passHref>
          Pricing
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
