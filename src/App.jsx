import React, { useState, useEffect, useRef } from 'react';

const BOARD_SIZE = 20;    // plansza 20x20
const INITIAL_SNAKE = [
  { x: 8, y: 10 },
  { x: 9, y: 10 },
  { x: 10, y: 10 },
];
const DIRECTIONS = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
};

function Snake() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(DIRECTIONS.ArrowRight);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [gameOver, setGameOver] = useState(false);
  const moveRef = useRef();

  // Ruch węża - używamy useRef, żeby mieć aktualny kierunek w funkcji ruchu
  moveRef.current = direction;

  // Funkcja generująca jedzenie w losowej pozycji spoza węża
  function generateFood(snakePositions) {
    let newFood;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * BOARD_SIZE),
        y: Math.floor(Math.random() * BOARD_SIZE),
      };
      // Sprawdzamy, czy jedzenie nie pojawiło się na wężu
      if (!snakePositions.some(pos => pos.x === newFood.x && pos.y === newFood.y)) {
        break;
      }
    }
    return newFood;
  }

  // Sterowanie klawiaturą – zmiana kierunku
  useEffect(() => {
    function handleKey(e) {
      const newDirection = DIRECTIONS[e.key];
      if (newDirection) {
        // Zapobiegamy ruchowi w przeciwnym kierunku (np. prawo->lewo bezpośrednio)
        const lastDirection = moveRef.current;
        if (
          (newDirection.x !== -lastDirection.x || newDirection.y !== -lastDirection.y)
        ) {
          setDirection(newDirection);
        }
      }
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Logika ruchu
  useEffect(() => {
    if (gameOver) return;

    const timerId = setInterval(() => {
      setSnake(prevSnake => {
        const head = prevSnake[prevSnake.length - 1];
        const newHead = {
          x: (head.x + moveRef.current.x + BOARD_SIZE) % BOARD_SIZE,
          y: (head.y + moveRef.current.y + BOARD_SIZE) % BOARD_SIZE,
        };

        // Sprawdzamy kolizję z samym sobą - game over
        if (prevSnake.some(pos => pos.x === newHead.x && pos.y === newHead.y)) {
          setGameOver(true);
          return prevSnake;
        }

        // Jeśli zjadł jedzenie - zwiększamy węża
        let newSnake;
        if (newHead.x === food.x && newHead.y === food.y) {
          newSnake = [...prevSnake, newHead];
          setFood(generateFood(newSnake));
        } else {
          // Normalny ruch - przesuwamy węża
          newSnake = [...prevSnake.slice(1), newHead];
        }
        return newSnake;
      });
    }, 150);

    return () => clearInterval(timerId);
  }, [food, gameOver]);

  // Render pola
  function renderCell(x, y) {
    const isSnake = snake.some(pos => pos.x === x && pos.y === y);
    const isFood = food.x === x && food.y === y;

    const style = {
      width: 20,
      height: 20,
      border: '1px solid #ccc',
      backgroundColor: isFood ? 'red' : (isSnake ? 'green' : 'white'),
    };
    return <div key={`${x}-${y}`} style={style} />;
  }

  return (
    <div>
      <h1>Snake w React</h1>
      {gameOver && <h2>Game Over! Odśwież, żeby zagrać ponownie.</h2>}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${BOARD_SIZE}, 20px)`,
          gridTemplateRows: `repeat(${BOARD_SIZE}, 20px)`,
          width: BOARD_SIZE * 20,
          margin: '0 auto',
          border: '2px solid black',
        }}
      >
        {[...Array(BOARD_SIZE)].map((_, y) =>
          [...Array(BOARD_SIZE)].map((_, x) => renderCell(x, y))
        )}
      </div>
      <p>Sterowanie: strzałki klawiatury</p>
    </div>
  );
}

export default Snake;
