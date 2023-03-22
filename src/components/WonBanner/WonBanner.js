import React from "react";
import Banner from "../Banner/Banner";

const WonBanner = ({ numberOfGuess }) => {
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
export default WonBanner;
