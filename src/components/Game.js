import React, { useEffect, useState } from "react";
import {
  createBridgeDown,
  createBridgeRight,
  createBridgeLeft,
  createBridgeUp,
  createGrid,
} from "../logic";
import Button from "./Button";
import GameBoard from "./GameBoard";

//maybe props are in app for difficulty? lets discuss on this
function Game() {
  const initialGrid = createGrid(5, 5);
  //might be able to combine game state into a single object
  //but keeping concerns separated for now
  const [grid, setGrid] = useState(initialGrid); //maybe use useMemo for optimization?
  const [preViewGrid, setPreviewGrid] = useState();
  const [preViewGridBool, setPreviewGridBool] = useState(false);
  const [start, setStart] = useState([0, 0]);
  const [finishCoordinates, setFinishCoordinates] = useState([]);
  const [duckyLocation, setDuckyLocation] = useState(start);
  const [die, setDie] = useState(4);
  //game reset function
  //update grid,
  //
  function updateBoard() {}
  //set location here
  //if the num is 5 ducky location changes to 5

  useEffect(
    function checkIfPreview() {
      async function checkPreview() {
        setPreviewGridBool(false);
      }
      checkPreview();
    },
    [preViewGridBool]
  );
  //this is if it is just down
  const moveDuckDown = () => {
    createBridgeDown(die, grid, duckyLocation);
    //console.log(createBridgeDown(die, grid, duckyLocation));
    setDuckyLocation(createBridgeDown(die, grid, duckyLocation).coordinates);
    // alert("does this work");
  };
  //this is if it is just down
  const moveDuckUp = () => {
    createBridgeUp(die, grid, duckyLocation);
    //console.log(createBridgeDown(die, grid, duckyLocation));
    setDuckyLocation(createBridgeUp(die, grid, duckyLocation).coordinates);
    // alert("does this work");
  };

  const moveDuckLeft = () => {
    createBridgeLeft(die, grid, duckyLocation);
    //console.log(createBridgeDown(die, grid, duckyLocation));
    setDuckyLocation(createBridgeLeft(die, grid, duckyLocation).coordinates);
    // alert("does this work");
  };

  const moveDuckRight = () => {
    const { newGrid, coordinates } = createBridgeRight(
      die,
      grid,
      duckyLocation
    );
    //console.log(createBridgeDown(die, grid, duckyLocation));
    setDuckyLocation(coordinates);
    setGrid(newGrid);
    console.log();
    // setGrid(newGrid);
    // alert("does this work");
  };
  function showDuckyLocation() {
    console.log(duckyLocation);
    console.log("grid", grid);
  }

  const moveDuckRightPreview = () => {
    const { newGrid, coordinates } = createBridgeRight(
      die,
      grid,
      duckyLocation
    );
    //console.log(createBridgeDown(die, grid, duckyLocation));

    setPreviewGrid(newGrid);
    setPreviewGridBool(true);
    // setGrid(newGrid);
    // alert("does this work");
    console.log(preViewGridBool);
  };

  function removePreview() {
    setPreviewGrid();
    setPreviewGridBool(false);
    preViewGridBool
      ? console.log("bool is true", preViewGridBool)
      : console.log("bool is false");
  }

  function showDuckyLocation() {
    console.log(duckyLocation);
    console.log("grid", grid);
    console.log(preViewGrid);
    console.log(preViewGridBool);
  }

  return (
    <>
      <div>
        {/* stuff */}
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

      {`{ display: Flex
          
        }`}
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
