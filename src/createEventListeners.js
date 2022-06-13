import domQueries from './domQueries';
import buildGame from './buildGame';

const createEventListeners = () => {
  // reloader
  domQueries().playAgainButton.addEventListener('click', () => {
    window.location.reload();
  });
};

export default createEventListeners;