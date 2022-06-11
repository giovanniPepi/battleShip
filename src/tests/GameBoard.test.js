import GameBoard from '../GameBoard';
import Ship from '../Ship';

let board = new GameBoard();
const testShip = new Ship(2);
const testShip2 = new Ship(3);
let obj = { shipName: undefined, shipIndex: undefined };

test('gameboard array should return obj', () => {
  expect(board.getGameBoard()[0][0]).toEqual(obj);
});

test('gameboard places ships', () => {
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

test('gameboard skips occupied positions', () => {
  board.placeShip(testShip, 0, 0);
  board.placeShip(testShip2, 0, 1);
  expect(board.getGameBoard()[1][0]).toEqual({
    shipName: testShip,
    shipIndex: 1
  });
  expect(board.getGameBoard()[2][0]).toEqual({
    shipName: undefined,
    shipIndex: undefined
  });
});

test('gameboard attacks ships', () => {
  board.placeShip(testShip, 0, 1);
  board.receiveAttack(0, 1);
  expect(testShip.getShip()[1].hit).toBe(true);
});

test('gameboard keeps track of missed attacks', () => {
  board = new GameBoard();
  obj = { x: 0, y: 0 };
  board.receiveAttack(0, 0);
  expect(board.getMissedAttacks()[0]).toEqual(obj);
});

test('gameboard checks if every ship was sunken', () => {
  board = new GameBoard();
  board.placeShip(testShip, 0, 0);
  board.placeShip(testShip2, 5, 5);
  board.receiveAttack(0, 0);
  board.receiveAttack(0, 1);
  board.receiveAttack(5, 5);
  board.receiveAttack(5, 6);
  board.receiveAttack(5, 7);
  expect(board.checkAllSunk()).toBe(true);
});
