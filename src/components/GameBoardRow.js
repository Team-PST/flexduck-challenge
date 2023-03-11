import React from "react";
import GameBoardCell from "./GameBoardCell";

function GameBoardRow({ row, y }) {
  return row.map((cell, index) => (
    <div>
      <GameBoardCell key={index} value={cell} y={y} x={index} />
    </div>
  ));
}

export default GameBoardRow;
