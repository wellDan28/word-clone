import React from "react";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  return <span className={`cell ${status}`}>{letter}</span>;
}

function Guess({ guess, answer }) {
  const letters = guess
    ? checkGuess(guess, answer)
    : Array(5).fill({ letter: "", status: "" });

  return (
    <p className="guess">
      {letters.map(({ letter, status }, index) => (
        <Cell key={index} letter={letter} status={status} />
      ))}
    </p>
  );
}

export default Guess;
