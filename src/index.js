import style from './style.css';
import buildGame from './buildGame';
import createEventListeners from './createEventListeners';
import setSvg from './setSvg';
import domQueries from './domQueries';

const main = (() => {
  // initializer
  buildGame();
  createEventListeners();
  setSvg();

  // testing
  const mockStart = (() => {
    const submit = document.querySelector('#submitBtn');
    submit.click();
  })();
})();
