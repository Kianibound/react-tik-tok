//  Function to check if the game is finished and if it is, set the gameFinished state to true and set the winner or Draw (in useEffect)

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
//All winning situations

export const winCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
