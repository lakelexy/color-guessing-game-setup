import React from "react";

const ColorOptions = ({ colors, onGuess }) => {
  return (
    <div className="color-options">
      {colors.map((color) => (
        <button
          key={color}
          data-testid="colorOption"
          style={{ backgroundColor: color }}
          onClick={() => onGuess(color)}
        >
          {color}
        </button>
      ))}
    </div>
  );
};

export default ColorOptions;
