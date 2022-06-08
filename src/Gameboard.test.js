import Gameboard from './Gameboard';

test('returns something', () => {
  expect(Gameboard()).not.toBeUndefined();
});

test('gameboard should be an array of 100', () => {
  expect(Gameboard().gameArray.length).toEqual(100);
});
