import React from "react";

function KeyboardRow({ row }) {
  return (
    <div className="keyboard-row">
      {row.map(({ key }, index) => (
        <div key={index} className="keyboard-key">
          {key}
        </div>
      ))}
    </div>
  );
}

function Keyboard({ keys }) {
  return (
    <div className="keyboard">
      {keys.map((row, index) => (
        <KeyboardRow key={index} row={row} />
      ))}
    </div>
  );
}

export default Keyboard;
