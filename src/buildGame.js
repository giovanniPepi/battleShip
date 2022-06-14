import Ship from './Ship';
import GameBoard from './GameBoard';
import Player from './Player';
import AI from './ai';
import placeAIShip from './placeAIShip';
import domQueries from './domQueries';
import makeDraggable from './makeDraggable';
import updateDisplay from './updateDisplay';
import endGame from './endgame';

const buildGame = () => {
  // gameboards
  const playerBoard = new GameBoard();
  const aiBoard = new GameBoard();

  // players
  const player = new Player();
  const ai = new AI('AI', player, playerBoard);

  // playerShips
  const carrier = new Ship(5);
  const battleship = new Ship(4);
  const destroyer = new Ship(3);
  const submarine = new Ship(3);
  const patrolboat = new Ship(2);

  // AI Ships
  const AIcarrier = new Ship(5);
  const AIbattleship = new Ship(4);
  const AIdestroyer = new Ship(3);
  const AIsubmarine = new Ship(3);
  const AIpatrolboat = new Ship(2);

  // makes player boats draggable
  makeDraggable(domQueries().battleshipHTML);
  makeDraggable(domQueries().carrierHTML);
  makeDraggable(domQueries().submarinehipHTML);
  makeDraggable(domQueries().destroyerHTML);
  makeDraggable(domQueries().patrolboatHTML);

  // places AI Ships
  placeAIShip(AIcarrier, aiBoard);
  placeAIShip(AIbattleship, aiBoard);
  placeAIShip(AIdestroyer, aiBoard);
  placeAIShip(AIsubmarine, aiBoard);
  placeAIShip(AIpatrolboat, aiBoard);

  // attacks
  const attack = (e) => {
    const x = e.getAttribute('data-x');
    const y = e.getAttribute('data-y');

    player.attack(x, y, ai, aiBoard);
    updateDisplay('aiBoard', aiBoard, false);
    // disble clicking on already hit places
    e.style.pointerEvents = 'none';
    // checks if all ships are hit and calls for winner before each round
    if (aiBoard.checkAllSunk()) {
      endGame(player.getName());
    }

    // attacks, return the last sucessfull attack

    const lastAttack = ai.generateRandomAttack();
    updateDisplay('playerBoard', playerBoard, lastAttack);
    if (playerBoard.getLastSuccessfulAttack().length > 0) {
      console.log(playerBoard.getLastSuccessfulAttack());
    }

    if (playerBoard.checkAllSunk()) {
      endGame('AI');
    }
  };

  // dropShip - through dragging
  const dropShip = (e) => {
    const data = e.dataTransfer.getData('text');
    const x = parseInt(e.target.getAttribute('data-x'), 10);
    const y = parseInt(e.target.getAttribute('data-y'), 10);

    // helper function
    const setBoardToDom = (boat) => {
      playerBoard.placeShip(boat, x, y);
      updateDisplay('playerBoard', playerBoard);
      const ship = document.querySelector(`#${data}`);
      domQueries().draggable.removeChild(ship);
      if (domQueries().draggable.childNodes.length <= 6) {
        domQueries().draggable.style.display = 'none';
        domQueries().enemy.style.display = 'flex';
      }
    };

    switch (data) {
      case 'battleship':
        if (playerBoard.checkShipPlacement(battleship.length, x, y)) {
          setBoardToDom(battleship);
        }
        break;
      case 'carrier':
        if (playerBoard.checkShipPlacement(carrier.length, x, y)) {
          setBoardToDom(carrier);
        }
        break;
      case 'submarine':
        if (playerBoard.checkShipPlacement(submarine.length, x, y)) {
          setBoardToDom(submarine);
        }
        break;
      case 'destroyer':
        if (playerBoard.checkShipPlacement(destroyer.length, x, y)) {
          setBoardToDom(destroyer);
        }
        break;
      case 'patrolboat':
        if (playerBoard.checkShipPlacement(patrolboat.length, x, y)) {
          setBoardToDom(patrolboat);
        }
        break;
      default:
        console.log('error in data');
    }
  };

  // places boards on DOM
  const buildDOMboard = (boardName) => {
    const boardClass = document.querySelector(`.${boardName}`);
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('data-x', j);
        cell.setAttribute('data-y', i);

        // adds attacking through DOM
        if (boardName === 'aiBoard') {
          cell.addEventListener('click', (e) => {
            attack(e.target);
          });
        } else if (boardName === 'playerBoard') {
          cell.addEventListener('dragover', (e) => {
            e.preventDefault();
          });
          cell.addEventListener('drop', (e) => {
            e.preventDefault();
            dropShip(e);
          });
        }
        boardClass.appendChild(cell);
      }
    }
  };

  buildDOMboard('playerBoard');
  buildDOMboard('aiBoard');

  // nameSetter
  domQueries().nameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = domQueries().nameInpt.value || 'Player 1';
    player.setName(name);
    domQueries().playerName.textContent = `${player.getName()}'s board`;
    domQueries().nameModal.style.display = 'none';
  });

  return {
    carrier,
    battleship,
    destroyer,
    submarine,
    patrolboat,
    AIcarrier,
    AIbattleship,
    AIdestroyer,
    AIsubmarine,
    AIpatrolboat,
    playerBoard,
    aiBoard,
    player,
    ai
  };
};

export default buildGame;
