export const isGameOver = (
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
) => {
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
      return true;
    }
  }
};
