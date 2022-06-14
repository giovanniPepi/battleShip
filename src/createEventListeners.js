import domQueries from './domQueries';

const createEventListeners = () => {
  // reloader
  domQueries().playAgainButton.addEventListener('click', () => {
    window.location.reload();
  });

  // focus on name window
  const processKbdInpt = (e, key) => {
    if (key === 'Enter') {
      const submit = document.querySelector('#submitBtn');
      submit.submit();
    } else domQueries().nameInpt.focus();
  };
  window.addEventListener('keydown', (e) => {
    processKbdInpt(e, e.key);
  });
};

export default createEventListeners;
