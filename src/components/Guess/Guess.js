import React from "react";

function Cell({ letter, status }) {
  return <span className={`cell ${status}`}>{letter}</span>;
}

function Guess({ guess }) {
  return (
    <p className="guess">
      {guess.map(({ letter, status }, index) => (
        <Cell key={index} letter={letter} status={status} />
      ))}
    </p>
  );
}

export default Guess;
