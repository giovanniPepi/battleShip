import style from './style.css';
import buildGame from './buildGame';
import createEventListeners from './createEventListeners';
import setSvg from './setSvg';

const main = (() => {
  // initializer
  buildGame();
  createEventListeners();
  setSvg();
})();
