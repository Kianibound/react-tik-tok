import React from "react";

const EndGame = ({ winCount, restartGame, player, draw, clearHistory }) => {
  return (
    <div>
      <div className="end-game-screen">
        {!draw && (
          <span className="win-text">{player ? "O WON" : "X WON"}</span>
        )}
        {draw && <span className="win-text">DRAW GAME</span>}

        <span className="win-history">
          X's WINS: {winCount.X}
          <br />
          O's WINS: {winCount.O}
        </span>

        <button className="btn" onClick={restartGame}>
          RESTART GAME
        </button>
        <button className="btn" onClick={clearHistory}>
          CLEAR HISTORY
        </button>
      </div>
    </div>
  );
};

export default EndGame;
