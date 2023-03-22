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
const FIRST_ROW_KEYS = "QWERTYUIOP";
const SECOND_ROW_KEYS = "ASDFGHJKL";
const THIRD_ROW_KEYS = "ZXCVBNM";
const defaultKeyboard = [FIRST_ROW_KEYS, SECOND_ROW_KEYS, THIRD_ROW_KEYS].map(
  (row) => row.split("").map((key) => ({ key, status: "initial" }))
);

function Keyboard({ keys }) {
  return (
    <div className="keyboard">
      {defaultKeyboard.map((row, index) => (
        <KeyboardRow key={index} row={row} />
      ))}
    </div>
  );
}

export default Keyboard;
