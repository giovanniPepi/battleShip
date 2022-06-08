/* eslint-disable no-return-assign */

const Ship = (leng) => {
  // sanitizer
  if (typeof leng !== 'number' || !Number.isInteger(leng)) return undefined;
  const length = parseInt(leng, 10);
  let sunk = false;
  // game array
  let tiles = [...Array(leng).keys()];

  console.log(tiles);

  return {
    length
  };
};

// Ship(22);
export default Ship;
