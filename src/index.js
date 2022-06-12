import style from './style.css';
import buildGame from './buildGame';
import createEventListeners from './createEventListeners';

const main = (() => {
  // initializer
  buildGame();
  createEventListeners();
})();
