import React from "react";

const Form = (props) => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">{props.children}</div>
    </section>
  );
};

export default Form;
