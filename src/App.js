import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import RouteList from "./RouteList";
import NavBar from "./NavBar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div>
          <RouteList />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
