import React from "react";
import "../style/GameBoardCell.css";
//props, 0 1 or other number
function GameBoardCell({ value, y, x }) {
  return <div className={`cell ${y}-${x}`}>0</div>;
}

export default GameBoardCell;
