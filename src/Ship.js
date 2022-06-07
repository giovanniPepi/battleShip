/* eslint-disable no-return-assign */

const Ship = (shipName, position) => {
  // helper functions
  const getLength = () => {
    let length;
    switch (shipName) {
      case 'carrier':
        length = 5;
        return length;
      case 'battleship':
        length = 4;
        return length;
      case 'destroyer':
        length = 3;
        return length;
      case 'submarine':
        length = 3;
        return length;
      default:
        length = 2;
        return length;
    }
  };

  // ship obj
  let sunk = false;
  let coordinates = position;
  const name = shipName;
  const length = getLength(name);
  let health = length;
  const getHealth = () => health;
  const isSunk = () => {
    if (health > 0) return;
    sunk = true;
  };
  const isHit = () => {
    if (!sunk) health -= 1;
    isSunk();
  };

  return {
    name,
    length,
    coordinates,
    getHealth,
    isHit,
    isSunk
  };
};

export default Ship;
