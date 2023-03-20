import React from "react";
import Guess from "../Guess";

function GuessResults({ guessResults }) {
  return (
    <div className="guess-results">
      {guessResults.map((value, index) => (
        <Guess key={index} guess={value} />
      ))}
    </div>
  );
}

export default GuessResults;
