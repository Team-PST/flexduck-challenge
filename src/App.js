import Game from "./components/Game";
import Rules from "../src/components/Rules";
import "./style/GameBoard.scss";
import ToUse from "./components/ToUse";

function App() {
  return (
    <div className="welcome">
      <div className="welcome__titleBanner">
        <div className="welcome__img"></div>
        <h1 className="welcome__titleText">Welcome to Flexduck Challenge!</h1>
        <div className="welcome__img"></div>
      </div>
      <p className="welcome__p">
        Flexduck was created to teach new front-end developers of how to utilize
        the css layout model, flexbox. With this game, we will teach you the
        flexbox directions through justify content, align items and
        flex-direction
      </p>
      <Rules />
      <div className="main">
        <div className="main__sec">
          <ToUse />
          <Game />
        </div>
      </div>
    </div>
  );
}

export default App;
