import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Guess from "../Guess";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);
  const onGuess = (guess) => {
    const newGuess = {
      id: Date.now(),
      value: guess,
    };
    setGuessResults((guesses) => [...guesses, newGuess]);
  };

  return (
    <>
      <GuessResults guessResults={guessResults} />
      <Guess onGuess={onGuess} />
    </>
  );
}

export default Game;
