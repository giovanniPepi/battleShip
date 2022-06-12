const makeDraggable = () => {
  // DOM
  const battleShip = document.querySelector('#battleship');
  const carrier = document.querySelector('#carrier');
  const submarine = document.querySelector('#submarine');
  const destroyer = document.querySelector('#destroyer');
  const patrolboat = document.querySelector('#patrolboat');

  const setDragger = (element) => {
    element.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', e.target.id);
    });
  };

  setDragger(battleShip);
  setDragger(carrier);
  setDragger(submarine);
  setDragger(destroyer);
  setDragger(patrolboat);

  return {
    battleShip,
    carrier,
    submarine,
    destroyer,
    patrolboat
  };
};

export default makeDraggable;
