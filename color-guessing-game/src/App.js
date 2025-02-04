import React, { useState, useEffect } from "react";
import ColorBox from "./components/ColorBox";
import ColorOptions from "./components/ColorOptions";
import GameStatus from "./components/GameStatus";
import Score from "./components/Score";
import NewGameButton from "./components/NewGameButton";
import DarkModeToggle from "./components/DarkModeToggle";
import "./App.css";

const COLORS = ["red", "blue", "green", "yellow", "purple", "orange"];

const App = () => {
  const [targetColor, setTargetColor] = useState(getRandomColor());
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState("Guess the correct color!");
  const [wrongGuess, setWrongGuess] = useState(false);
  const [correctGuess, setCorrectGuess] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [highScore, setHighScore] = useState(
    localStorage.getItem("highScore") || 0
  );

  function getRandomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
  }

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem("highScore", score); // Save high score to localStorage
    }
  }, [score, highScore]);

  const handleGuess = (color) => {
    if (color === targetColor) {
      setScore(score + 1);
      setStatus("Correct! 🎉");
      setCorrectGuess(true);
      setWrongGuess(false);
      setTargetColor(getRandomColor());
    } else {
      setStatus("Wrong! Try again ❌");
      setWrongGuess(true);
      setCorrectGuess(false);
    }
  };

  const resetGame = () => {
    setTargetColor(getRandomColor());
    setStatus("Guess the correct color!");
    setScore(0);
    setCorrectGuess(false);
    setWrongGuess(false);
  };

  return (
    <div className={`container ${darkMode ? "dark-mode" : ""}`}>
      <h1>Color Guessing Game</h1>
      <DarkModeToggle
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
      />
      <ColorBox
        color={targetColor}
        wrongGuess={wrongGuess}
        correctGuest={correctGuess}
      />
      <GameStatus status={status} />
      <ColorOptions colors={COLORS} onGuess={handleGuess} />
      <Score score={score} highScore={highScore} />
      <NewGameButton onReset={resetGame} />
    </div>
  );
};

export default App;
