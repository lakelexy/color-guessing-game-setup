import React from "react";

const ColorBox = ({ color, wrongGuess, correctGuess }) => {
  return (
    <div
      data-testid="colorBox"
      className={`color-box ${wrongGuess ? "wrong-guess" : ""} ${
        correctGuess ? "correct-guess" : ""
      }`}
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default ColorBox;
