const domQueries = () => {
  const battleshipHTML = document.querySelector('#battleship');
  const carrierHTML = document.querySelector('#carrier');
  const submarineHTML = document.querySelector('#submarine');
  const destroyerHTML = document.querySelector('#destroyer');
  const patrolboatHTML = document.querySelector('#patrolboat');
  const draggable = document.querySelector('.draggable');
  const enemy = document.querySelector('.enemy');
  const nameModal = document.querySelector('.modal');
  const nameInpt = document.querySelector('#nameInpt');
  const nameForm = document.querySelector('.nameForm');
  const playerName = document.querySelector('#playerName');
  const endGameContent = document.querySelector('#endGameContent');
  const endGameModal = document.querySelector('.endgame');
  const playAgainButton = document.querySelector('#playAgainButton');
  const winnerText = document.querySelector('#winnerText');

  return {
    battleshipHTML,
    carrierHTML,
    submarineHTML,
    destroyerHTML,
    patrolboatHTML,
    draggable,
    enemy,
    nameModal,
    nameInpt,
    nameForm,
    playerName,
    endGameContent,
    endGameModal,
    playAgainButton,
    winnerText
  };
};

export default domQueries;
