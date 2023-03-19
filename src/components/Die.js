import React from "react";
import { useState } from "react";

function Die() {
  //use state to pass this number to the game, therefore since we can't pass up, this die will need to be
  //placed within the game component
  const [num, setNum] = useState(0);

  function getRandomInt() {
    const min = Math.ceil(1);
    const max = Math.floor(4);
    const rand = Math.floor(Math.random() * (max - min) + min);
    setNum(rand); // The maximum is exclusive and the minimum is inclusive
  }

  return (
    <div onClick={getRandomInt} className="outside-die">
      <div className="inside-die">{num}</div>
    </div>
  );
}

export default Die;
