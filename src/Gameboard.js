import Ship from './Ship';

const Gameboard = () => {
  const gameArray = [];

  // creates an array for every array item
  const setGameboard = (() => {
    for (let a = 0; a < 10; a += 1) {
      gameArray[a] = [];
      for (let b = 0; b < 10; b += 1) {
        gameArray[a].push([false]);
      }
    }
  })();

  const placeShip = (name, coords) => {
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

    const location = [];
    location.push(coords);

    return ship;
  };

  return {
    gameArray,
    placeShip
  };
};

export default Gameboard;
