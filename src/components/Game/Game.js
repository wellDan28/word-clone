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
      {isCorrectAnswer && <HappyBanner numberOfGuess={currentGuess} />}
      {hasReachGuessLimit && !isCorrectAnswer && <SadBanner answer={answer} />}
    </>
  );
}

const Banner = ({ variant, children }) => {
  const className = variant === "happy" ? "happy banner" : "sad banner";

  return <div className={className}>{children}</div>;
};

const HappyBanner = ({ numberOfGuess }) => {
  return (
    <Banner variant="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numberOfGuess === 1 ? "1 guess" : `${numberOfGuess} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
};

const SadBanner = ({ answer }) => {
  return (
    <Banner variant="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
};

export default Game;
