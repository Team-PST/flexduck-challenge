import React, { useState } from "react";
import {
  previewDownLocations,
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
  const [previewLocations, setPreviewLocations] = useState();
  const [start, setStart] = useState([0, 0]);
  const [finishCoordinates, setFinishCoordinates] = useState([]);
  const [duckyLocation, setDuckyLocation] = useState(start);
  const [die, setDie] = useState(4);

  function updateBoard() {}
  //set location here
  //if the num is 5 ducky location changes to 5

  /*preview: manipulate coordinates based on css and show them on a z-index: 2
    with the preview having transluscent property, upon submit, we'll change the
    grid accordingly. 
    option 1: ducky's steps has to be in numerical order
    option 2: dont make it numerical and have either the start or end start on
              ducky location  */

  //this is if it is just down
  //requirements: preview location array state.
  async function previewDown() {
    //using createBridge down from the logic.js file
    const previewCoordinates = await previewDownLocations(die, duckyLocation);
    setPreviewLocations(previewCoordinates);
    console.log(previewLocations);
    // setDuckyLocation(previewDown(die, grid, duckyLocation).coordinates);
  }

  //moves duck down and is set to the number of spots rolled by the die
  // const moveDuckUp = () => {
  //   createBridgeUp(die, grid, duckyLocation);
  //   setDuckyLocation(createBridgeUp(die, grid, duckyLocation).coordinates);
  // };

  // //moves duck left and is set to the number of spots rolled by the die
  // const moveDuckLeft = () => {
  //   createBridgeLeft(die, grid, duckyLocation);
  //   setDuckyLocation(createBridgeLeft(die, grid, duckyLocation).coordinates);
  // };

  // //moves duck right and is set to the number of spots rolled by the die
  // const moveDuckRight = () => {
  //   const { newGrid, coordinates } = createBridgeRight(
  //     die,
  //     grid,
  //     duckyLocation
  //   );
  //   setDuckyLocation(coordinates);
  //   setGrid(newGrid);
  //   console.log();
  // };

  function showDuckyLocation() {
    console.log(duckyLocation);
    console.log("grid", grid);
  }

  // //preview what it would be like if the duck moved right as set per the die
  // const moveDuckRightPreview = () => {
  //   //need to create a temp grid array
  //   const tempGrid = [];
  //   //use a for loop to loop through the rows of the array and push the temp grid to the spread rows
  //   for (let row of grid) {
  //     tempGrid.push([...row]);
  //   }

  //   //set the placement of the ducky and the cordinates on the temp
  //   const { newGrid, coordinates } = createBridgeRight(
  //     die,
  //     tempGrid,
  //     duckyLocation
  //   );

  //   setPreviewGrid(newGrid);
  //   setPreviewGridBool(true);
  // };

  //
  function showDuckyLocation() {
    console.log(duckyLocation);
    console.log("grid", grid);
    console.log(previewLocations);
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
      <div className="gameboard-grid">
        <div>
          <h1>Game Goes Here!</h1>
          <GameBoard
            className="grid"
            grid={grid}
            duckyLocation={duckyLocation}
            previewLocations={previewLocations}
          />
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
        <button onClick={previewDown}>Button Down</button>
        {/* <button onClick={moveDuckRightPreview}>right preview</button>
      <button onClick={moveDuckRight}>Button Right</button>
      <button onClick={moveDuckLeft}>Button Left</button>
      <button onClick={moveDuckUp}>Button Up</button>
      <button onClick={showDuckyLocation}>reveal Location</button>
      <button onClick={removePreview}>remove preview</button> */}
      </div>
    </>
  );
}

export default Game;
