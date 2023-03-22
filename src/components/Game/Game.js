import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState(
    Array(NUM_OF_GUESSES_ALLOWED).fill("")
  );
  const [currentGuess, setCurrentGuess] = React.useState(0);
  const hasReachGuessLimit = currentGuess === NUM_OF_GUESSES_ALLOWED;
  const isCorrectAnswer = guessResults[currentGuess - 1] === answer;
  const isGuessInputDisabled = isCorrectAnswer || hasReachGuessLimit;

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
      <GuessInput onGuess={onGuess} isDisable={isGuessInputDisabled} />
      {isCorrectAnswer && <WonBanner numberOfGuess={currentGuess} />}
      {hasReachGuessLimit && !isCorrectAnswer && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
