import React from "react";
import GameBoardCell from "./GameBoardCell";
import {
  createBridgeDown,
  createBridgeLeft,
  createBridgeRight,
  createBridgeUp,
  createGrid,
} from "../logic";
function GameBoard({ grid }) {
  // grid.map(row.map)

  //function for creating grid
  function createGrid(num1, num2) {
    let grid = [];
    for (let i = 0; i < num1; i++) {
      let innerGrid = [];
      for (let j = 0; j < num2; j++) {
        innerGrid.push(0);
      }
      grid.push(innerGrid);
    }
    return grid;
  }

  // const cells = grid.map((row, rowIndex) => (
  //   <div key={rowIndex} className="row">
  //     {row.map((cell, colIndex) => (
  //       <GameBoardCell key={`${rowIndex}-${colIndex}`} />
  //     ))}
  //   </div>
  // ));

  console.log(createGrid(5, 7));
  return (
    <>
      <GameBoardCell>{createGrid(5, 7)}</GameBoardCell>
    </>
  );
}

export default GameBoard;
