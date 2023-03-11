import React from "react";
import GameBoardCell from "./GameBoardCell";

function GameBoardRow({ row, y, duckyLocation }) {
  //
  return row.map((cell, index) => (
    <GameBoardCell
      className="gameboardrow"
      key={index}
      value={cell}
      y={y}
      x={index}
      duckyLocation={duckyLocation}
    />
  ));
}

export default GameBoardRow;
