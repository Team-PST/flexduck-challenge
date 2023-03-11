import React from "react";
import "../style/GameBoardCell.css";
//props, 0 1 or other number
function GameBoardCell({ value, y, x }) {
  return <span className={`cell ${y}-${x}`}>0</span>;
}

export default GameBoardCell;
