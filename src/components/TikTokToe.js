import React, { useEffect, useState } from "react";
import Square from "./Square";
import EndGame from "./EndGame";
import { isGameOver } from "./utils/utlis";

//All winning situations
const winCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//initial value for the grid
const INITIAL = "";
//Players constants
const X_PLAYER = "X";
const O_PLAYER = "O";
//////////////////////////////

const TikTokToe = () => {
  const [grid, setGrid] = useState(Array(9).fill(INITIAL));
  const [player, setPlayer] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [draw, setDraw] = useState(false);
  const [winCount, setwinCount] = useState({ X: 0, O: 0 });

  // Function to check if the game is finished and if it is, set the gameFinished state to true and set the winner or Draw (in useEffect)
  useEffect(() => {
    isGameOver(
      gameFinished,
      setGameFinished,
      setwinCount,
      setDraw,
      INITIAL,
      winCombination,
      grid,
      X_PLAYER,
      O_PLAYER,
      winCount
    );
  }, [grid, gameFinished, winCount]);
  // Restart the Game Function
  const restartGame = () => {
    setGrid(Array(9).fill(INITIAL));
    setGameFinished(false);
    setDraw(false);
  };

  ////////////////////////////

  //Clear History of the game Function
  const clearHistory = () => {
    setwinCount({ X: 0, O: 0 });
    restartGame();
  };
  /////////////////////////////

  const handleClick = (index) => {
    setGrid(
      grid.map((item, i) => {
        if (i === index) {
          return player ? X_PLAYER : O_PLAYER;
        } else {
          return item;
        }
      })
    );
    setPlayer(!player);
  };

  return (
    <div>
      <div className="winners-info">
        <span>Player "X" WINS: {winCount.X}</span>

        <span>Player "O" WINS: {winCount.O}</span>
      </div>
      {gameFinished && (
        <EndGame
          winCount={winCount}
          restartGame={restartGame}
          player={player}
          draw={draw}
          clearHistory={clearHistory}
        />
      )}
      <Square grid={grid} handleClick={handleClick} />
      <h3 className="player-turn">{`${
        player ? "Player X turns" : "Player O Turn"
      }`}</h3>
    </div>
  );
};

export default TikTokToe;
