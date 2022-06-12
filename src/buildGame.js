import Ship from './Ship';
import GameBoard from './GameBoard';
import Player from './Player';
import AI from './ai';

const buildGame = () => {
  // gameboards
  const playerBoard = new GameBoard();
  const AIBoard = new GameBoard();

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
    AIBoard,
    player,
    ai
  };
};

export default buildGame;
