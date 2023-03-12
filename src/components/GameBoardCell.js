import React from "react";
import "../style/GameBoard.scss";

function GameBoardCell({ value, y, x, duckyLocation, previewLocations }) {
  for (let i = 0; i < previewLocations.length; i++) {
    if (JSON.stringify([y, x]) === JSON.stringify(previewLocations[i])) {
      return <div className="preview"></div>;
    }
  }
  //check the duckyLocation for x and y of the cell and if the ducky Location is equal to the x, y props the for that
  //cell is changed to the ducky styling
  if (duckyLocation[0] === y && duckyLocation[1] === x) {
    return <div className="ducky"></div>;
    //if the value in the div equals one we change that to the preview class
    //the user want to to see if they may want to move to that position
  } else if (value === 1) {
    //if the value is equal to 1 and the preview is true we want to show the preview class

    //else if the calue is 1 but the preview is false the user doesn't want to see the preview but
    //they would like to bridge to that position and therefore we change the class
    return <div className="bridge"></div>;
  } else {
    //if the cell is not a ducky cell and not a value of 1 then we want to show a the normal gameboardcell styling
    return (
      <div className={"gameboardcell"}>
        <div className="wave"></div>
      </div>
    );
  }
}

export default GameBoardCell;
