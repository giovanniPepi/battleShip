import Ship from './Ship';

const Gameboard = () => {
  const gameArray = Array(100).fill(undefined, 0);

  const placeShip = (name) => {
    let leng;

    switch (name) {
      case 'Carrier':
        leng = 5;
        break;
      case 'Battleship':
        leng = 4;
        break;
      case 'Destroyer':
        leng = 3;
        break;
      case 'Submarine':
        leng = 3;
        break;
      default:
        leng = 2;
        break;
    }

    const ship = Ship(leng);

    return ship;
  };

  return {
    gameArray,
    placeShip
  };
};

export default Gameboard;
