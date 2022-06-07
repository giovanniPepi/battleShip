import Ship from './Ship';

test('returns something', () => {
  expect(Ship('destroyer')).not.toBeUndefined();
});

test('returns the right size', () => {
  expect(Ship('carrier').length).toBe(5);
  expect(Ship('battleship').length).toBe(4);
  expect(Ship('destroyer').length).toBe(3);
  expect(Ship('submarine').length).toBe(3);
  expect(Ship('patrol boat').length).toBe(2);
});

describe('health area', () => {
  const myShip = Ship('carrier');
  beforeEach(() => {
    myShip.isHit();
  });
  test('returns health', () => {
    expect(myShip.getHealth()).not.toBeUndefined();
    expect(myShip.getHealth()).toBeLessThan(5);
  });
  test('another attack', () => {
    expect(myShip.getHealth()).toBeLessThan(4);
  });
});

describe('health below zero', () => {
  const myShip = Ship();
  beforeEach(() => {
    myShip.isHit();
  });
  test('Subtracts health', () => {
    expect(myShip.getHealth()).toBeLessThan(2);
  });
  test('zero', () => {
    expect(myShip.getHealth()).toEqual(0);
  });
  test('shouldNotGoBelowZero', () => {
    expect(myShip.getHealth()).toBeGreaterThan(-1);
  });
});
