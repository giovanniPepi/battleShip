import Gameboard from './Gameboard';

test('returns something', () => {
  expect(Gameboard()).not.toBeUndefined();
});

test('gameboard should be an array of 10 x 10', () => {
  expect(Gameboard().gameArray.length).toEqual(10);
  expect(Gameboard().gameArray[0].length).toEqual(10);
  expect(Gameboard().gameArray[9].length).toEqual(10);
});

const newCarrier = Gameboard().placeShip('Carrier');
const newBattleShip = Gameboard().placeShip('Battleship');
const newDestroyer = Gameboard().placeShip('Destroyer');
const newSubmarine = Gameboard().placeShip('Submarine');
const newPatrolBoat = Gameboard().placeShip('Patrol Boat');

test('should create new Ships with right length', () => {
  expect(newCarrier.length).toBe(5);
  expect(newBattleShip.length).toBe(4);
  expect(newDestroyer.length).toBe(3);
  expect(newSubmarine.length).toBe(3);
  expect(newPatrolBoat.length).toBe(2);
});

test('should accept coords in XY format', () => {
  expect();
});
