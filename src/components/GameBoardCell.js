import React from "react";
import "../style/GameBoard.css";
//props, 0 1 or other number
function GameBoardCell({ value, y, x, duckyLocation, preview }) {
  //incase we need this for styling for extra obstacles in the future
  //return <span className={`cell ${y}-${x}`}>0</span>;
  //pass in duckyLocation and if the duckyLocation is in the cordinates it takes over the classing of the grid
  //there is a num of 5 that we will move the duck
  //the user can move it right or down
  //how to move the box?

  if (duckyLocation[0] === y && duckyLocation[1] === x) {
    return <div className="ducky"></div>;
  } else if (value === 1) {
    if (preview === true) {
      return <div className="preview"></div>;
    } else {
      return <div className="bridge"></div>;
    }
  } else {
    return <div className={"gameboardcell"}></div>;
  }
}

export default GameBoardCell;
