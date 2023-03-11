import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import RouteList from "./RouteList";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
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
