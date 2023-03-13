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
  const [justify, setJustify] = useState("");
  const [align, setAlign] = useState("");

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

  //function for onSubmit with form
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
  //make the 'next' button pressable
  //send the info to the logic
  function verifyForm(event) {
    //event.target.value == "column?"
    event.preventDefault();
    if (direction && justify && align) {
      console.log("send info to logic 🚀");
    }
  }

  function handleChange(evt) {
    let name = evt.target.name;
    let val = evt.target.value;
    verfiyDirection(name, val, evt);
    verifyContent(name, val, evt);
    verifyAlign(name, val, evt);
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
        console.log(flexProps["flex-direction"]);
        console.log(flexBoxDirection);
        console.log(found);
        if (found === undefined) {
          setErrorForm(true);
          //once the setErrorForm is true the warning comes up
        } else {
          setDirection(found);
        }
      }
    }
  }

  //function to verfiy justify content
  function verifyContent(name, val, evt) {
    //event.target.value == "column?"
    evt.preventDefault();
    const justifyOption = val.split(":")[0];
    const justifyDirection = val.split(":")[1];
    console.log(name);
    //checking to so if the name equals the the flex-direction
    if (name === "justify-content") {
      //if box option is equal to
      if (justifyOption === "justify-content") {
        //loop through the flexbox options and then do
        const found = flexProps["justify-content"].find(
          (element) => justifyDirection === element
        );

        if (found === undefined) {
          setErrorForm(true);
          //once the setErrorForm is true the warning comes up
        } else {
          setJustify(found);
        }
      }
    }
  }

  //function to verfiy align items
  function verifyAlign(name, val, evt) {
    //event.target.value == "column?"
    evt.preventDefault();
    const alignOption = val.split(":")[0];
    const alignDirection = val.split(":")[1];
    //console.log(name);
    //checking to so if the name equals the the flex-direction
    if (name === "align-items") {
      //if box option is equal to
      if (alignOption === "align-items") {
        //loop through the flexbox options and then do
        const found = flexProps["align-items"].find(
          (element) => alignDirection === element
        );
        console.log(found);
        if (found === undefined) {
          setErrorForm(true);
          //once the setErrorForm is true the warning comes up
        } else {
          setAlign(found);
        }
      }
    }
  }

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
              className="form--input form--text"
              name="flex-direction"
              placeholder="flex-direction:"
              onChange={handleChange}
              value={formData["flex-direction"]}
            ></input>
            <input
              className="form--input form--text"
              name="justify-content"
              placeholder="justify-content:"
              onChange={handleChange}
              value={formData["justify-content"]}
            ></input>
            <input
              className="form--bottom form--text"
              name="align-items"
              placeholder="align-items:"
              onChange={handleChange}
              value={formData["align-items"]}
            ></input>
            {console.log(errorForm)}
            {!errorForm ? (
              <button className="disabled" type="submit">
                Next
              </button>
            ) : (
              <button className="submit" type="submit">
                Next
              </button>
            )}
          </form>
        </div>
        <div className="game__buttons">
          <div className="game__buttons--direction">
            {/* <button onClick={previewDown}>Button Down</button> */}

            <button className="button__blank"></button>
            <button className="button__dir" onClick={previewLocationsUp}>
              Up Preview
            </button>
            <button className="button__blank"></button>
            <button className="button__dir" onClick={previewLocationsLeft}>
              Left Preview
            </button>
            <button className="button__dir" onClick={previewLocationsDown}>
              Down Preview
            </button>
            <button className="button__dir" onClick={previewLocationsRight}>
              Right Preview
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
