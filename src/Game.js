import React, { useState } from "react";
import {
  createBridgeDown,
  createBridgeLeft,
  createBridgeRight,
  createBridgeUp,
  createGrid,
} from "./logic";
import GameBoard from "./GameBoard";
//maybe props are in app for difficulty? lets discuss on this
function Game() {
  //might be able to combine game state into a single object
  //but keeping concerns separated for now
  const [grid, setGrid] = useState(); //maybe use useMemo for optimization?
  const [start, setStart] = useState([0, 0]);
  const [finishCoordinates, setFinishCoordinates] = useState([]);
  const [duckyLocation, setDuckyLocation] = useState([start]);

  //game reset function
  //update grid,
  //
  function updateBoard() {}
  return (
    <div>
      {/* stuff */}
      <h1>Game Goes Here!</h1>
      <GameBoard grid={grid} />
    </div>
  );
}

export default Game;
