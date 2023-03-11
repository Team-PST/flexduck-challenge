import React from "react";
import "../style/GameBoardCell.css";
//props, 0 1 or other number
function GameBoardCell({ value, y, x }) {
  //incase we need this for styling for extra obstacles in the future
  // return <span className={`cell ${y}-${x}`}>0</span>;
  return <div className={"gameboardcell"}> </div>;
}

export default GameBoardCell;
