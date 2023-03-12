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
          <li>flex-start</li>
          <li>flex-end</li>
          <li>center</li>
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
          <li>align-items: flex-start;</li>
          <li>align-items: flex-end; </li>
          <li>center: items are centered along the line</li>
          <li>align-items: self-start;</li>
          <li>align-items: self-end;</li>
        </ul>
      </div>
    </div>
  );
}

export default ToUse;
