import AI from '../ai';
import GameBoard from '../GameBoard';
import Player from '../Player';

test('has name and starts without turn', () => {
  const ai = new AI('AI');
  expect(ai.getName()).toMatch('AI');
  expect(ai.checkTurn()).toBe(false);
});
test('attacks', () => {
  const board = new GameBoard();
  const board2 = new GameBoard();
  const player1 = new Player('Luke');
  const player2 = new AI('Sr Admiral', player1, board);
  player1.attack(3, 4, player2, board2);
  player2.generateRandomAttack();
  expect(board.getMissedAttacks().length).toBe(1);
});
test('ai records all attacks and attacks at the right turn', () => {
  const board = new GameBoard();
  const board2 = new GameBoard();
  const player1 = new Player('Luke');
  const player2 = new AI('Sr Admiral', player1, board);
  player1.attack(3, 4, player2, board2);
  player2.generateRandomAttack();
  player2.generateRandomAttack();
  expect(player2.getAttackArray().length).toBe(1);
});
