import "./App.css";
import Game from "./components/Game";

function App() {
  // const [userData, setUserData] =
  //   useState();
  //   localStorage.getItem(/* What are we naming the userdata */)

  // useEffect(function getData() {
  //   function addToLocal() {
  //     if (Object.keys(userData).length === 0) {
  //       // do stuff like set userData
  //     }
  //   }
  //   addToLocal();
  // }, []);

  return (
    <div>
      <h1>Welcome to Flexduck Challenge!</h1>
      <p>
        Flexduck was created to teach new front-end developers of how to utilize
        the css layout model, flexbox. With this game, we will teach you the
        flexbox directions through justify content, align items and
        flex-direction
      </p>
      <Game />
    </div>
  );
}

export default App;
