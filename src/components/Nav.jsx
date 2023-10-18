import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <NavLink to="/">
            <h1>UPCOMING MOVIES</h1>
          </NavLink>
        </li>
        <li>
          <NavLink to="/popular">
            <h1>POPULAR MOVIES</h1>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
