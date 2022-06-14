class GameBoard {
  constructor() {
    this.gameBoardArray = this.buildGameBoard();
    this.missedAttacks = [];
    this.successfulAttacks = [];
    this.lastSuccessfulAttack = [];
  }

  // eslint-disable-next-line class-methods-use-this
  buildGameBoard() {
    const array = [];
    let arrayItem = [];
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        arrayItem.push({ shipName: undefined, shipIndex: undefined });
      }
      array.push(arrayItem);
      // reset before next iteration
      arrayItem = [];
    }
    return array;
  }

  getGameBoard() {
    return this.gameBoardArray;
  }

  checkShipPlacement(length, x, y) {
    // conditions that extrapolate the gameboard
    const invalidConditions =
      x > 10 || x < 0 || y > 10 || y < 0 || y + length > 10;
    if (invalidConditions) return false;

    // checks existing ships
    for (let i = 0; i < y + length; i += 1) {
      if (this.gameBoardArray[i][x].shipName !== undefined) return false;
    }
    return true;
  }

  placeShip(ship, x, y) {
    // checks if the position is valid before placing
    if (this.checkShipPlacement(ship.getShipLength(), x, y)) {
      // fills ship array
      for (let i = 0; i < ship.getShipLength(); i += 1) {
        this.gameBoardArray[y + i][x].shipName = ship;
        this.gameBoardArray[y + i][x].shipIndex = i;
      }
    }
  }

  receiveAttack(x, y) {
    if (this.gameBoardArray[y][x].shipName === undefined) {
      this.missedAttacks.push({ x, y });
      this.lastSuccessfulAttack.pop();
    } else {
      this.gameBoardArray[y][x].shipName.hit(
        this.gameBoardArray[y][x].shipIndex
      );
      this.successfulAttacks.push({ x, y });
      this.lastSuccessfulAttack.pop();
      this.lastSuccessfulAttack.push({ x, y });
    }
    return this.successfulAttacks;
  }

  getMissedAttacks() {
    return this.missedAttacks;
  }

  getSuccessfulAttacks() {
    return this.successfulAttacks;
  }

  getLastSuccessfulAttack() {
    return this.lastSuccessfulAttack;
  }

  // changes boolean to true if any ship inside is not sunk
  checkAllSunk() {
    let key = true;
    this.gameBoardArray.forEach((item) => {
      item.forEach((e) => {
        if (e.shipName) {
          if (e.shipName.isSunk() === false) {
            key = false;
          }
        }
      });
    });
    return key;
  }
}

export default GameBoard;
