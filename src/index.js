import style from './style.css';
import buildGame from './buildGame';

const main = (() => {
  // initializer
  buildGame();
  console.log(buildGame());
})();
