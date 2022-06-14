// updates DOM
const updateDisplay = (boardName, board, lastAttack) => {
  console.log(lastAttack);
  const boardArray = board.getGameBoard();
  const missed = board.getMissedAttacks();

  boardArray.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell.shipName) {
        if (
          cell.shipName.checkHit(cell.shipName.getShip()[cell.shipIndex]) ===
          true
        ) {
          const selectedCell = document.querySelector(
            `.${boardName} [data-x="${x}"][data-y ="${y}"`
          );
          selectedCell.textContent = 'X';
          selectedCell.classList.add('hit');
          selectedCell.classList.remove('occupied');
        } else if (
          cell.shipName.checkHit(cell.shipName.getShip()[cell.shipIndex]) ===
          false
        ) {
          if (boardName === 'playerBoard') {
            const selectedCell = document.querySelector(
              `.${boardName} [data-x="${x}"][data-y ="${y}"]`
            );
            selectedCell.classList.add('occupied');
          }
        }
      }
    });
  });
  missed.forEach((attack) => {
    const selectedCell = document.querySelector(
      `.${boardName} [data-x="${attack.x}"][data-y ="${attack.y}"]`
    );
    selectedCell.textContent = 'X';
    selectedCell.classList.add('missed');
  });
};

export default updateDisplay;
