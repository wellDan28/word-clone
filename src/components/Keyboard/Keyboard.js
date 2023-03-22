import React from "react";

function KeyboardRow({ row, keys }) {
  return (
    <div className="keyboard-row">
      {row.map(({ key }, index) => {
        const className = `keyboard-key ${keys[key]}`;
        return (
          <div key={index} className={className}>
            {key}
          </div>
        );
      })}
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
        <KeyboardRow key={index} row={row} keys={keys} />
      ))}
    </div>
  );
}

export default Keyboard;
