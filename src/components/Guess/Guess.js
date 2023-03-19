import React from "react";

function Guess() {
  const [guess, setGuess] = React.useState("");

  const handleGuessChange = (e) => {
    setGuess(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(guess.toUpperCase());
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleGuessChange}
        pattern="\w{5,5}"
        required
      />
    </form>
  );
}

export default Guess;
