import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <div>
        <NavLink to="/"> Home</NavLink>
        <NavLink to="/game"> Game</NavLink>
        {/* <NavLink to="/"> Home</NavLink> */}
      </div>
    </nav>
  );
}

export default NavBar;
