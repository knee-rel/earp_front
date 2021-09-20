import React, { useState } from "react";
import Accordion from "../../components/accordion";
import Button from "../../components/button";

const FAQS_DATA = [
  {
    id: 1,
    name: "t gravida et lorem non venenatis. Maecenas gravida dolor sollicitudin consectetur venenatis. Etiam nec sodales elit. Phasellus facilisis purus eget felis pretium malesuada. In vitae libero fringilla mauris gravida eleifend. Cras viverra aliquet lacus vitae blandit.",
  },
];

const HelpCenterPage = () => {
  const [showFaq, setShowFaq] = useState(true);
  const [showFaqTwo, setShowFaqTwo] = useState(true);

  const toggleShowHandler = () => {
    setShowFaq((curstate) => !curstate);
  };

  const toggleShowHandlerTwo = () => {
    setShowFaqTwo((curstate) => !curstate);
  };

  const faqsList = (
    <ul>
      {FAQS_DATA.map((faq) => (
        <Accordion key={faq.id} name={faq.name} />
      ))}
    </ul>
  );

  return (
    <div className="flex items-center justify-center flex-col shadow-lg w-full md:w-1/4 p-4">
      <div className="flex items-center justify-center flex-col ">
        <h1>Lorem ipsum dolor sit amet?</h1>
        <Button onClick={toggleShowHandler}>{showFaq ? "Hide" : "Show"}</Button>
        {showFaq && faqsList}
      </div>
      <div className="flex items-center justify-center flex-col ">
        <h1>Lorem ipsum dolor sit amet?</h1>
        <Button onClick={toggleShowHandlerTwo}>{showFaqTwo ? "Hide" : "Show"}</Button>
        {showFaq && faqsList}
      </div>
    </div>
  );
};

export default HelpCenterPage;
