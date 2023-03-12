import React from "react";
import GameBoardRow from "./GameBoardRow";
import "../style/GameBoard.scss";

function GameBoard({ grid, duckyLocation, previewLocations }) {
  return (
    <div className="gameboard">
      {grid.map((row, index) => (
        <div className="gameboard--div">
          <GameBoardRow
            key={index}
            row={row}
            y={index}
            duckyLocation={duckyLocation}
            previewLocations={previewLocations}
          />
        </div>
      ))}
    </div>
  );
}

export default GameBoard;
