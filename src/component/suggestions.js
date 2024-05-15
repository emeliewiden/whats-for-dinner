import React, { useState } from 'react';

function DinnerSuggestion() {
  const Dinners = [
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
    "Tacos",
    "Libapizza",

  ];

  const [randomDinner, setRandomDinner] = useState('');

  const getRandomDinner = () => {
    const dinner = Dinners[Math.floor(Math.random() * Dinners.length)];
    setRandomDinner(dinner);
  };

  return (
    <div>
      <button onClick={getRandomDinner}>Överraska mig!</button>
      <p>{randomDinner}</p>
    </div>
  );
}

export default DinnerSuggestion;