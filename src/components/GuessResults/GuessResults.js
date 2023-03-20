import React from "react";
import Guess from "../Guess";

function GuessResults({ guessResults, answer }) {
  return (
    <div className="guess-results">
      {guessResults.map((value, index) => (
        <Guess key={index} guess={value} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
