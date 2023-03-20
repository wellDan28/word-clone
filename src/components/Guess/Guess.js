import React from "react";

function Guess({ guess }) {
  const letters = guess ? guess : Array(5).fill("");
  return (
    <p className="guess">
      {letters.map(({ letter, status }, index) => (
        <span key={index} className={`cell ${status}`}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
