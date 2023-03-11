import React from "react";
import GameBoardRow from "./GameBoardRow";
import "../style/GameBoard.css";
function GameBoard({ grid }) {
  return (
    <div className="grid">
      {grid.map((row, index) => (
        <div>
          <GameBoardRow key={index} row={row} y={index} />
        </div>
      ))}
    </div>
  );
}

export default GameBoard;
