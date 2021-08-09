import React from "react";
import Link from "next/link";

const Button = (props) => {
  return (
    <button
      className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
