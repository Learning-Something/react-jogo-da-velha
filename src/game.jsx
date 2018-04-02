import React from "react";
import Board from "./board";

export default class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* STATUS */}</div>
          <div>{/* TODO */}</div>
        </div>
      </div>
    );
  }
}
