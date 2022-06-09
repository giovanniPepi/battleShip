import Gameboard from './Gameboard';

test('returns something', () => {
  expect(Gameboard()).not.toBeUndefined();
});

test('gameboard should be an array of 10 x 10', () => {
  expect(Gameboard().gameArray.length).toEqual(10);
  expect(Gameboard().gameArray[0].length).toEqual(10);
  expect(Gameboard().gameArray[9].length).toEqual(10);
});

let g = Gameboard();

test('returns false if there is already a ship placed', () => {
  g.placeShip(0, 0, 2, 'h');
  expect(g.placeShip(0, 1, 2, 'h').toBe(false));
});

test('place horizontal ship of length 1 at position 0', () => {
  g.placeShip(0, 1, 'h');
  expect(g.gameArray[0]).toBeTruthy();
});

test('accepts horizontal ship of length 5 at position 4', () => {
  g.placeShip(4, 4, 'h');
  let testPosCondition = g.gameArray[4] && g.gameArray[5];
  expect(testPosCondition).toBeTruthy();
});

test('accepts horizontal ship of 4 at pos 4', () => {
  testPosCondition = g.board[4] && g.board[5] && g.board[6] && g.board[7];
  expect(testPosCondition).toBeTruthy();
});

test('reject horizontal boat over the edge', () => {
  expect(g.placeShip(1, 6, 5, 'h')).toBe(false);
});

test('reject vertical ship that goes over bottom edge', () => {
  expect(g.placeShip(7, 5, 4, 'v')).toBe(false);
});
