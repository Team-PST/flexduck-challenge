import React from "react";
import GameBoardRow from "./GameBoardRow";
import "../style/GameBoard.css";

function GameBoard({
  grid,
  duckyLocation,
  previewLocations,
  finishCoordinates,
}) {
  return (
    <div className="gameboard">
      {grid.map((row, index) => (
        <div className="gameboard-div">
          <GameBoardRow
            key={index}
            row={row}
            y={index}
            duckyLocation={duckyLocation}
            previewLocations={previewLocations}
            finishCoordinates={finishCoordinates}
          />
        </div>
      ))}
    </div>
  );
}

export default GameBoard;
