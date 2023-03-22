import React from "react";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  return <span className={`cell ${status}`}>{letter}</span>;
}

function Guess({ guess, answer }) {
  console.log("🚀 ~ tcl: Guess ~ tcl: guess:", guess);

  return (
    <p className="guess">
      {guess.map(({ letter, status }, index) => (
        <Cell key={index} letter={letter} status={status} />
      ))}
    </p>
  );
}

export default Guess;
