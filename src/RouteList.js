import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
//import all end points
import HomePage from "./HomePage";
import Game from "./Game";

function RouteList() {
  //if localstorage.getItem(userData) return jsx
  //else return jsx

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/game" element={<Game />} />
      {/* <Route />
      <Route /> */}
    </Routes>
  );
}

export default RouteList;
