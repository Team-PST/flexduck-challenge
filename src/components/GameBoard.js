import React from "react";
import GameBoardRow from "./GameBoardRow";
import "../style/GameBoard.css";
function GameBoard({ grid }) {
  return (
    <div className="grid">
      {grid.map((row, index) => (
        <GameBoardRow key={index} row={row} y={index} />
      ))}
    </div>
  );
}

export default GameBoard;
