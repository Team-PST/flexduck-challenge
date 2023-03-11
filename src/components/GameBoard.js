import React from "react";
import GameBoardRow from "./GameBoardRow";
import "../style/GameBoard.css";

function GameBoard({ grid }) {
  // function createGrid(num1, num2) {
  //   let grid = [];
  //   for (let i = 0; i < num1; i++) {
  //     let innerGrid = [];
  //     for (let j = 0; j < num2; j++) {
  //       innerGrid.push(0);
  //     }
  //     grid.push(innerGrid);
  //   }
  //   return grid;
  // }

  // console.log(createGrid(5, 5));
  console.log(grid);
  return (
    <div>
      {grid.map((row, index) => (
        <GameBoardRow key={index} row={row} y={index} />
      ))}
    </div>
  );
}

export default GameBoard;
