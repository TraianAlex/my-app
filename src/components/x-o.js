// useState: tic tac toe
// https://codesandbox.io/s/sleepy-browser-gftkp?file=/src/utils.js
// http://localhost:3000/isolated/final/04.js

import * as React from "react";
// @ts-ignore
import classes from "./x-o.module.css";

function Board() {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  console.log(squares);

  const nextValue = calculateNextValue(squares);
  const winner = calculateWinner(squares);
  const status = calculateStatus(winner, squares, nextValue);

  function selectSquare(square) {
    if (winner || squares[square]) {
      return;
    }
    const squaresCopy = [...squares];
    squaresCopy[square] = nextValue;
    setSquares(squaresCopy);
  }

  function restart() {
    setSquares(Array(9).fill(null));
  }

  function renderSquare(i) {
    return (
      <button className={classes.square} onClick={() => selectSquare(i)}>
        {squares[i]}
      </button>
    );
  }

  return (
    <div>
      <div className={classes.status}>{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button className={classes.restart} onClick={restart}>
        restart
      </button>
    </div>
  );
}

function Game() {
  return (
    <div className={classes.game}>
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

function calculateStatus(winner, squares, nextValue) {
  return winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
    ? `Scratch: Cat's game`
    : `Next player: ${nextValue}`;
}

function calculateNextValue(squares) {
  const xSquaresCount =
    squares.filter((r) => r === "X").length;
  const oSquaresCount =
    squares.filter((r) => r === "O").length;
  return oSquaresCount === xSquaresCount ? "X" : "O";
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function AppXo() {
  return <Game />;
}

export default AppXo;
