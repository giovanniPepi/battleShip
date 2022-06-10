class Ship {
  constructor(length) {
    this.length = length;
    this.ship = this.buildShip();
  }

  buildShip() {
    const shipArray = [];
    let i = this.length;

    while (i > 0) {
      shipArray.push({ hit: false });
      i -= 1;
    }
    return shipArray;
  }

  getShip() {
    return this.ship;
  }

  getShipLength() {
    return this.ship.length;
  }

  hit(index) {
    this.ship[index].hit = true;
  }

  static getHit(item) {
    if (item.hit === true) {
      return true;
    }
    return false;
  }

  isSunk() {
    if (this.ship.every(this.checkHit)) {
      return true;
    }
    return false;
  }
}

export default Ship;
