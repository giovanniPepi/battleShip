import Ship from './Ship';

test('returns something', () => {
  expect(Ship(2)).not.toBeUndefined();
});

test('returns obj', () => {
  expect(Ship(2) instanceof Object).toEqual(true);
});

test('returns length', () => {
  expect(Ship(2).length).toEqual(2);
  expect(Ship(3).length).toEqual(3);
  expect(Ship(4).length).toEqual(4);
  expect(Ship(5).length).toEqual(5);
});

test('rejects non number', () => {
  expect(Ship('test')).toBeUndefined();
  expect(Ship([2])).toBeUndefined();
  expect(Ship({})).toBeUndefined();
});

test('only accept int', () => {
  expect(Ship(2.3)).toBeUndefined();
  expect(Ship(3.64646984984)).toBeUndefined();
});
test('only accept int', () => {
  expect(Ship(2.3)).toBeUndefined();
  expect(Ship(3.64646984984)).toBeUndefined();
});
test('rejects > 5 or < 2', () => {
  expect(Ship(1)).toBeUndefined();
  expect(Ship(6)).toBeUndefined();
  expect(Ship(0)).toBeUndefined();
  expect(Ship(-1)).toBeUndefined();
});

test('returns tiles', () => {
  expect(Ship(2).tiles).not.toBeUndefined();
});

test('returns initial sunk status', () => {
  expect(Ship(2).isSunk()).toBe(false);
});

test('hits the ship', () => {
  const testShip = Ship(5);
  testShip.hit(1);
  expect(testShip.tiles[1]).toBe('hit');
  expect(testShip.isSunk()).toBe(false);
});

test('sinks the ship', () => {
  const testShip = Ship(2);
  testShip.hit(0);
  testShip.hit(1);
  expect(testShip.tiles[0]).toBe('hit');
  expect(testShip.tiles[1]).toBe('hit');
  expect(testShip.isSunk()).toBe(true);
});

test('ignores double hitting', () => {
  const testShip = Ship(2);
  testShip.hit(1);
  testShip.hit(1);
  expect(testShip.tiles[1]).toBe('hit');
  expect(testShip.isSunk()).toBe(false);
});

test('ignores out of range hitting', () => {
  const testShip = Ship(2);
  testShip.hit(3);
  expect(testShip.tiles[3]).toBeUndefined();
  expect(testShip.isSunk()).toBe(false);
});
