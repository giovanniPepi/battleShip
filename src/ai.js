import Player from './Player';

class AI extends Player {
  constructor(name, enemy, enemyBoard) {
    super(name, enemyBoard);
    this.turn = false;
    this.enemyPlayer = enemy;
    this.enemyBoard = enemyBoard;
    this.attackArray = [];
    this.lastAttack = [];
  }

  generateRandomAttack() {
    if (this.checkTurn()) {
      const numberObj = { x: undefined, y: undefined };

      // loops forever until it finds a valid attack
      while (typeof x === 'undefined') {
        const firstNumber = Math.floor(Math.random() * 10);
        const secondNumber = Math.floor(Math.random() * 10);
        numberObj.x = firstNumber;
        numberObj.y = secondNumber;

        // checks if move has already been played
        const previousAttack = this.attackArray.some(
          (e) => e.x === numberObj.x && e.y === numberObj.y
        );

        if (!previousAttack) {
          this.lastAttack = [];
          this.attackArray.push(numberObj);
          this.lastAttack.push(numberObj);
          this.attack(
            numberObj.x,
            numberObj.y,
            this.enemyPlayer,
            this.enemyBoard
          );
          break;
        }
      }
    }
    return this.lastAttack;
  }
}

export default AI;
