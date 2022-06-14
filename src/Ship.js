class Ship {
  constructor(length) {
    this.length = length;
    this.ship = this.buildShip();
  }

  // builds an array of hittable entries for every ship
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

  // eslint-disable-next-line class-methods-use-this
  // checks array position for hit
  checkHit(item) {
    if (item.hit === true) {
      return true;
    }
    return false;
  }

  // checks wether every position on the array is hit
  isSunk() {
    if (this.ship.every(this.checkHit)) {
      return true;
    }
    return false;
  }
}

export default Ship;
