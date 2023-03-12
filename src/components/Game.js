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
  //initializing grid 5x5
  const initialGrid = createGrid(5, 5);
  //but keeping concerns separated for now
  const [grid, setGrid] = useState(initialGrid); //maybe use useMemo for optimization?
  const [previewLocations, setPreviewLocations] = useState([[]]);
  const [start, setStart] = useState([0, 0]);
  const [finishCoordinates, setFinishCoordinates] = useState([4, 4]);
  const [duckyLocation, setDuckyLocation] = useState(start);
  const [die, setDie] = useState(3);
  const [turnsTaken, setTurnsTaken] = useState(0);
  const [formData, setFormData] = useState("");
  const [errorForm, setErrorForm] = useState(false);
  const [direction, setDirection] = useState("");

  function updateBoard() {}

  const flexProps = {
    "flex-direction": ["row", "row-reverse", "column", "column-reverse"],
    "align-content": [
      "center",
      "flex-start",
      "flex-end",
      "space-between",
      "space-around",
      "space-evenly",
    ],
    "justify-content": [
      "center",
      "flex-start",
      "flex-end",
      "space-between",
      "space-around",
      "space-evenly",
    ],
    "align-items": ["end", "start", "center", "stretch", "baseline"],
  };

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

  function handleChange(evt) {
    let name = evt.target.name;
    let val = evt.target.value;
    verfiyDirection(name, val, evt);
    verifyContent(name, val, evt);

    setFormData((fData) => ({
      ...fData,
      [name]: val,
    }));
  }

  //function to verfiyDirection
  function verfiyDirection(name, val, evt) {
    //event.target.value == "column?"
    evt.preventDefault();
    const flexBoxOption = val.split(":")[0];
    const flexBoxDirection = val.split(":")[1];
    //console.log(name);
    //checking to so if the name equals the the flex-direction
    if (name === "flex-direction") {
      //if box option is equal to
      if (flexBoxOption === "flex-direction") {
        //loop through the flexbox options and then do
        const found = flexProps["flex-direction"].find(
          (element) => flexBoxDirection === element
        );
        if (found === undefined) {
          setErrorForm(true);
          //once the setErrorForm is true the warning comes up
        } else {
          setDirection(found);
        }
      }
    }
  }

  //function to verfiyDirection
  function verifyContent(name, val, evt) {
    //event.target.value == "column?"
    evt.preventDefault();
    const flexBoxOption = val.split(":")[0];
    const flexBoxDirection = val.split(":")[1];
    //console.log(name);
    //checking to so if the name equals the the flex-direction
    if (name === "flex-direction") {
      //if box option is equal to
      if (flexBoxOption === "flex-direction") {
        //loop through the flexbox options and then do
        const found = flexProps["flex-direction"].find(
          (element) => flexBoxDirection === element
        );
        if (found === undefined) {
          setErrorForm(true);
          //once the setErrorForm is true the warning comes up
        } else {
          setDirection(found);
        }
      }
    }
  }

  //function to justifyContent
  function verifyContent(event) {
    //event.target.value == "column?"
    event.preventDefault();
    //information for flexDiretion
    const data = event.target.flexJustify.value;
    //if there is flex-direction then look at the other value after the :
    if (data.split(":")[0] === "justify-content") {
      if (data.split(":")[1] === "flex-start") {
        //duck can only move left or right
        //use a state?
      } else if (data.split(":")[1] === "column") {
        //duck moves down
        //use a state
      } else {
        //Next button cannot be pressed
      }
    } else {
      //else for console log nothing entered
      //next button cannot be pressed
    }
    //else return alert you need flex direction
    console.log(data);
  }
  // "center",
  //     "flex-start",
  //     "flex-end",
  //     "space-between",
  //     "space-around",
  //     "space-evenly",

  return (
    <>
      <div>
        <h1>Create the bridge necessary to get the duck to the end!</h1>
        <GameBoard
          className="grid"
          grid={grid}
          duckyLocation={duckyLocation}
          previewLocations={previewLocations}
        />
      </div>
      <form className="form" onSubmit={verifyForm}>
        <p className="inputformTop ">display:flex;</p>
        <input
          className="inputform inputText"
          name="flex-direction"
          placeholder="flex-direction:"
          onChange={handleChange}
          value={formData["flex-direction"]}
        ></input>
        <input
          className="inputform inputText"
          name="flexJustify"
          placeholder="justify-content:"
          onChange={handleChange}
          value={formData["justify-content"]}
        ></input>
        <input
          className="inputformBot inputText"
          name="flexAlign"
          placeholder="align-items:"
          onChange={handleChange}
          value={formData["align-items"]}
        ></input>

        <button type="submit">Next</button>
      </form>

      <br />
      <br />
      <button onClick={previewDown}>Button Down</button>
      <button onClick={previewLocationsDown}>Preview Down</button>
      <button onClick={previewLocationsRight}>Preview Right</button>
      <button onClick={previewLocationsLeft}>Preview Left</button>
      <button onClick={previewLocationsUp}>Preview Up</button>

      <button onClick={removePreview}>remove preview</button>
    </>
  );
}

export default Game;
