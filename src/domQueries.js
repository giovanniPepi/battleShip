const domQueries = () => {
  const battleshipHTML = document.querySelector('#battleship');
  const carrierHTML = document.querySelector('#carrier');
  const submarineHTML = document.querySelector('#submarine');
  const destroyerHTML = document.querySelector('#destroyer');
  const patrolboatHTML = document.querySelector('#patrolboat');
  const addShips = document.querySelector('.addShips');
  const aiSide = document.querySelector('.aiSide');
  const nameModal = document.querySelector('.modal');
  const nameInpt = document.querySelector('#nameInpt');
  const modalForm = document.querySelector('#modalContent');
  const playerName = document.querySelector('#playerName');
  const endGameContent = document.querySelector('#endGameContent');
  const endGameModal = document.querySelector('#endGameModal');
  const playAgainButton = document.querySelector('#playAgainButton');
  const winnerText = document.querySelector('#winnerText');

  return {
    battleshipHTML,
    carrierHTML,
    submarineHTML,
    destroyerHTML,
    patrolboatHTML,
    addShips,
    aiSide,
    nameModal,
    nameInpt,
    modalForm,
    playerName,
    endGameContent,
    endGameModal,
    playAgainButton,
    winnerText
  };
};

export default domQueries;
