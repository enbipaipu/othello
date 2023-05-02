import { useState } from 'react';
import styles from './index.module.css';
import { dir } from 'console';

const Home = () => {
  const [turnColor, setTurnColor] = useState(1);

  //prettier-ignore
  const [board, setBoard] = useState([
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,1,2,0,0,0],
    [0,0,0,2,1,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
        
  ]);
  const dir = []

  const clickCell = (x: number, y: number) => {
    console.log(x, y);
    const newBoard = JSON.parse(JSON.stringify(board));

    if (board[y][x] === 0) {
      for(dir)
      let a = false;
      for (let distans = 1; distans < 8; distans += 1) {
        if (board[y + 1 * distans] === undefined) {
          break;
        } else if (board[y + 1 * distans][x + 0 * distans] === 0) {
          break;
        } else if (board[y + 1 * distans][x + 0 * distans] === 3 - turnColor) {
          a = true;
        } else if (board[y + 1 * distans][x + 0 * distans] === turnColor) {
          for (let i = distans; i >= 0; i -= 1) {
            if (a) {
              newBoard[y + 1 * i][x + 0 * i] = turnColor;
            }
          }

          setTurnColor(3 - turnColor);
          break;
        }
      }
      // else if (
      //   board[y + 1][x - 1] !== undefined &&
      //   board[y + 1][x - 1] !== 0 &&
      //   board[y + 1][x - 1] !== turnColor
      // ) {
      //   newBoard[y][x] = turnColor;
      //   setTurnColor(3 - turnColor);
      // } else if (
      //   board[x - 1] !== undefined &&
      //   board[y][x - 1] !== 0 &&
      //   board[y][x - 1] !== turnColor
      // ) {
      //   newBoard[y][x] = turnColor;
      //   setTurnColor(3 - turnColor);
      // } else if (
      //   board[y - 1][x - 1] !== undefined &&
      //   board[y - 1][x - 1] !== 0 &&
      //   board[y - 1][x - 1] !== turnColor
      // ) {
      //   newBoard[y][x] = turnColor;
      //   setTurnColor(3 - turnColor);
      // } else if (
      //   board[y - 1] !== undefined &&
      //   board[y - 1][x] !== 0 &&
      //   board[y - 1][x] !== turnColor
      // ) {
      //   newBoard[y][x] = turnColor;
      //   setTurnColor(3 - turnColor);
      // } else if (
      //   board[y - 1][x + 1] !== undefined &&
      //   board[y + 1][x + 1] !== 0 &&
      //   board[y + 1][x + 1] !== turnColor
      // ) {
      //   newBoard[y][x] = turnColor;
      //   setTurnColor(3 - turnColor);
      // } else if (
      //   board[y][x + 1] !== undefined &&
      //   board[y][x + 1] !== 0 &&
      //   board[y][x + 1] !== turnColor
      // ) {
      //   newBoard[y][x] = turnColor;
      //   setTurnColor(3 - turnColor);
      // } else if (
      //   board[y + 1][x + 1] !== undefined &&
      //   board[y + 1][x + 1] !== 0 &&
      //   board[y + 1][x + 1] !== turnColor
      // ) {
      //   newBoard[y][x] = turnColor;
      //   setTurnColor(3 - turnColor);
      // }
    }

    setBoard(newBoard);
  };

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.cell} onClick={() => clickCell(x, y)} key={`${x}-${y}`}>
              {color !== 0 && (
                <div
                  className={styles.stone}
                  style={{ background: color === 1 ? '#000' : '#fff' }}
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
