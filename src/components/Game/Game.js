import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState(
    Array(NUM_OF_GUESSES_ALLOWED).fill("")
  );
  const [currentGuess, setCurrentGuess] = React.useState(0);
  const isDisable = currentGuess === NUM_OF_GUESSES_ALLOWED;

  const onGuess = (guess) => {
    setGuessResults((guesses) => {
      const newArray = [...guesses];
      newArray[currentGuess] = guess;
      return newArray;
    });
    setCurrentGuess(currentGuess + 1);
  };

  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer} />
      <GuessInput onGuess={onGuess} isDisable={isDisable} />
    </>
  );
}

export default Game;
