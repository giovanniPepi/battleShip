import domQueries from './domQueries';

const createEventListeners = () => {
  // reloader
  domQueries().playAgainButton.addEventListener('click', () => {
    window.location.reload();
  });
};

export default createEventListeners;
