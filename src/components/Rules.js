import React from "react";

function Rules() {
  return (
    <section className="rules">
      <div className="rules__div">
        <h3 className="rules__title">Rules</h3>
        <ul className="rules__list">
          <li className="rules__item">
            To play this game you need to move the ducky to the red square.
          </li>
          <li className="rules__item">
            To move you will have two squares each turn which will start in the
            top left corner.
          </li>
          <li className="rules__item">
            You need to connect the new sqaures with the end of your last
            squares by typing flexbox commmands into the input to move the
            squares in the correct direction.
          </li>
        </ul>
      </div>
      <div className="rules__div">
        <div className="rules__wrapper">
          <div className="rules__divEx">screen shot of example</div>
          <div className="rules__divEx">screen shot of example</div>
          <div className="rules__divEx">screen shot of example</div>
        </div>
      </div>
    </section>
  );
}

export default Rules;
