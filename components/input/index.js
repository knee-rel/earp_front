import React from "react";

const Input = (props) => {
  <div className="">
    <label htmlFor={props.input.id}>{props.label}</label>
    <input {...props.input} />
  </div>;
};

export default Input;
