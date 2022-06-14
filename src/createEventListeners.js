import domQueries from './domQueries';

const createEventListeners = () => {
  // reloader
  domQueries().playAgainButton.addEventListener('click', () => {
    window.location.reload();
  });

  // focus on name window
  const processKbdInpt = (key) => {
    if (key === 'Enter') {
      key.preventDefault();
      domQueries().nameForm.submit();
    } else domQueries().nameInpt.focus();
  };
  window.addEventListener('keydown', (e) => {
    processKbdInpt(e.key);
  });
};

export default createEventListeners;
