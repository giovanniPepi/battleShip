import Ship from '../Ship';

describe('ship', () => {
  test('should return array length', () => {
    const length = 3;
    const admiral = new Ship(length);
    expect(admiral.getShipLength()).toBe(3);
  });
});
