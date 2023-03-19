import React from "react";

function Guess() {
  const [guess, setGuess] = React.useState("");

  const handleGuessChange = (e) => {
    setGuess(e.target.value.toUpperCase());
    console.log(
      "🚀 ~ tcl: handleGuessChange ~ tcl: e.target.value.toUpperCase():",
      e.target.value.toUpperCase()
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(guess);
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
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        required
      />
    </form>
  );
}

export default Guess;
