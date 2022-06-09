/* eslint-disable operator-linebreak */
/* eslint-disable no-return-assign */

import { electron } from 'webpack';

const Ship = (id, length, isVertical, startCoord) => {
  // array that keeps track of hit locations
  const hitLocations = Array(length);
  const hit = (position) => {
    hitLocations[position] = 'hit';
  };

  const isSunk = () => hitLocations.every((element) => element === 'hit');
};

export default Ship;
