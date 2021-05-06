import React from 'react';
import { Button } from 'react-bootstrap';

export const PlayAgain = (props) => (
  <div className="game-done">
    <div
      className="message"
      style={{ color: props.gameStatus === 'lost' ? 'red' : 'green' }}
    >
      {props.gameStatus === 'lost' ? 'Game Over' : 'Nice'}
    </div>
    <Button className="mt-4" onClick={props.onClick}>
      Play Again
    </Button>
  </div>
);
