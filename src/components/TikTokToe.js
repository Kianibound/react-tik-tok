import React, { useState } from "react";
import Square from "./Square";
import EndGame from "./EndGame";

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

  // Function to check if the game is finished and if it is, set the gameFinished state to true and set the winner or Draw
  const isGameOver = () => {
    if (!gameFinished) {
      //check if the X player is won
      if (
        winCombination.some((combination) => {
          return combination.every((index) => {
            return grid[index] === X_PLAYER;
          });
        })
      ) {
        setGameFinished(true);
        setwinCount({ ...winCount, X: winCount.X + 1 });
        console.log("X player won");
        return true;
      }

      //Check if the O player is won
      if (
        winCombination.some((combination) => {
          return combination.every((index) => {
            return grid[index] === O_PLAYER;
          });
        })
      ) {
        setGameFinished(true);
        setwinCount({ ...winCount, O: winCount.O + 1 });
        console.log("O player won");
        return true;
      }

      //Check if the game is Draw
      if (
        grid.every((square) => {
          return square !== INITIAL;
        })
      ) {
        setGameFinished(true);
        setDraw(true);
        console.log("Draw");
        return true;
      }
    }
  };
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
  isGameOver();

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
        <span> X's WINS: {winCount.X}</span>

        <span> O's WINS: {winCount.O}</span>
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
    </div>
  );
};

export default TikTokToe;
