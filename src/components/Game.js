import React, { useState } from "react";
import {
  createBridgeDown,
  createBridgeLeft,
  createBridgeRight,
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

  const moveDuck = () => {
    createBridgeDown(die, grid, duckyLocation);
    //console.log(createBridgeDown(die, grid, duckyLocation));
    setDuckyLocation(createBridgeDown(die, grid, duckyLocation).coordinates);
    // alert("does this work");
  };

  return (
    <>
      <div>
        {/* stuff */}
        <h1>Game Goes Here!</h1>
        <GameBoard className="grid" grid={grid} duckyLocation={duckyLocation} />
      </div>
      <button onClick={moveDuck}>Button</button>
    </>
  );
}

export default Game;
