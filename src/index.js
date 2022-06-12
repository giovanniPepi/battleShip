import style from './style.css';
import buildGame from './buildGame';
import makeDraggable from './makeDraggable';

const main = (() => {
  // initializer
  buildGame();
  // make boats draggable
  makeDraggable();
})();
