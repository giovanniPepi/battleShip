import domQueries from './domQueries';
import buildGame from './buildGame';

const createEventListeners = () => {
  // reloader
  domQueries().playAgainButton.addEventListener('click', () => {
    window.location.reload();
  });

  // nameSetter
  domQueries().modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    buildGame().setDomName();
  });
};

export default createEventListeners;
