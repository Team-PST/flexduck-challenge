import React, { useEffect, useState } from "react";
import {
  previewDown,
  previewRight,
  createGrid,
  rowReverse,
  column,
  columnReverse,
  pushRightRow,
  pushRightColumn,
  pushLeft,
  pushUp,
  pushDown,
  centerXAxis,
  centerYAxis,
} from "../logic";
import GameBoard from "./GameBoard";

//maybe props are in app for difficulty? lets discuss on this
function Game() {
  const levels = {
    one: {
      boardSize: 5,
      winCondition: [4, 4],
      initialDuckyLocation: [0, 0],
    },
    two: { boardSize: 5, winCondition: [0, 0], initialDuckyLocation: [4, 4] },
  };
  /*  future development: add obstacles and make them go in a certain way to have
      them practice different properties more! */

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
    },
    "justify-content": {
      center: "center",
      "flex-start": "retern stame",
      "flex-end": "flex-end",
      "space-between": "space-between",
    },
    // "align-items": ["end", "start", "center", "stretch", "baseline"],
  };
  //but keeping concerns separated for now
  const [formData, setFormData] = useState(initialFormData);

  //initializing grid 5x5

  const initialGrid = createGrid(levels["one"].boardSize);
  const [level, setLevel] = useState("one");
  const [previewLocations, setPreviewLocations] = useState([[]]);
  const [duckyLocation, setDuckyLocation] = useState(
    levels["one"].initialDuckyLocation
  );
  const [die, setDie] = useState(3);
  const [errorForm, setErrorForm] = useState(initialErrorData);
  const [goal, setGoal] = useState(levels["one"].winCondition);
  const [grid, setGrid] = useState(initialGrid); //maybe use useMemo for optimization?
  //when it's row, justify-content = x axis and align-items = y axis
  //when it's column justify-content = y axis and align items = x axis
  //direction x or direction y
  console.log(duckyLocation, goal);
  function handleLevel(evt) {
    const value = evt.target.value;
    setLevel(value);
    setDuckyLocation(levels[value].initialDuckyLocation);
    setGoal(levels[value].winCondition);
  }

  function getFunctionFromForm(flexDirectionStr, propStr, valueStr) {
    if (flexDirectionStr === "row") {
      if (propStr === "align-items") {
        if (valueStr === "flex-end") {
          return pushDown;
        } else if (valueStr === "center") {
          return centerYAxis;
        }
      }
      if (propStr === "justify-content") {
        if (valueStr === "flex-end") {
          return pushRightRow;
        } else if (valueStr === "center") {
          return centerXAxis;
        }
      }
    }
    if (flexDirectionStr === "row-reverse") {
      if (propStr === "align-items") {
        if (valueStr === "flex-end") {
          return pushDown;
        } else if (valueStr === "center") {
          return centerYAxis;
        }
      }
      if (propStr === "justify-content") {
        if (valueStr === "flex-end") {
          return pushLeft;
        } else if (valueStr === "center") {
          return centerXAxis;
        }
      }
    }
    if (flexDirectionStr === "column") {
      if (propStr === "align-items") {
        if (valueStr === "flex-end") {
          return pushRightColumn;
        } else if (valueStr === "center") {
          return centerXAxis;
        }
      }

      if (propStr === "justify-content") {
        if (valueStr === "flex-end") {
          return pushDown;
        } else if (valueStr === "center") {
          return centerYAxis;
        }
      }
    }
    if (flexDirectionStr === "column-reverse") {
      if (propStr === "align-items") {
        if (valueStr === "flex-end") {
          return pushRightColumn;
        } else if (valueStr === "center") {
          return centerXAxis;
        }
      }
      if (propStr === "justify-content") {
        if (valueStr === "flex-end") {
          return pushUp;
        } else if (valueStr === "center") {
          return centerYAxis;
        }
      }
    }
  }
  function commitRoll(event) {
    console.log("ducky Location", duckyLocation);
    event.preventDefault();
    const newGrid = [...grid];
    const duckyLocationStr = JSON.stringify(duckyLocation);
    if (JSON.stringify(previewLocations[0]) === duckyLocationStr) {
      for (let location of previewLocations) {
        newGrid[location[0]][location[1]] = 1;
      }
      setDuckyLocation(previewLocations[previewLocations.length - 1]);
      setPreviewLocations([[]]);
      setGrid(newGrid);
      setFormData(initialFormData);
      setErrorForm(initialErrorData);
    }
    if (
      JSON.stringify(goal) ===
      JSON.stringify(previewLocations[previewLocations.length - 1])
    ) {
      alert("YAY! YOU MADE IT!");
      setDuckyLocation(levels["one"].initialDuckyLocation);
      setGrid(initialGrid);
      setFormData(initialFormData);
      setErrorForm(initialErrorData);
      setPreviewLocations([[]]);
    }
  }

  function handleErrorForm(name, state) {
    setErrorForm((fData) => ({
      ...fData,
      [name]: state,
    }));
  }

  async function handleChange(evt) {
    evt.preventDefault();
    const name = evt.target.name;
    const value = evt.target.value;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    const fn1 = verifyFlexDirection("flex-direction", newFormData);
    const fn2 = verifyFlexProps("justify-content", newFormData);
    const fn3 = verifyFlexProps("align-items", newFormData);
    let previewCoordinates = [[]];

    if (fn1 && typeof fn1 === "function") {
      previewCoordinates = fn1(die, levels[level].boardSize);
    }
    if (fn2 && typeof fn2 === "function") {
      previewCoordinates = fn2(previewCoordinates, levels[level].boardSize - 1);
    }
    if (fn3 && typeof fn3 === "function") {
      previewCoordinates = fn3(previewCoordinates, levels[level].boardSize - 1);
    }
    setPreviewLocations(previewCoordinates);
  }

  //validate correct flex prop with value
  function verifyFlexProps(name, newFormData) {
    const flexBoxPropValue = newFormData[name].replace(/\s/g, "").split(":");
    const flexBoxProperty = flexBoxPropValue[0];
    const flexBoxValue = flexBoxPropValue[1];
    const flexBoxDirectionArr = newFormData["flex-direction"]
      .replace(/\s/g, "")
      .split(":");
    const flexBoxDirectionStr = flexBoxDirectionArr[1];
    if (
      flexBoxProperty === name &&
      flexProps[flexBoxProperty] &&
      flexProps[flexBoxProperty][flexBoxValue]
    ) {
      const fn = getFunctionFromForm(
        flexBoxDirectionStr,
        flexBoxProperty,
        flexBoxValue
      );

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

  //function to validate correct flex-direction
  function verifyFlexDirection(name, newFormData) {
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

  return (
    <>
      <div className="game">
        <h1 className="game__title">
          Create the bridge necessary to get the duck to the end!
        </h1>
        <h4 className="game__title">
          <button
            tabindex="1"
            className="game_title"
            value="one"
            onClick={handleLevel}
          >
            {" "}
            Level 1
          </button>
          <button tabindex="2" value="two" onClick={handleLevel}>
            {" "}
            Level 2
          </button>
        </h4>
        {/* <h4 className="game__title">Level 1</h4> */}
        <GameBoard
          className="grid"
          grid={grid}
          duckyLocation={duckyLocation}
          previewLocations={previewLocations}
          winCondition={levels[level].winCondition}
        />
        <div>
          <form className="form" onSubmit={commitRoll}>
            <p className="form--top">display:flex;</p>
            <input
              tabindex="3"
              className={`form--input form--text ${errorForm["flex-direction"]}`}
              name="flex-direction"
              placeholder="flex-direction:"
              onChange={handleChange}
              value={formData["flex-direction"]}
            ></input>
            <input
              tabindex="4"
              className={`form--input form--text ${errorForm["justify-content"]}`}
              name="justify-content"
              placeholder="justify-content:"
              onChange={handleChange}
              value={formData["justify-content"]}
            ></input>
            <input
              tabindex="5"
              className={`form--bottom form--input form--text ${errorForm["align-items"]}`}
              name="align-items"
              placeholder="align-items:"
              onChange={handleChange}
              value={formData["align-items"]}
            ></input>

            <button tabindex="6" className="button__submit" type="submit">
              Next
            </button>
          </form>
        </div>
        {/* dev purposes to test movement */}
        {/* <div className="game__buttons">
          <div className="game__buttons--direction">
            <button onClick={previewDown}>Button Down</button>

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
        </div> */}
      </div>
    </>
  );
}

export default Game;
