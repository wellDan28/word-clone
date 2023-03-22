import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";
import Keyboard from "../Keyboard/Keyboard";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState(
    Array(NUM_OF_GUESSES_ALLOWED).fill(
      Array(5).fill({ letter: "", status: "" })
    )
  );
  const [keys, setKeys] = React.useState();
  const [currentGuess, setCurrentGuess] = React.useState(0);

  const isLost = currentGuess === NUM_OF_GUESSES_ALLOWED;
  const isWon = guessResults[currentGuess - 1] === answer;
  const isGuessInputDisabled = isWon || isLost;

  const onGuess = (guess) => {
    const guessCheck = checkGuess(guess, answer);
    setGuessResults((guesses) => {
      const newArray = [...guesses];
      newArray[currentGuess] = guessCheck;
      return newArray;
    });
    setCurrentGuess(currentGuess + 1);
  };

  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer} />
      <GuessInput onGuess={onGuess} isDisable={isGuessInputDisabled} />
      {isWon && <WonBanner numberOfGuess={currentGuess} />}
      {isLost && !isWon && <LostBanner answer={answer} />}
      <Keyboard keys={keys} />
    </>
  );
}

export default Game;
