const placeAIShip = (ship, AIBoard) => {
  while (typeof x === 'undefined') {
    let numberArray = [];
    const firstNumber = Math.floor(Math.random() * 10);
    const secondNumber = Math.floor(Math.random() * 10);
    numberArray = [firstNumber, secondNumber];

    if (
      AIBoard.checkShipPlacement(
        ship.getShipLength(),
        numberArray[0],
        numberArray[1]
      )
    ) {
      AIBoard.placeShip(ship, numberArray[0], numberArray[1]);
      break;
    }
  }
};

export default placeAIShip;
