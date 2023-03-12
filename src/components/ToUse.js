import React from "react";

function ToUse() {
  return (
    <div className="toUse">
      <h3>What to use</h3>
      <div className="direction">
        <p>
          For <span>flex-direction</span> you will use this property to aim your
          ducky in the right direction! You can use the 2 directions.
        </p>
        <ul>
          <li>row</li>
          <li>row-reverse</li>
          <li>column-reverse</li>
          <li>column</li>
        </ul>
      </div>
      <div className="justify">
        <p>
          For <span>justify-content</span> you use this property to align the
          items on the main axis. If you are using{" "}
          <span>flex-direction: row</span> your main axis is horizontal. Else
          you would be using
          <span>flex-direction: column</span>, therefore your main axis would be
          vertical.
        </p>
        <ul>
          <li>center</li>
          <li>flex-start</li>
          <li>flex-end</li>
          <li>space-between</li>
          <li>space-around</li>
          <li>space-evenly</li>
        </ul>
      </div>

      <div className="align">
        <p>
          For <span>align-items</span> you use this property to align the items
          on the secondary axis. If you are using{" "}
          <span>flex-direction: row</span> your secondary axis is vertical. Else
          you would be using
          <span>flex-direction: column</span>, therefore your secondary axis
          would be horizontal.
        </p>
        <ul>
          <li>end</li> <li>start</li> <li>center</li> <li>stretch</li>
          <li>baseline</li>
        </ul>
      </div>
    </div>
  );
}

export default ToUse;
