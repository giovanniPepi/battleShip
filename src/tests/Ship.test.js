import Ship from '../Ship';

describe('ship', () => {
  let length = 3;
  let myShip = new Ship(length);

  test('should return right length', () => {
    expect(myShip.getShipLength()).toBe(3);
  });
  test('returns hit points', () => {
    length = 2;
    const object = [{ hit: false }, { hit: false }, { hit: false }];
    expect(myShip.getShip()).toEqual(object);
  });
  test('should be hit', () => {
    myShip.hit(1);
    expect(myShip.getShip()[1]).toEqual({ hit: true });
  });
  test('should sink if all hit', () => {
    length = 5;
    myShip = new Ship(length);

    myShip.hit(0);
    myShip.hit(1);
    myShip.hit(2);
    myShip.hit(3);
    myShip.hit(4);

    expect(myShip.isSunk()).toBeTruthy();
  });
});
