import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [turnColor, setTurnColor] = useState(1);

  const effortBoard: number[][] = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 3, 0, 0, 0, 0],
    [0, 0, 3, 2, 1, 0, 0, 0],
    [0, 0, 0, 1, 2, 3, 0, 0],
    [0, 0, 0, 0, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];

  const [board, setBoard] = useState(effortBoard);

  const directions = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
  ];

  const resetBoard = () => {
    setBoard(effortBoard);
    setTurnColor(1);
  };

  const clickCell = (x: number, y: number) => {
    // console.log(x, y);
    const newBoard: number[][] = JSON.parse(JSON.stringify(board));

    const checkBoard = (color: number) => {
      newBoard.forEach((row, t) => {
        row.forEach((_, s) => {
          if (newBoard[t][s] === 3) {
            newBoard[t][s] = 0;
          }
        });
      });

      //オセロの石を押せる候補地を生成。
      newBoard.forEach((row, t) => {
        row.forEach((_, s) => {
          if (newBoard[t][s] !== 0) return;

          for (const direction of directions) {
            let pass = false;
            for (let distance = 1; distance < 8; distance++) {
              const Y = t + direction[0] * distance;
              const X = s + direction[1] * distance;

              if (newBoard[Y] === undefined) {
                break;
              } else if (newBoard[X] === undefined) {
                break;
              } else if (newBoard[Y][X] % 3 === 0) {
                break;
              } else if (newBoard[Y][X] === color) {
                pass = true;
              } else if (newBoard[Y][X] === 3 - color) {
                if (pass) {
                  newBoard[t][s] = 3;
                }

                break;
              }
            }
          }
        });
      });

      setBoard(newBoard);
    };

    if (board[y][x] !== 3) return; //押した場所が候補地ではないので終了。

    let putStone = false;
    for (const direction of directions) {
      let pass = false;
      for (let distance = 1; distance < 8; distance++) {
        const Y = y + direction[0] * distance;
        const X = x + direction[1] * distance;

        if (board[Y] === undefined) {
          break;
        } else if (board[Y][X] % 3 === 0) {
          break;
        } else if (board[Y][X] === 3 - turnColor) {
          pass = true;
        } else if (board[Y][X] === turnColor) {
          if (pass !== true) break;

          for (let i = 0; i <= distance; i++) {
            putStone = true;
            newBoard[y + direction[0] * i][x + direction[1] * i] = turnColor;
          }
          break;
        }
      }
    }
    if (putStone) {
      setBoard(newBoard);
      checkBoard(turnColor);
      setTurnColor(3 - turnColor);
    }

    if (newBoard.some((row: number[]) => row.includes(3)) === false) {
      checkBoard(3 - turnColor);
      setTurnColor(turnColor);
      alert(
        `石を置ける場所がないため${3 - turnColor === 1 ? '黒' : '白'}のターンがスキップされます`
      );
    }
  };

  let blackStones = 0;
  let whiteStones = 0;

  // `board`の要素をループして、`color`の値に応じて`blackStones`と`whiteStones`をカウントします
  board.forEach((row) => {
    row.forEach((color) => {
      if (color === 1) {
        blackStones++;
      } else if (color === 2) {
        whiteStones++;
      }
    });
  });

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div
              className={`${styles.cell} ${color === 3 ? styles.orangeBorder : ''}`}
              onClick={() => clickCell(x, y)}
              key={`${x}-${y}`}
            >
              {color !== 0 && color !== 3 && (
                <div
                  className={styles.stone}
                  style={{ background: color === 1 ? '#000' : '#fff' }}
                />
              )}
            </div>
          ))
        )}
      </div>
      <div className={styles.sidePanel}>
        <div className={styles.turn}>
          <h1>{turnColor === 1 ? '黒' : '白'}の番です</h1>
        </div>
        <div className={styles.score}>
          <h1>＜得点＞</h1>
          <h1>黒: {blackStones}</h1>
          <h1>白: {whiteStones}</h1>
        </div>
        {/* リセットボタン */}
        <button className={styles.button} onClick={resetBoard}>
          リセット
        </button>
      </div>
    </div>
  );
};

export default Home;
