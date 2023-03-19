import React from "react";
import { useState } from "react";
import chevronDown from "../assets/icons/chevron-down.svg";
import chevronUp from "../assets/icons/chevron-up.svg";

function ToUse() {
  /*****************************styling function ***************************/
  //if isShown is false not all questions are displayed.  If true all questions are displayed
  const [isShown, setIsShown] = useState(false);

  //the state for the chevron image
  const [chevron, setChevron] = useState(false);

  function showInfo(category) {
    console.log(category);
    //setActiveTheme(category);
    setIsShown((prev) =>
      Boolean(!prev[category])
        ? { ...prev, [category]: true }
        : { ...prev, [category]: false }
    );
    setChevron(!chevron);
  }

  return (
    <div className="toUse">
      <h3>What to use</h3>
      <div className="toUse__direction">
        <p>
          For <span className="toUse__highlight">flex-direction</span> you will
          use this property to aim your ducky in the right direction! You can
          use the 2 directions.
        </p>

        <p>
          More info{" "}
          <button className="button__toggle">
            {chevron === false ? (
              <img
                className=""
                src={chevronUp}
                alt="chevron down "
                onClick={() => showInfo("row")}
              />
            ) : (
              <img
                className=""
                src={chevronDown}
                alt="chevron up"
                onClick={() => showInfo("row")}
              />
            )}
          </button>
        </p>

        {isShown["row"] ? (
          <ul>
            <li>row</li>
            <li>row-reverse</li>
            <li>column-reverse</li>
            <li>column</li>
          </ul>
        ) : (
          <div></div>
        )}
      </div>
      <div className="toUse__justify">
        <p>
          For <span className="toUse__highlight">justify-content</span> you use
          this property to align the items on the main axis. If you are using{" "}
          <span className="toUse__highlight">flex-direction: row</span> your
          main axis is horizontal. Else you would be using
          <span className="toUse__highlight">flex-direction: column</span>,
          therefore your main axis would be vertical.
        </p>
        <p>
          More Info{" "}
          <button className="button__toggle">
            {chevron === false ? (
              <img
                className=""
                src={chevronUp}
                alt="chevron down "
                onClick={() => showInfo("justify")}
              />
            ) : (
              <img
                className=""
                src={chevronDown}
                alt="chevron up"
                onClick={() => showInfo("justify")}
              />
            )}
          </button>
        </p>
        {isShown["justify"] ? (
          <ul>
            <li>center</li>
            <li>flex-start</li>
            <li>flex-end</li>
            <li>space-between</li>
            <li>space-around</li>
            <li>space-evenly</li>
          </ul>
        ) : (
          <div></div>
        )}
      </div>

      <div className="toUse__align">
        <p>
          For <span className="toUse__highlight">align-items</span> you use this
          property to align the items on the secondary axis. If you are using{" "}
          <span className="toUse__highlight">flex-direction: row</span> your
          secondary axis is vertical. Else you would be using
          <span className="toUse__highlight">flex-direction: column</span>,
          therefore your secondary axis would be horizontal.
        </p>
        <p>
          More Info{" "}
          <button className="button__toggle">
            {chevron === false ? (
              <img
                className=""
                src={chevronUp}
                alt="chevron down "
                onClick={() => showInfo("align")}
              />
            ) : (
              <img
                className=""
                src={chevronDown}
                alt="chevron up"
                onClick={() => showInfo("align")}
              />
            )}
          </button>
        </p>
        {isShown["align"] ? (
          <ul>
            <li>end</li> <li>start</li> <li>center</li> <li>stretch</li>
            <li>baseline</li>
          </ul>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default ToUse;
