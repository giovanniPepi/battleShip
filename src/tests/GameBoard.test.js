import Gameboard from '../Gameboard';
import Ship from '../Ship';

const board = new Gameboard();

test('gameboard array should return obj', () => {
  const obj = { shipName: undefined, shipIndex: undefined };
  expect(board.getGameBoard()[0][0]).toEqual(obj);
});

test('gameboard places ships', () => {
  const testShip = new Ship(2);
  let x = 1;
  let y = 2;
  board.placeShip(testShip, x, y);
  expect(board.getGameBoard()[2][1]).toEqual({
    shipName: testShip,
    shipIndex: 0
  });
  expect(board.getGameBoard()[3][1]).toEqual({
    shipName: testShip,
    shipIndex: 1
  });
});
