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

          for (const direc of directions) {
            let pass = false;
            if (newBoard[t][s] === 3) console.log('t:', t, 's:', s, 'newBoard', newBoard[t][s]);
            for (let dis = 1; dis < 8; dis += 1) {
              if (newBoard[t + direc[0] * dis] === undefined) {
                break;
              } else if (newBoard[s + direc[1] * dis] === undefined) {
                break;
              } else if (newBoard[t + direc[0] * dis][s + direc[1] * dis] % 3 === 0) {
                break;
              } else if (newBoard[t + direc[0] * dis][s + direc[1] * dis] === color) {
                pass = true;
              } else if (newBoard[t + direc[0] * dis][s + direc[1] * dis] === 3 - color) {
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

    if (board[y][x] === 3) {
      let putStone = false;
      for (const s of directions) {
        let passWhite = false;
        for (let distance = 1; distance < 8; distance += 1) {
          if (board[y + s[0] * distance] === undefined) {
            break;
          } else if (board[y + s[0] * distance][x + s[1] * distance] === (0 || 3)) {
            break;
          } else if (board[y + s[0] * distance][x + s[1] * distance] === 3 - turnColor) {
            passWhite = true;
          } else if (board[y + s[0] * distance][x + s[1] * distance] === turnColor) {
            for (let i = distance; i >= 0; i -= 1) {
              if (passWhite) {
                putStone = true;
                newBoard[y + s[0] * i][x + s[1] * i] = turnColor;
              }
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
