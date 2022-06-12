import domQueries from './domQueries';

// calls for winner
const endGame = (winner) => {
  domQueries().endGameModal.style.display = 'block';
  domQueries().winnerText.textContent = `${winner} is the winner!`;
};

export default endGame;
