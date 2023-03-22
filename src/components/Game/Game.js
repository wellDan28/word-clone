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

const ALL_KEYS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Game() {
  const [guessResults, setGuessResults] = React.useState(
    Array(NUM_OF_GUESSES_ALLOWED).fill(
      Array(5).fill({ letter: "", status: "" })
    )
  );
  const [keysStatus, setKeysStatus] = React.useState(
    ALL_KEYS.split("").reduce((pv, cv) => {
      pv[cv] = "initial";
      return pv;
    }, {})
  );

  const [currentGuess, setCurrentGuess] = React.useState(0);
  const [isWon, setIsWon] = React.useState(false);
  const isLost = currentGuess === NUM_OF_GUESSES_ALLOWED;

  const isGuessInputDisabled = isWon || isLost;

  const onGuess = (guess) => {
    setIsWon(guess === answer);
    const guessCheck = checkGuess(guess, answer);
    setGuessResults((guesses) => {
      const newArray = [...guesses];
      newArray[currentGuess] = guessCheck;
      return newArray;
    });
    setCurrentGuess(currentGuess + 1);

    const keysStatusClone = { ...keysStatus };

    for (const { letter, status } of guessCheck) {
      const currentLetterStatus = keysStatusClone[letter];
      if (status === "correct" || currentLetterStatus === "correct") {
        keysStatusClone[letter] = "correct";
        continue;
      }
      if (status === "misplaced") {
        keysStatusClone[letter] = "misplaced";
        continue;
      }
      keysStatusClone[letter] = status;
    }

    setKeysStatus(keysStatusClone);
  };

  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer} />
      <GuessInput onGuess={onGuess} isDisable={isGuessInputDisabled} />
      {isWon && <WonBanner numberOfGuess={currentGuess} />}
      {isLost && !isWon && <LostBanner answer={answer} />}
      <Keyboard keys={keysStatus} />
    </>
  );
}

export default Game;
