import React from "react";
import GameBoardRow from "./GameBoardRow";
import "../style/GameBoard.css";

function GameBoard({ grid, duckyLocation }) {
  return (
    <div className="gameboard">
      {grid.map((row, index) => (
        <div className="gameboard-div">
          <GameBoardRow
            key={index}
            row={row}
            y={index}
            duckyLocation={duckyLocation}
          />
        </div>
      ))}
    </div>
  );
}

export default GameBoard;
