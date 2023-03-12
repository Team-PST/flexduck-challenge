import React, { useState } from "react";
import {
  previewDown,
  previewRight,
  previewLeft,
  previewUp,
  createGrid,
} from "../logic";
import GameBoard from "./GameBoard";

//maybe props are in app for difficulty? lets discuss on this
function Game() {
  const initialGrid = createGrid(5, 5);
  const [grid, setGrid] = useState(initialGrid);
  const [previewLocations, setPreviewLocations] = useState([[]]);
  const [start, setStart] = useState([0, 0]);
  const [finishCoordinates, setFinishCoordinates] = useState([4, 4]);
  const [duckyLocation, setDuckyLocation] = useState(start);
  const [die, setDie] = useState(5);
  const [turnsTaken, setTurnsTaken] = useState(0);
  function updateBoard() {}

  /*preview: manipulate coordinates based on css and show them on a z-index: 2
    with the preview having transluscent property, upon submit, we'll change the
    grid accordingly. 
    option 1: ducky's steps has to be in numerical order
    option 2: dont make it numerical and have either the start or end start on
              ducky location  */

  //this is if it is just down
  //requirements: preview location array state.
  /*  returns 2d array of */
  function previewLocationsDown() {
    //using preview down from the logic.js file
    const previewCoordinates = previewDown(die, duckyLocation);
    setPreviewLocations(previewCoordinates);
  }

  // moves duck down and is set to the number of spots rolled by the die
  function previewLocationsUp() {
    const previewCoordinates = previewUp(die, duckyLocation);
    setPreviewLocations(previewCoordinates);
  }

  //moves duck left and is set to the number of spots rolled by the die
  function previewLocationsLeft() {
    const previewCoordinates = previewLeft(die, duckyLocation);
    setPreviewLocations(previewCoordinates);
  }

  //moves duck right and is set to the number of spots rolled by the die
  function previewLocationsRight() {
    const previewCoordinates = previewRight(die, duckyLocation);
    setPreviewLocations(previewCoordinates);
  }

  function removePreview() {
    setPreviewLocations([[]]);
  }

  function commitRoll(event) {
    event.preventDefault();
    const newGrid = [...grid];
    for (let location of previewLocations) {
      newGrid[location[0]][location[1]] = 1;
    }
    setDuckyLocation(previewLocations[previewLocations.length - 1]);
    setPreviewLocations([[]]);
    setGrid(newGrid);
  }

  //function for getting input from form
  //only if everything is validated, we can
  function verifyForm(event) {
    //event.target.value == "column?"
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
        <GameBoard
          className="grid"
          grid={grid}
          duckyLocation={duckyLocation}
          previewLocations={previewLocations}
        />
      </div>
      <form className="form" onSubmit={commitRoll}>
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
      <button onClick={previewLocationsDown}>Preview Down</button>
      <button onClick={previewLocationsRight}>Preview Right</button>
      <button onClick={previewLocationsLeft}>Preview Left</button>
      <button onClick={previewLocationsUp}>Preview Up</button>

      <button onClick={removePreview}>remove preview</button>
    </>
  );
}

export default Game;
