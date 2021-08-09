import React, { useState, useEffect } from "react";
import Navbar from './navbar/index'

const Header = ({ transparent }) => {
  const [nav, setNav] = useState();

  const listenScrollEvent = () => {
    if (window.scrollY < 73) {
      return setNav(false);
    } else if (window.scrollY > 73) {
      return setNav(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      return window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    // <nav className="bg-gray-100"></nav>
    <nav className={`${transparent ? "" : "h-24"} ${nav && "h-24"} `}>
      <Navbar transparent={transparent} nav={nav} />
    </nav>
  );
};

export default Header;
