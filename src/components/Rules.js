import React from "react";
import img1 from "../assets/images/pic02.png";
import img2 from "../assets/images/pic03.png";
import img3 from "../assets/images/pic04.png";

function Rules() {
  return (
    <section className="rules">
      <div className="rules__div">
        <h3 className="rules__title">Rules</h3>
        <ul className="rules__list">
          <li className="rules__item">
            To play this game you need to move the ducky to the red square.
          </li>
          \]-[;po9iuterdsa76UYI98P0\=]
          <li className="rules__item">
            To move you will have same number of squares each turn which will
            start in the top left corner.
          </li>
          <li className="rules__item">
            You need to connect the new sqaures with the end of your last square
            by typing flexbox commmands into the input to move the squares in
            the correct direction and end on the red square. SQUARE No. 1 MUST
            ALWAYS START WHERE THE DUCKY IS!
          </li>
          <li className="rules__item">
            You can preview changes as you type the flexbox information.
          </li>
        </ul>
      </div>
      <div className="rules__div">
        <div className="rules__wrapper">
          <div className="rules__divEx1"></div>

          <div className="rules__divEx2"></div>
        </div>
      </div>
    </section>
  );
}

export default Rules;
