/* eslint-disable operator-linebreak */
/* eslint-disable no-return-assign */

const Ship = (leng) => {
  // sanitizer
  const rejectConditions =
    typeof leng !== 'number' || !Number.isInteger(leng) || leng > 5 || leng < 2;
  if (rejectConditions) return undefined;

  // game array
  let tiles = [...Array(leng).keys()];
  const length = leng;
  const isSunk = () => {
    let isAlive = false;
    tiles.forEach((e) => {
      if (e !== 'hit') isAlive = true;
    });
    return isAlive !== true;
  };
  const hit = (position) => {
    if (tiles[position] === 'hit') return;
    tiles.splice(position, 1, 'hit');
  };

  return {
    length,
    isSunk,
    tiles,
    hit
  };
};

export default Ship;
