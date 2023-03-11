import React from "react";
import GameBoardCell from "./GameBoardCell";

function GameBoardRow({ row, y }) {
  return row.map((cell, index) => (
    <GameBoardCell key={index} value={cell} y={y} x={index} />
  ));
}

export default GameBoardRow;
