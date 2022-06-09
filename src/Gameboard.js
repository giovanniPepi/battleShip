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

  const placeShip = (index1, index2, length, dir) => {
    const ship = Ship(length);
    let shipPos = 0;

    if (dir === 'h') {
      for (let i = index1; i < index2 + ship.length; i += 1) {
        gameArray[index1].splice(i, 1, { ship, shipPos });
      }
    }
  };

  return {
    gameArray,
    placeShip
  };
};

export default Gameboard;
