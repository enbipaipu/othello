import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [turnColor, setTurnColor] = useState(1);

  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 3, 0, 0, 0, 0],
    [0, 0, 3, 2, 1, 0, 0, 0],
    [0, 0, 0, 1, 2, 3, 0, 0],
    [0, 0, 0, 0, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const direction = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
  ];

  const clickCell = (x: number, y: number) => {
    console.log(x, y);
    const newBoard = JSON.parse(JSON.stringify(board));

    function checkBoard(color: number) {
      for (let i = 0; i < 8; i += 1) {
        for (let j = 0; j < 8; j += 1) {
          if (newBoard[i][j] === 3) {
            newBoard[i][j] = 0;
          }
        }
      }
      for (let i = 0; i < 8; i += 1) {
        for (let j = 0; j < 8; j += 1) {
          if (newBoard[i][j] === 0) {
            console.log(i, j);
            for (const t of direction) {
              let pass = false;
              console.log(t);
              for (let dis = 1; dis < 8; dis += 1) {
                console.log(dis);
                if (newBoard[i + t[0] * dis] === undefined) {
                  console.log('e');
                  break;
                } else if (newBoard[j + t[1] * dis] === undefined) {
                  console.log('d');
                  break;
                } else if (newBoard[i + t[0] * dis][j + t[1] * dis] % 3 === 0) {
                  console.log('c');
                  break;
                } else if (newBoard[i + t[0] * dis][j + t[1] * dis] === color) {
                  pass = true;
                  console.log('b');
                } else if (newBoard[i + t[0] * dis][j + t[1] * dis] === 3 - color) {
                  console.log('a');
                  if (pass) {
                    newBoard[i][j] = 3;
                    console.log('aaaaaaaaaaaaaaaa');
                  }

                  break;
                }
              }
            }
          }
        }
      }
      setBoard(newBoard);
    }

    if (board[y][x] === 3) {
      let putStone = false;
      for (const s of direction) {
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
      alert('パスされました');
    }
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
                  style={{ background: color === 1 ? '#000' : color === 2 ? '#fff' : '#ff8800' }}
                />
              )}
            </div>
          ))
        )}
      </div>
      {`${turnColor === 1 ? '黒' : '白'}の番です`};
    </div>
  );
};

export default Home;