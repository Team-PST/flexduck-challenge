import React from "react";
import GameBoardCell from "./GameBoardCell";

function GameBoardRow({
  row,
  y,
  duckyLocation,
  previewLocations,
  winCondition,
}) {
  //
  return row.map((cell, index) => (
    <GameBoardCell
      className="gameboardrow"
      key={index}
      value={cell}
      y={y}
      x={index}
      duckyLocation={duckyLocation}
      previewLocations={previewLocations}
      winCondition={winCondition}
    />
  ));
}

export default GameBoardRow;
