import React from "react";

const Score = ({ score, highScore }) => {
  return (
    <div>
      <h3 data-testid="score">Score: {score}</h3>
      <h3>🏆 High Score: {highScore}</h3>
    </div>
  );
};

export default Score;
