class Player {
  constructor(name) {
    this.name = name;
    this.turn = true;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  endTurn(player2) {
    if (this.turn === true) {
      this.turn = false;
      player2.startTurn();
    }
  }

  startTurn() {
    if (this.turn === false) {
      this.turn = true;
    }
  }

  checkTurn() {
    return this.turn;
  }

  // attacks place the hit and ends turn
  attack(x, y, player2, player2Board) {
    if (this.checkTurn()) {
      player2Board.receiveAttack(x, y);
      this.endTurn(player2);
    }
  }
}

export default Player;
