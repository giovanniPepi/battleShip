import Player from '../Player';
import GameBoard from '../GameBoard';
import Ship from '../Ship';

test('player should have name', () => {
  const player1 = new Player('Luke');
  expect(player1.getName()).toMatch('Luke');
});
test('player can change name', () => {
  const player1 = new Player('Luke');
  player1.setName('Sr Bernard');
  expect(player1.getName()).toMatch('Sr Bernard');
});
test('player ending turn starts enemy turn', () => {
  const player1 = new Player('Luke');
  const player2 = new Player('Sr Bernard');
  player1.endTurn(player2);
  expect(player1.checkTurn()).toBe(false);
  expect(player2.checkTurn()).toBe(true);
});
test('player can attack board if they have turn', () => {
  const board2 = new GameBoard();
  const player1 = new Player('Luke');
  const player2 = new Player('Sr Bernard');
  const testShip = new Ship(1);
  board2.placeShip(testShip, 0, 0);
  player1.attack(0, 0, player2, board2);
  expect(testShip.getShip()[0].hit).toBe(true);
});
test('player attacking ends turn and starts enemy turn', () => {
  const board = new GameBoard();
  const player1 = new Player('Luke');
  const player2 = new Player('Sr Bernard');
  const testShip = new Ship(1);
  board.placeShip(testShip, 0, 0);
  player1.attack(0, 0, player2, board);
  expect(player1.checkTurn()).toBe(false);
  expect(player2.checkTurn()).toBe(true);
});
