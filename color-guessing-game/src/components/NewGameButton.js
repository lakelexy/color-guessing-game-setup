import React from "react";

const NewGameButton = ({ onReset }) => {
  return (
    <button data-testid="newGameButton" onClick={onReset} className="reset-btn">
      New Game
    </button>
  );
};

export default NewGameButton;
