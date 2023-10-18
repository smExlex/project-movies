import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <NavLink to="/">
            {/* <img
              classname="home-icon"
              src="src/assets/home-icon.svg"
              alt="Home icon"
            /> */}
            <h1>HOME</h1>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
