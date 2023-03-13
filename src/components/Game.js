import React, { useEffect, useState } from "react";
import {
  previewDown,
  previewRight,
  previewLeft,
  previewUp,
  createGrid,
  rowReverse,
  column,
  columnReverse,
} from "../logic";
import GameBoard from "./GameBoard";

//maybe props are in app for difficulty? lets discuss on this
function Game() {
  //initializing grid 5x5
  const initialGrid = createGrid(5, 5);
  const initialErrorData = {
    "flex-direction": "no",
    "justify-content": "no",
    "align-items": "no",
  };
  const initialFormData = {
    "flex-direction": "",
    "justify-content": "",
    "align-items": "",
  };
  //but keeping concerns separated for now
  const [grid, setGrid] = useState(initialGrid); //maybe use useMemo for optimization?
  const [previewQueue, setPreviewQueue] = useState([]);
  const [previewLocations, setPreviewLocations] = useState([[]]);
  const [start, setStart] = useState([0, 0]);
  const [finishCoordinates, setFinishCoordinates] = useState([4, 4]);
  const [duckyLocation, setDuckyLocation] = useState(start);
  const [die, setDie] = useState(3);
  const [turnsTaken, setTurnsTaken] = useState(0);
  const [formData, setFormData] = useState(initialFormData);
  const [errorForm, setErrorForm] = useState(initialErrorData);
  const [direction, setDirection] = useState("");
  const [justify, setJustify] = useState("");
  const [align, setAlign] = useState("");

  function updateBoard() {}

  const flexProps = {
    "flex-direction": {
      row: previewRight,
      "row-reverse": rowReverse,
      column: column,
      "column-reverse": columnReverse,
    },
    "align-items": {
      center: "center",
      "flex-start": "flex-start",
      "flex-end": "flex-end",
      "space-between": "space-between",
      "space-around": "space-around",
      "space-evenly": "space-evenly",
    },
    "justify-content": {
      center: "center",
      "flex-start": "flex-start",
      "flex-end": "flex-end",
      "space-between": "space-between",
      "space-around": "space-around",
      "space-evenly": "space-evenly",
    },
    // "align-items": ["end", "start", "center", "stretch", "baseline"],
  };

  function previewLocationsDown() {
    //using preview down from the logic.js file
    const previewCoordinates = previewDown(die, duckyLocation);
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

  function handleErrorForm(name, state) {
    setErrorForm((fData) => ({
      ...fData,
      [name]: state,
    }));
  }

  //############################################################################
  /******************** CURRENTLY WORKING ON THIS ******************************/
  async function handleChange(evt) {
    evt.preventDefault();
    const name = evt.target.name;
    const value = evt.target.value;
    const fnQueue = [];
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    const fn1 = verifyFlexProps("flex-direction", newFormData);
    const fn2 = verifyFlexProps("justify-content", newFormData);
    const fn3 = verifyFlexProps("align-items", newFormData);
    let previewCoordinates;
    if (fn1) {
      previewCoordinates = fn1(die);
    }
    if (fn2) {
      previewCoordinates = fn2(previewCoordinates);
    }
    if (fn3) {
      previewCoordinates = fn3(previewCoordinates);
    }
    setPreviewLocations(previewCoordinates);
  }
  //function to verfiyFlexProps
  function verifyFlexProps(name, newFormData) {
    const flexBoxPropValue = newFormData[name].replace(/\s/g, "").split(":");
    const flexBoxProperty = flexBoxPropValue[0];
    const flexBoxValue = flexBoxPropValue[1];
    if (
      flexBoxProperty === name &&
      flexProps[flexBoxProperty] &&
      flexProps[flexBoxProperty][flexBoxValue]
    ) {
      const fn = flexProps[flexBoxProperty][flexBoxValue];

      setErrorForm((prevErrorForm) => ({
        ...prevErrorForm,
        [name]: "yes",
      }));
      return fn;
    } else {
      setErrorForm((prevErrorForm) => ({
        ...prevErrorForm,
        [name]: "no",
      }));
      return false;
    }
  }
  //############################################################################

  return (
    <>
      <div className="game">
        <h1>Create the bridge necessary to get the duck to the end!</h1>
        <GameBoard
          className="grid"
          grid={grid}
          duckyLocation={duckyLocation}
          previewLocations={previewLocations}
        />
        <div>
          <form className="form" onSubmit={commitRoll}>
            <p className="form--top">display:flex;</p>
            <input
              className={`form--input form--text ${errorForm["flex-direction"]}`}
              name="flex-direction"
              placeholder="flex-direction:"
              onChange={handleChange}
              value={formData["flex-direction"]}
            ></input>
            <input
              className={`form--input form--text ${errorForm["justify-content"]}`}
              name="justify-content"
              placeholder="justify-content:"
              onChange={handleChange}
              value={formData["justify-content"]}
            ></input>
            <input
              className={`form--input form--text ${errorForm["align-items"]}`}
              name="align-items"
              placeholder="align-items:"
              onChange={handleChange}
              value={formData["align-items"]}
            ></input>

            <button type="submit">Next</button>
          </form>
        </div>
        <div className="game__buttons">
          <div className="game__buttons--direction">
            {/* <button onClick={previewDown}>Button Down</button> */}

            <button className="button__blank"></button>

            <button className="button__dir" onClick={previewLocationsDown}>
              Down Preview
            </button>
          </div>
          <div className="game__buttons--remove">
            <button className="button__remove" onClick={removePreview}>
              remove preview
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Game;
