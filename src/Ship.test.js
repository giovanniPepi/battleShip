import Ship from './Ship';

test('returns something', () => {
  expect(Ship(2)).not.toBeUndefined();
});

test('returns obj', () => {
  expect(Ship(2) instanceof Object).toEqual(true);
});

test('returns length', () => {
  expect(Ship(2).length).toEqual(2);
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
