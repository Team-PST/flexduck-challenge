import "./App.css";
import Game from "./components/Game";
import Rules from "../src/components/Rules";
import "./style/GameBoard.css";
import ToUse from "./components/ToUse";

function App() {
  return (
    <div className="app">
      <h1>Welcome to Flexduck Challenge!</h1>
      <p>
        Flexduck was created to teach new front-end developers of how to utilize
        the css layout model, flexbox. With this game, we will teach you the
        flexbox directions through justify content, align items and
        flex-direction
      </p>
      <div className="main">
        <div className="main-sec">
          <Rules />
          <ToUse />
        </div>

        <Game />
      </div>
    </div>
  );
}

export default App;
