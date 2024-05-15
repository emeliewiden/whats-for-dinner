import React, { useState } from 'react';

function BreakfastSuggestion() {
  const breakfasts = [
    "Laxpasta",
    "Thaiwok",
    "Spagetti och köttfärsås",
    "Korvstrogonoff",
    "Halloumilasagne",
    "Kebab och pommes/ris",
    "Wrap med kyckling",
    "Fiskgratäng",
    "Köttbullar och pasta/potatismos",
    "Kyckling i ugn",

  ];

  const [randomBreakfast, setRandomBreakfast] = useState('');

  const getRandomBreakfast = () => {
    const breakfast = breakfasts[Math.floor(Math.random() * breakfasts.length)];
    setRandomBreakfast(breakfast);
  };

  return (
    <div>
      <button onClick={getRandomBreakfast}>Surprice me!</button>
      <p>{randomBreakfast}</p>
    </div>
  );
}

export default BreakfastSuggestion;