import React, { useState } from "react";
import {
  createBridgeDown,
  createBridgeRight,
  createBridgeLeft,
  createBridgeUp,
  createGrid,
} from "../logic";
import GameBoard from "./GameBoard";

//maybe props are in app for difficulty? lets discuss on this
function Game() {
  //initializing grid 5x5
  const initialGrid = createGrid(5, 5);
  //but keeping concerns separated for now
  const [grid, setGrid] = useState(initialGrid); //maybe use useMemo for optimization?
  const [preViewGrid, setPreviewGrid] = useState();
  const [preViewGridBool, setPreviewGridBool] = useState(false);
  const [start, setStart] = useState([0, 0]);
  const [finishCoordinates, setFinishCoordinates] = useState([]);
  const [duckyLocation, setDuckyLocation] = useState(start);
  const [die, setDie] = useState(4);

  function updateBoard() {}
  //set location here
  //if the num is 5 ducky location changes to 5

  //this is if it is just down
  const moveDuckDown = () => {
    //using createBridge down from the logic.js file
    createBridgeDown(die, grid, duckyLocation);
    setDuckyLocation(createBridgeDown(die, grid, duckyLocation).coordinates);
  };

  //moves duck down and is set to the number of spots rolled by the die
  const moveDuckUp = () => {
    createBridgeUp(die, grid, duckyLocation);
    setDuckyLocation(createBridgeUp(die, grid, duckyLocation).coordinates);
  };

  //moves duck left and is set to the number of spots rolled by the die
  const moveDuckLeft = () => {
    createBridgeLeft(die, grid, duckyLocation);
    setDuckyLocation(createBridgeLeft(die, grid, duckyLocation).coordinates);
  };

  //moves duck right and is set to the number of spots rolled by the die
  const moveDuckRight = () => {
    const { newGrid, coordinates } = createBridgeRight(
      die,
      grid,
      duckyLocation
    );
    setDuckyLocation(coordinates);
    setGrid(newGrid);
    console.log();
  };

  function showDuckyLocation() {
    console.log(duckyLocation);
    console.log("grid", grid);
  }

  //preview what it would be like if the duck moved right as set per the die
  const moveDuckRightPreview = () => {
    //need to create a temp grid array
    const tempGrid = [];
    //use a for loop to loop through the rows of the array and push the temp grid to the spread rows
    for (let row of grid) {
      tempGrid.push([...row]);
    }

    //set the placement of the ducky and the cordinates on the tempGrid
    const { newGrid, coordinates } = createBridgeRight(
      die,
      tempGrid,
      duckyLocation
    );

    setPreviewGrid(newGrid);
    setPreviewGridBool(true);
  };

  function removePreview() {
    setPreviewGrid();
    setPreviewGridBool(false);
  }

  //
  function showDuckyLocation() {
    console.log(duckyLocation);
    console.log("grid", grid);
    console.log(preViewGrid);
    console.log(preViewGridBool);
  }

  //function for getting input from form
  function pullForm(event) {
    event.preventDefault();
    //information for flexDiretion
    const data = event.target.flexDirection.value;
    //if there is flex-direction then look at the other value after the :
    if (data.split(":")[0] === "flex-direction") {
      if (data.split(":")[1] === "row") {
        //duck can only move left or right
      }
    } else {
    }
    //else return alert you need flex direction
    console.log(data);
  }

  return (
    <>
      <div>
        <h1>Game Goes Here!</h1>
        {preViewGridBool ? (
          <GameBoard
            className="grid"
            grid={preViewGrid}
            duckyLocation={duckyLocation}
            preview={true}
          />
        ) : (
          <GameBoard
            className="grid"
            grid={grid}
            duckyLocation={duckyLocation}
            preview={false}
          />
        )}
      </div>
      <form className="form" onSubmit={pullForm}>
        <p className="inputformTop ">display:flex;</p>
        <input
          className="inputform inputText"
          name="flexDirection"
          placeholder="flex-direction:"
        ></input>
        <input
          className="inputform inputText"
          name="flexJustify"
          placeholder="justify-content:"
        ></input>
        <input
          className="inputformBot inputText"
          name="flexAlign"
          placeholder="align-items:"
        ></input>

        <button type="submit">Next</button>
      </form>

      <br />
      <br />
      <button onClick={moveDuckDown}>Button Down</button>
      <button onClick={moveDuckRightPreview}>right preview</button>
      <button onClick={moveDuckRight}>Button Right</button>
      <button onClick={moveDuckLeft}>Button Left</button>
      <button onClick={moveDuckUp}>Button Up</button>
      <button onClick={showDuckyLocation}>reveal Location</button>
      <button onClick={removePreview}>remove preview</button>
    </>
  );
}

export default Game;
